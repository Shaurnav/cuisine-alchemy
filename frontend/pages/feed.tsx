import AllFeed from "@/components/feedIcons/AllFeed";
import FeedIcon from "@/components/feedIcons/feedicon";
import Navbar from "@/components/navbar";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Feed() {
  return <AllFeed />;
}
//   return (
//     <main
//       className={`flex min-h-screen flex-col items-center justify-between p-4 ${inter.className}`}
//     >
//       <div className="flex flex-col w-full">
//         <Navbar />
//         <div className="flex flex-col container mx-auto mt-3 pt-4">
//           <FeedIcon />
//         </div>
//       </div>
//     </main>
//   );
// }
