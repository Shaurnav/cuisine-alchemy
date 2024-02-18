import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import ChatBox from "@/components/chatbox";
import { MessageProps } from "@/interfaces/message";
import { useEffect, useState } from "react";
import CountryCards from "@/components/icons/CountryCards";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [selectedCountries, setSelectedCountries] = useState<any[]>([]);
  // const [hasCountry, setHasCountry] = useState<boolean>(false);
  const [messages, setMessages] = useState<MessageProps[]>([]);
  const [submitted, setSubmitted] = useState<boolean>();
  const [chefMapping, setChefMapping] = useState<{
    countryOne: string;
    countryTwo: string;
  }>();
  const [numMessagesRendered, setNumMessagesRendered] = useState<number>(0);

  const handleSubmit = async () => {
    if (selectedCountries.length < 2) {
      window.alert("Please select at least two chefs!");
      return;
    }

    try {
      const countryOne: string = selectedCountries[0].name;
      const countryTwo: string = selectedCountries[1].name;

      const CHEF_MAPPING = {
        countryOne: countryOne,
        countryTwo: countryTwo,
      };

      setChefMapping(CHEF_MAPPING);

      const response = await fetch("http://127.0.0.1:5000/api/create-sim", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers":
            "Origin, X-Requested-With, Content-Type, Accept, Authorization",
          "Access-Control-Request-Method": "GET, POST, DELETE, PUT, OPTIONS",
        },
        //@ts-ignore
        body: JSON.stringify({
          chefs: selectedCountries.map((item) => item.name),
        }),
      });
      setSubmitted(true);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  useEffect(() => {
    const fetchNextMessage = async () => {
      if (!submitted && messages.length == 0) {
        return;
      }

      try {
        const response = await fetch("http://127.0.0.1:5000/api/sim-step", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers":
              "Origin, X-Requested-With, Content-Type, Accept, Authorization",
            "Access-Control-Request-Method": "GET, POST, DELETE, PUT, OPTIONS",
          },
        });
        const data = await response.json();
        setTimeout(() => {
          setMessages((messages) => [...messages, data]);
        }, 1000); // Adjust the timeout as needed for typing effect speed
      } catch (error) {
        console.error("Error fetching next message:", error);
      }
    };

    if (messages.length < 8) {
      fetchNextMessage();
    }

    //maybe a num processed...
  }, [messages, submitted]);

  const hasCountry = selectedCountries.some((item) => item.name === "ADD NEW");
  // const temp = selectedCountries.some((item) => item.name === "ADD NEW");
  // setHasCountry(temp);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-4 ${inter.className}`}
    >
      <div className="flex flex-col w-full">
        <Navbar />
        <div className="flex flex-col container mx-auto mt-3 pt-4">
          <CountryCards
            selectedCountries={selectedCountries}
            setSelectedCountries={setSelectedCountries}
          />
          <input
            placeholder={
              hasCountry
                ? "Please describe your custom chef"
                : "Please enter your dietary preferences"
            }
          />
          <button
            className="flex rounded-2xl flex-row text-white justify-center self-center bg-primary w-[100px] h-[25px]"
            onClick={handleSubmit}
          >
            Submit
          </button>
          {submitted && (
            <div>
              <h1 className="text-2xl font-bold mb-1">Chat</h1>
              <ChatBox chefMapping={chefMapping} messages={messages} />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
