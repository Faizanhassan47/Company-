import React, { useEffect, useMemo, useRef, useState } from 'react';
import gsap from 'gsap';
import {
  MOBILE_LAYER_IDS,
  OPENING_LAYERS,
  type CodeLayer,
  type CodeToken
} from './openingSnippets';
import './OpeningAnimation.css';

interface OpeningAnimationProps {
  onComplete: () => void;
}

const TOKEN_CLASS: Record<CodeToken['t'], string> = {
  plain: 'oa-tok-plain',
  keyword: 'oa-tok-keyword',
  string: 'oa-tok-string',
  comment: 'oa-tok-comment',
  fn: 'oa-tok-fn',
  tag: 'oa-tok-tag',
  attr: 'oa-tok-attr',
  number: 'oa-tok-number',
  type: 'oa-tok-type',
  punct: 'oa-tok-punct'
};

const flattenLine = (tokens: CodeToken[]) => tokens.map(t => t.v).join('');

const useIsMobile = () => {
  const [mobile, setMobile] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia('(max-width: 720px)').matches : false
  );

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 720px)');
    const update = () => setMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  return mobile;
};

const CodePanel: React.FC<{
  layer: CodeLayer;
  typedChars: number;
  showCursor: boolean;
}> = React.memo(({ layer, typedChars, showCursor }) => {
  let remaining = typedChars;
  const rendered: React.ReactNode[] = [];

  layer.lines.forEach((tokens, lineIndex) => {
    const full = flattenLine(tokens);
    const take = Math.max(0, Math.min(full.length, remaining));
    remaining -= take;

    let consumed = 0;
    const visibleTokens: React.ReactNode[] = [];

    for (const token of tokens) {
      if (consumed >= take) break;
      const slice = token.v.slice(0, Math.max(0, take - consumed));
      if (slice) {
        visibleTokens.push(
          <span key={`${lineIndex}-${consumed}`} className={TOKEN_CLASS[token.t]}>
            {slice}
          </span>
        );
      }
      consumed += token.v.length;
    }

    const isActiveLine = take > 0 && take < full.length;
    const isLastVisible = take > 0 && remaining <= 0;

    rendered.push(
      <React.Fragment key={layer.id + lineIndex}>
        <span className="oa-line-num">{String(lineIndex + 1).padStart(2, '0')}</span>
        <span className="oa-line-code">
          {visibleTokens}
          {showCursor && (isActiveLine || (isLastVisible && take === full.length && lineIndex === layer.lines.length - 1)) ? (
            <span className="oa-cursor" aria-hidden="true" />
          ) : null}
        </span>
      </React.Fragment>
    );
  });

  return (
    <article className="oa-panel" aria-label={`${layer.label} source panel`}>
      <header className="oa-panel-bar">
        <span className="oa-panel-label">{layer.label}</span>
        <span className="oa-panel-file">{layer.filename}</span>
      </header>
      <pre className="oa-code">{rendered}</pre>
    </article>
  );
});

CodePanel.displayName = 'CodePanel';

