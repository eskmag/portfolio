// src/components/TypingText.tsx
import React from 'react';
import { useTypingAnimation } from '@/hooks/useTypingAnimation';

interface TypingTextProps {
  text: string;
  speed?: number;
  delay?: number;
  showCursor?: boolean;
  className?: string;
  cursorClassName?: string;
}

export const TypingText: React.FC<TypingTextProps> = ({
  text,
  speed = 50,
  delay = 0,
  showCursor = true,
  className = '',
  cursorClassName = 'animate-pulse'
}) => {
  const { displayedText, showCursor: showCursorState } = useTypingAnimation({
    text,
    speed,
    delay,
    showCursor
  });

  return (
    <span className={className}>
      {displayedText}
      {showCursorState && (
        <span className={`inline-block ml-1 ${cursorClassName}`}>|</span>
      )}
    </span>
  );
};
