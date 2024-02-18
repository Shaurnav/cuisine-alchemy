import { MessageProps } from "@/interfaces/message";
import { useEffect, useState } from "react";
import Typewriter from 'typewriter-effect';

export default function Message({ text, name }: MessageProps) {
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


