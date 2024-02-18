
import { MessageProps } from "@/interfaces/message";
import Message from "../message";

interface ChatBoxProps {
  messages: MessageProps[];
}

export default function ChatBox({ messages }: ChatBoxProps) {
  return (
    <div className="flex flex-col gap-2 p-4 border border-gray-300 rounded-lg">
      {messages.map((message, index) => (
        <Message key={index} text={message.text} name={message.name} />
      ))}
    </div>
  );
};

