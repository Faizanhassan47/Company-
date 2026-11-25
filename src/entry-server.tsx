import { PassThrough } from 'node:stream';
import { renderToPipeableStream, renderToString } from 'react-dom/server';
import { ServerApp } from './App';
import './i18n';

export const render = (url: string) => new Promise<string>((resolve, reject) => {
  const stream = new PassThrough();
  stream.on('data', () => {});
  stream.on('end', () => {
    try {
      // The completed first pass resolves this route's lazy modules. A second
      // synchronous pass emits stable HTML without fallback swap scripts.
      resolve(renderToString(<ServerApp url={url} />));
    } catch (error) {
      reject(error);
    }
  });
  stream.on('error', reject);

  const { pipe, abort } = renderToPipeableStream(<ServerApp url={url} />, {
    onAllReady() { pipe(stream); },
    onShellError: reject,
    onError(error) { console.error('SSR render error', error); }
  });
  setTimeout(abort, 30_000);
});
