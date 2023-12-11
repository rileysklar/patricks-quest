import { FaArrowUp } from "react-icons/fa";
import patrickImage from "../assets/patrick.png";
import Image from "next/image";
export default function Layout({ children }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="main-layout flex flex-col items-center justify-between gap-riley min-h-screen">
      <header className="h-[6em] w-full flex ">
        <Image
          className="p-4"
          width={100}
          height={300}
          src={patrickImage.src}
        />
      </header>
      <main className="max-w-5xl mx-auto p-4">{children}</main>
      <footer className="p-[2em] w-full flex justify-center text-white">
        Built with 🤍 by Riley & Andrew
      </footer>
    </div>
  );
}
