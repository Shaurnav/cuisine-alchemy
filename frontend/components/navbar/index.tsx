import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full">
      <nav className="flex flex-row justify-between items-center w-full">
        <Link href="/">
          <h1 className="text-2xl m-2 p-2">ChefChat</h1>
        </Link>
        <div className="flex flex-row">
          <Link href="/">
            <h1 className="text-xl p-2 m-2">Home</h1>
          </Link>
          <Link href="/feed">
            <h1 className="text-xl p-2 m-2">Feed</h1>
          </Link>
          <Link href="/saved">
            <h1 className="text-xl p-2 m-2">Saved</h1>
          </Link>
        </div>
      </nav>
    </header>
  );
}
