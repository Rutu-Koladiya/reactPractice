import Link from "next/link";
import Header from "../component/header";

export default function Home() {
  // it executes in server
  return (
    <main>
      <Header />
      <p>🔥 Let&apos;s get started! 🔥</p>
     <p><Link href="/about">About Us</Link></p>
    </main>
  );
}
