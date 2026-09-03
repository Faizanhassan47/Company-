import { useEffect, useState } from 'react';

export const useSecretCode = (secretCode: string) => {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    let input = '';
    const code = secretCode.toLowerCase();

    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore keypresses inside inputs or textareas
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      input += e.key.toLowerCase();

      // Keep input length manageable
      if (input.length > code.length) {
        input = input.slice(-code.length);
      }

      if (input === code) {
        setSuccess(true);
        input = ''; // Reset after success
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [secretCode]);

  return { success, setSuccess };
};
