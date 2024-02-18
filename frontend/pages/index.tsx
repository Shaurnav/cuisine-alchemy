import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import ChatBox from "@/components/chatbox";
import { MessageProps } from "@/interfaces/message";
import { useEffect, useState } from "react";
import CountryCards from "@/components/icons/CountryCards";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [messages, setMessages] = useState<MessageProps[]>([]);
  const [numMessagesRendered, setNumMessagesRendered] = useState<number>(0);

  useEffect(() => {
    const fetchNextMessage = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/api/sim-step', { method: 'get', mode: 'cors' });
        const data = await response.json();
        setTimeout(() => {
          setMessages(messages => [...messages, data]);
        }, 5000); // Adjust the timeout as needed for typing effect speed
      } catch (error) {
        console.error('Error fetching next message:', error);
      }
    }

    if (messages.length < 8) {
      fetchNextMessage();
    }

    //maybe a num processed...
  }, [messages]);

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/api/create-sim', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', 
        },
        //@ts-ignore
        body: JSON.stringify({ chefs: selectedCountries.map((item) => item.name) })
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-4 ${inter.className}`}
    >
      <div className="flex flex-col w-full">
        <Navbar />
        <div className="flex flex-col container mx-auto mt-3 pt-4">
          <CountryCards selectedCountries={selectedCountries} setSelectedCountries={setSelectedCountries}/>
          <button 
            className="flex rounded-2xl flex-row text-white justify-center self-center bg-primary w-[100px] h-[25px]" 
            onClick={handleSubmit}
          >
            Submit
          </button>
          <h1 className="text-2xl font-bold mb-1">Chat</h1>
          <ChatBox messages={messages} />
        </div>
      </div>
    </main>
  );
}
