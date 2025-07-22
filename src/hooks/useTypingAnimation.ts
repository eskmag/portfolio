// src/hooks/useTypingAnimation.ts
import { useState, useEffect } from 'react';

interface UseTypingAnimationProps {
  text: string;
  speed?: number;
  delay?: number;
  showCursor?: boolean;
}

export const useTypingAnimation = ({
  text,
  speed = 50,
  delay = 0,
  showCursor = true
}: UseTypingAnimationProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [showCursorState, setShowCursorState] = useState(showCursor);

  useEffect(() => {
    setDisplayedText('');
    setIsComplete(false);
    setShowCursorState(showCursor);

    const timer = setTimeout(() => {
      let currentIndex = 0;
      
      const typeText = () => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1));
          currentIndex++;
          setTimeout(typeText, speed);
        } else {
          setIsComplete(true);
          // Hide cursor after completion if desired
          if (showCursor) {
            setTimeout(() => setShowCursorState(false), 1000);
          }
        }
      };

      typeText();
    }, delay);

    return () => clearTimeout(timer);
  }, [text, speed, delay, showCursor]);

  return {
    displayedText,
    isComplete,
    showCursor: showCursorState
  };
};
