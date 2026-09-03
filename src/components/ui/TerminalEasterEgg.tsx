import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './TerminalEasterEgg.css';

interface TerminalEasterEggProps {
  onClose: () => void;
}

interface LogEntry {
  type: 'input' | 'output' | 'error';
  content: string;
}

export const TerminalEasterEgg: React.FC<TerminalEasterEggProps> = ({ onClose }) => {
  const [logs, setLogs] = useState<LogEntry[]>([
    { type: 'output', content: 'TEKMORA OS v9.4.2 [Restricted Access]' },
    { type: 'output', content: 'Authentication bypassed.' },
    { type: 'output', content: 'Type "help" for a list of commands.' }
  ]);
  const [input, setInput] = useState('');
  const [crashed, setCrashed] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    setLogs(prev => [...prev, { type: 'input', content: `root@tekmora:~# ${trimmed}` }]);

    const args = trimmed.toLowerCase().split(' ');
    const command = args[0];

    switch (command) {
      case 'help':
        setLogs(prev => [...prev, 
          { type: 'output', content: 'Available commands:' },
          { type: 'output', content: '  whoami    - Print corporate manifesto' },
          { type: 'output', content: '  contact   - Initialize comms relay' },
          { type: 'output', content: '  clear     - Clear terminal buffer' },
          { type: 'output', content: '  exit      - Close terminal' },
          { type: 'output', content: '  sudo      - Execute superuser command' }
        ]);
        break;
      case 'whoami':
        setLogs(prev => [...prev, 
          { type: 'output', content: '> We engineer systems.' },
          { type: 'output', content: '> We do not build brochures.' }
        ]);
        break;
      case 'contact':
        setLogs(prev => [...prev, { type: 'output', content: 'Initializing comms relay... Redirecting...' }]);
        setTimeout(() => {
          onClose();
          navigate('/contact');
        }, 1000);
        break;
      case 'clear':
        setLogs([]);
        break;
      case 'exit':
        onClose();
        break;
      case 'sudo':
        if (args[1] === 'rm' && args[2] === '-rf' && args[3] === '/') {
          setLogs(prev => [...prev, { type: 'error', content: 'CRITICAL ERROR: Initiating kernel panic...' }]);
          setTimeout(() => setCrashed(true), 1500);
        } else {
          setLogs(prev => [...prev, { type: 'error', content: 'Access denied: Incident reported.' }]);
        }
        break;
      default:
        setLogs(prev => [...prev, { type: 'error', content: `Command not found: ${command}` }]);
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
    }
    // Escape to close
    if (e.key === 'Escape') {
      onClose();
    }
  };

  if (crashed) {
    return (
      <div className="system-crash-overlay">
        <h1>ERROR</h1>
        <p>A fatal exception 0E has occurred at 0028:C0011E36 in VXD VMM(01).</p>
        <p>The current application will be terminated.</p>
        <br />
        <p>* Press CTRL+ALT+DEL again to restart your computer.</p>
        <p>* You will lose any unsaved information in all applications.</p>
        <br />
        <p>Press any key to reboot...</p>
      </div>
    );
  }

  return (
    <motion.div 
      className="terminal-overlay"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      onClick={() => inputRef.current?.focus()}
    >
      <div className="terminal-content">
        {logs.map((log, i) => (
          <div key={i} className="terminal-line" style={{ color: log.type === 'error' ? '#ff0000' : '#00ff00' }}>
            {log.content}
          </div>
        ))}
        <div className="terminal-input-row">
          <span className="terminal-prompt">root@tekmora:~#</span>
          <input 
            ref={inputRef}
            type="text" 
            className="terminal-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            autoComplete="off"
            spellCheck="false"
          />
        </div>
        <div ref={bottomRef} />
      </div>
    </motion.div>
  );
};