export const OpeningAnimation: React.FC<OpeningAnimationProps> = ({ onComplete }) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const cameraRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const layerRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const completedRef = useRef(false);
  const typedRef = useRef<Record<string, number>>({});
  const mobile = useIsMobile();

  const layers = useMemo(() => {
    if (!mobile) return OPENING_LAYERS;
    return OPENING_LAYERS.filter(layer =>
      (MOBILE_LAYER_IDS as readonly string[]).includes(layer.id)
    );
  }, [mobile]);

  const [typed, setTyped] = useState<Record<string, number>>(() =>
    Object.fromEntries(OPENING_LAYERS.map(layer => [layer.id, 0]))
  );
  const [activeId, setActiveId] = useState<string | null>(null);
  const [exiting, setExiting] = useState(false);

  const finish = React.useCallback(() => {
    if (completedRef.current) return;
    completedRef.current = true;
    setExiting(true);
    window.setTimeout(() => onComplete(), 420);
  }, [onComplete]);

  useEffect(() => {
    // Always play the full cinematic intro. Skip Intro / Escape remain the exit.
    // (OS prefers-reduced-motion used to force a 0.2s path that faded the overlay
    // at a negative timeline time and looked broken.)
    const durationCap = mobile ? 3 : 5.5;
    let cancelled = false;
    let failSafe = 0;
    let tl: gsap.core.Timeline | null = null;
    let raf2 = 0;

    // Keep lag smoothing ON during the intro. lagSmoothing(0) makes any delayed
    // first paint (hydration, tab throttle, Lenis ticker) jump the whole timeline
    // to the end — which looked like the intro "not working".
    gsap.ticker.lagSmoothing(500, 33);

    const pushTyped = (id: string, chars: number) => {
      const next = Math.floor(chars);
      if (typedRef.current[id] === next) return;
      typedRef.current[id] = next;
      setTyped(prev => (prev[id] === next ? prev : { ...prev, [id]: next }));
    };

    const placeLayer = (layer: CodeLayer, el: HTMLDivElement, visible: boolean) => {
      gsap.set(el, {
        xPercent: -50,
        yPercent: -50,
        x: layer.x * (mobile ? 0.35 : 1),
        y: layer.y * (mobile ? 0.35 : 1),
        z: layer.z,
        rotateX: mobile ? layer.rotateX * 0.35 : layer.rotateX,
        rotateY: mobile ? layer.rotateY * 0.35 : layer.rotateY,
        scale: visible ? 1 : 0.94,
        opacity: visible ? 1 : 0,
        force3D: true,
        transformOrigin: '50% 50%'
      });
    };

    const start = () => {
      if (cancelled) return;
      const camera = cameraRef.current;
      const readyLayers = layers.filter(layer => layerRefs.current[layer.id]);
      if (!camera || readyLayers.length === 0) {
        finish();
        return;
      }

      const totals = Object.fromEntries(
        readyLayers.map(layer => [
          layer.id,
          layer.lines.reduce((sum, line) => sum + flattenLine(line).length, 0)
        ])
      ) as Record<string, number>;

      // Always paint a solid overlay first — never leave the homepage showing through.
      if (rootRef.current) gsap.set(rootRef.current, { opacity: 1 });
      gsap.set(camera, { z: 0, rotateX: 0, rotateY: 0, force3D: true });
      if (gridRef.current) gsap.set(gridRef.current, { opacity: 0.2, y: 24 });

      readyLayers.forEach(layer => {
        const el = layerRefs.current[layer.id];
        if (el) placeLayer(layer, el, false);
      });

      tl = gsap.timeline({
        defaults: { ease: 'sine.inOut', force3D: true },
        onComplete: finish
      });
      timelineRef.current = tl;
      failSafe = window.setTimeout(finish, (durationCap + 1.2) * 1000);

      if (gridRef.current) {
        tl.to(gridRef.current, { opacity: 0.45, y: 0, duration: 0.9, ease: 'power2.out' }, 0);
      }

      const segment = durationCap / Math.max(readyLayers.length + 0.85, 2);
      const overlap = 0.72;

      readyLayers.forEach((layer, index) => {
        const el = layerRefs.current[layer.id];
        if (!el || !tl) return;
        const at = index * segment * overlap;

        tl.call(() => setActiveId(layer.id), [], at);

        tl.to(
          el,
          {
            opacity: 1,
            scale: 1,
            duration: Math.min(0.55, segment * 0.4),
            ease: 'power2.out'
          },
          at
        );

        const proxy = { chars: 0 };
        tl.to(
          proxy,
          {
            chars: totals[layer.id],
            duration: Math.max(0.7, segment * 0.78),
            ease: 'none',
            onUpdate: () => pushTyped(layer.id, proxy.chars)
          },
          at + 0.12
        );

        tl.to(
          camera,
          {
            z: Math.abs(layer.z) * 0.88,
            rotateY: mobile ? 0 : layer.rotateY * -0.12,
            rotateX: mobile ? 0 : layer.rotateX * -0.1,
            duration: segment,
            ease: 'sine.inOut'
          },
          at
        );

        if (index < readyLayers.length - 1) {
          tl.to(
            el,
            {
              opacity: 0.22,
              scale: 0.985,
              duration: 0.5,
              ease: 'power1.inOut'
            },
            at + segment * 0.78
          );
        }
      });

      const exitAt = durationCap * 0.78;
      const fadeAt = Math.max(exitAt, durationCap - 0.45);

      tl.to(
        camera,
        {
          z: '+=720',
          rotateY: mobile ? 0 : '+=4',
          duration: Math.max(0.4, durationCap * 0.22),
          ease: 'power2.inOut'
        },
        exitAt
      );

      readyLayers.forEach(layer => {
        const el = layerRefs.current[layer.id];
        if (!el || !tl) return;
        tl.to(
          el,
          {
            opacity: 0,
            scale: 1.04,
            z: `+=${mobile ? 280 : 520}`,
            duration: Math.max(0.35, durationCap * 0.2),
            ease: 'power2.inOut'
          },
          exitAt
        );
      });

      if (gridRef.current) {
        tl.to(gridRef.current, { opacity: 0, duration: 0.45, ease: 'power1.out' }, exitAt + 0.05);
      }

      if (rootRef.current) {
        tl.to(rootRef.current, { opacity: 0, duration: 0.45, ease: 'power1.out' }, fadeAt);
      }
    };

    const raf1 = window.requestAnimationFrame(() => {
      raf2 = window.requestAnimationFrame(start);
    });

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        tl?.kill();
        finish();
      }
    };
    window.addEventListener('keydown', onKey);

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(raf1);
      window.cancelAnimationFrame(raf2);
      window.clearTimeout(failSafe);
      window.removeEventListener('keydown', onKey);
      tl?.kill();
      timelineRef.current = null;
      gsap.ticker.lagSmoothing(500, 33);
    };
  }, [finish, layers, mobile]);

  return (
    <div
      ref={rootRef}
      className={`oa-root${exiting ? ' is-exiting' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Tekmora software engineering introduction"
    >
      <button type="button" className="studio-btn-ghost oa-skip" onClick={finish} autoFocus>
        Skip Intro
      </button>

      <div className="oa-scene">
        <div ref={gridRef} className="oa-grid" aria-hidden="true" />
        <div className="oa-beam" aria-hidden="true" />
        <div ref={cameraRef} className="oa-camera">
          {layers.map(layer => (
            <div
              key={layer.id}
              className={`oa-layer${activeId === layer.id ? ' is-active' : ''}`}
              ref={node => {
                layerRefs.current[layer.id] = node;
              }}
            >
              <CodePanel
                layer={layer}
                typedChars={typed[layer.id] ?? 0}
                showCursor={activeId === layer.id}
              />
            </div>
          ))}
        </div>
        <div className="oa-vignette" aria-hidden="true" />
      </div>
    </div>
  );
};

export default OpeningAnimation;
