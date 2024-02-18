import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import ChatBox from "@/components/chatbox";
import { MessageProps } from "@/interfaces/message";

const inter = Inter({ subsets: ["latin"] });

const messages: MessageProps[] = [
  { text: "Hi, how can I help you?", sender: "bot" },
  { text: "I'm looking for some information.", sender: "user" },
  { text: "Sure, what do you need to know?", sender: "bot" },
  // Add more messages as needed
];

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-4 ${inter.className}`}
    >
      <div className="flex flex-col w-full">
        <Navbar/> 
        <div className="flex flex-col container mx-auto mt-3 pt-4">
          <h1 className="text-2xl font-bold mb-1">Chat</h1>
          <ChatBox messages={messages} />
        </div>
      </div>
    </main>
  );
}
