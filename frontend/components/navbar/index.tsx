import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full">
      <nav
        className="flex flex-row justify-between items-center w-full"
        style={{ backgroundColor: "#FF8C00", borderRadius: "8px" }}
      >
        <Link href="/">
          <h1 className="text-4xl m-2 p-2">ByteBite Fusion</h1>
        </Link>
        <div className="flex flex-row">
          <Link href="/">
            <h1 className="text-2xl p-2 m-2">Home</h1>
          </Link>
          <Link href="/feed">
            <h1 className="text-2xl p-2 m-2">Feed</h1>
          </Link>
        </div>
      </nav>
    </header>
  );
}
