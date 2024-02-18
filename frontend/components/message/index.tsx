import { MessageProps } from "@/interfaces/message";

export default function Message({ text, sender }: MessageProps) {
  const alignmentClass = sender === 'user' ? 'justify-end' : 'justify-start';
  const backgroundColorClass = sender === 'user' ? 'bg-secondary' : 'bg-primary';
  const textColorClass = sender === 'user' ? 'text-gray' : 'text-white';

  return (
    <div className={`flex ${alignmentClass} mb-2`}>
      <div className={`rounded-lg p-2 ${backgroundColorClass} ${textColorClass}`}>
        {text}
      </div>
    </div>
  );
};


