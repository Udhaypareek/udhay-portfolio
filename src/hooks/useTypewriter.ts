import { useState, useEffect, useCallback, useRef } from 'react';

interface UseTypewriterOptions {
  words: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseDuration?: number;
}

export function useTypewriter({
  words,
  typeSpeed = 40,
  deleteSpeed = 30,
  pauseDuration = 1500,
}: UseTypewriterOptions) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const tick = useCallback(() => {
    const currentWord = words[wordIndex];

    if (isDeleting) {
      setText(currentWord.substring(0, text.length - 1));
    } else {
      setText(currentWord.substring(0, text.length + 1));
    }

    let delay = isDeleting ? deleteSpeed : typeSpeed;

    if (!isDeleting && text === currentWord) {
      delay = pauseDuration;
      setIsDeleting(true);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      delay = 200;
    }

    timeoutRef.current = setTimeout(tick, delay);
  }, [text, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, pauseDuration]);

  useEffect(() => {
    timeoutRef.current = setTimeout(tick, typeSpeed);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [tick, typeSpeed]);

  return { text, wordIndex };
}
