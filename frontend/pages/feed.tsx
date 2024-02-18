import AllFeed from "@/components/feedIcons/AllFeed";
import FeedIcon from "@/components/feedIcons/feedicon";
import Navbar from "@/components/navbar";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Feed() {
  return (
    <div>
      <Navbar />
      <AllFeed />
    </div>
  );
}
