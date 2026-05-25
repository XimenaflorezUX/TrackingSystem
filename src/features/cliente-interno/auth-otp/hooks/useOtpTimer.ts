import { useState, useEffect, useCallback } from 'react';

// ─── Constants ────────────────────────────────────────────────────────────────

const DEFAULT_DURATION = 300; // 5 minutes in seconds

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatTime(totalSeconds: number): string {
  const m = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
  const s = (totalSeconds % 60).toString().padStart(2, '0');
  return `${m}:${s} min`;
}

// ─── Interface ────────────────────────────────────────────────────────────────

export interface UseOtpTimerReturn {
  timeLeft:      number;
  isExpired:     boolean;
  formattedTime: string;
  reset:         () => void;
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

/**
 * Manages the countdown timer for OTP expiration.
 *
 * @param active   - Whether the timer should be ticking.
 * @param duration - Total duration in seconds (default: 300).
 */
export function useOtpTimer(
  active:   boolean,
  duration: number = DEFAULT_DURATION
): UseOtpTimerReturn {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (!active || timeLeft <= 0) return;
    const id = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(id);
  }, [active, timeLeft]);

  const reset = useCallback(() => setTimeLeft(duration), [duration]);

  return {
    timeLeft,
    isExpired:     timeLeft === 0,
    formattedTime: formatTime(timeLeft),
    reset,
  };
}
