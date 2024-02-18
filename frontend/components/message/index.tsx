import { MessageProps } from "@/interfaces/message";
import { useEffect, useState } from "react";
import Typewriter from 'typewriter-effect';

export default function Message({ text, name, chefMapping }: MessageProps) {
  console.log(name);
  console.log(chefMapping);

  if (name === chefMapping?.countryOne) {
    name = 'chefone';
  } else {
    name = 'cheftwo';
  }

  const alignmentClass = name === 'chefone' ? 'justify-end' : 'justify-start';
  const backgroundColorClass = name === 'chefone' ? 'bg-secondary' : 'bg-primary';
  const textColorClass = name === 'chefone' ? 'text-gray' : 'text-white';

  return (
    <div className={`flex ${alignmentClass} mb-2`}>
      <div className={`rounded-lg p-2 ${backgroundColorClass} ${textColorClass} max-w-[36rem]`}>
        {text}
      </div>
    </div>
  );
};


