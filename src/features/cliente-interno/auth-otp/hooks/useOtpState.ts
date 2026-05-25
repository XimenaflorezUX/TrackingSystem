import { useState, useRef, useCallback } from 'react';

// ─── Constants ────────────────────────────────────────────────────────────────

const OTP_LENGTH = 6;

// ─── Interface ────────────────────────────────────────────────────────────────

export interface UseOtpStateReturn {
  values:        string[];
  inputRefs:     React.MutableRefObject<(HTMLInputElement | null)[]>;
  isComplete:    boolean;
  code:          string;
  handleChange:  (index: number, raw: string) => void;
  handleKeyDown: (index: number, e: React.KeyboardEvent<HTMLInputElement>) => void;
  handlePaste:   (e: React.ClipboardEvent<HTMLInputElement>) => void;
  reset:         () => void;
  focusFirst:    () => void;
  focusIndex:    (index: number) => void;
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

function digitsToValues(length: number, raw: string | undefined): string[] {
  const base = Array(length).fill('') as string[];
  if (!raw) return base;
  const digits = raw.replace(/\D/g, '').slice(0, length);
  for (let i = 0; i < digits.length; i += 1) {
    base[i] = digits[i] ?? '';
  }
  return base;
}

/**
 * Manages the state and interaction handlers for the 6-digit OTP input grid.
 *
 * @param length - Number of OTP digits (default: 6).
 * @param initialCode - Optional 6-digit string to pre-fill (e.g. from `?code=` en la URL).
 */
export function useOtpState(length: number = OTP_LENGTH, initialCode?: string): UseOtpStateReturn {
  const [values, setValues] = useState<string[]>(() => digitsToValues(length, initialCode));
  const inputRefs           = useRef<(HTMLInputElement | null)[]>([]);

  const focusFirst = useCallback(() => {
    setTimeout(() => inputRefs.current[0]?.focus(), 80);
  }, []);

  const focusIndex = useCallback((index: number) => {
    setTimeout(() => inputRefs.current[index]?.focus(), 80);
  }, []);

  const handleChange = useCallback(
    (index: number, raw: string) => {
      const char = raw.replace(/[^a-zA-Z0-9]/g, '').slice(-1);
      setValues((prev) => {
        const next = [...prev];
        next[index] = char;
        return next;
      });
      if (char && index < length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    },
    [length]
  );

  const handleKeyDown = useCallback(
    (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Backspace') {
        e.preventDefault();
        setValues((prev) => {
          const next = [...prev];
          if (next[index]) {
            next[index] = '';
          } else if (index > 0) {
            next[index - 1] = '';
            inputRefs.current[index - 1]?.focus();
          }
          return next;
        });
      } else if (e.key === 'ArrowLeft' && index > 0) {
        inputRefs.current[index - 1]?.focus();
      } else if (e.key === 'ArrowRight' && index < length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    },
    [length]
  );

  const handlePaste = useCallback(
    (e: React.ClipboardEvent<HTMLInputElement>) => {
      e.preventDefault();
      const pasted = e.clipboardData
        .getData('text')
        .replace(/[^a-zA-Z0-9]/g, '')
        .slice(0, length);
      const next = Array(length).fill('');
      pasted.split('').forEach((c, i) => { next[i] = c; });
      setValues(next);
      const focusIdx = Math.min(pasted.length, length - 1);
      inputRefs.current[focusIdx]?.focus();
    },
    [length]
  );

  const reset = useCallback(() => {
    setValues(Array(length).fill(''));
  }, [length]);

  return {
    values,
    inputRefs,
    isComplete: values.every((v) => v.length > 0),
    code:       values.join(''),
    handleChange,
    handleKeyDown,
    handlePaste,
    reset,
    focusFirst,
    focusIndex,
  };
}
