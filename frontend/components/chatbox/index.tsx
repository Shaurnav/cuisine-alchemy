
import Message from "../message";

interface ChatBoxProps {
  messages: { text: string; sender: 'user' | 'bot' }[];
}

export default function ChatBox({ messages }: ChatBoxProps) {
  return (
    <div className="flex flex-col gap-2 p-4 border border-gray-300 rounded-lg">
      {messages.map((message, index) => (
        <Message key={index} text={message.text} sender={message.sender} />
      ))}
    </div>
  );
};

