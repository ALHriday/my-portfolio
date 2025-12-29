/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

export default function TypingEffect({
  words = [],
  typingSpeed = 120,
  deleteSpeed = 80,
  delay = 1200,
}) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timer;

    if (!isDeleting && text.length < current.length) {
      timer = setTimeout(() => {
        setText(current.substring(0, text.length + 1));
      }, typingSpeed);
    } else if (isDeleting && text.length > 0) {
      timer = setTimeout(() => {
        setText(current.substring(0, text.length - 1));
      }, deleteSpeed);
    } else if (!isDeleting && text.length === current.length) {
      timer = setTimeout(() => setIsDeleting(true), delay);
    } else if (isDeleting && text.length === 0) {
      setIsDeleting(false);
      setWordIndex((prev) => prev + 1);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deleteSpeed, delay]);

  return (
    <span className="text-teal-500 font-semibold">
      {text}
      <span className="ml-1 animate-pulse">|</span>
    </span>
  );
}

