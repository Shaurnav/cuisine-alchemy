import { MessageProps } from "@/interfaces/message";
import { useEffect, useState } from "react";

export default function Message({ text, name }: MessageProps) {
  const [displayedText, setDisplayedText] = useState('');
  const typingSpeed = 1; // Adjust typing speed as needed

  useEffect(() => {
    let timer: NodeJS.Timeout;
    let currentIndex = 0;

    const typeNextCharacter = () => {
      setDisplayedText(prevText => prevText + text[currentIndex]);
      currentIndex++;

      if (currentIndex < text.length) {
        timer = setTimeout(typeNextCharacter, typingSpeed);
      }
    };

    timer = setTimeout(typeNextCharacter, typingSpeed);

    return () => clearTimeout(timer);
  }, [text]);

  const alignmentClass = name === 'user' ? 'justify-end' : 'justify-start';
  const backgroundColorClass = name === 'user' ? 'bg-secondary' : 'bg-primary';
  const textColorClass = name === 'user' ? 'text-gray' : 'text-white';

  return (
    <div className={`flex ${alignmentClass} mb-2`}>
      <div className={`rounded-lg p-2 ${backgroundColorClass} ${textColorClass}`}>
        {text}
      </div>
    </div>
  );
};


