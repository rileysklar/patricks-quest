import { FaArrowUp } from "react-icons/fa";

export default function Layout({ children }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col items-center justify-between gap-riley min-h-screen">
      <header className="h-[6em] w-full "></header>
      <main className="max-w-5xl mx-auto ">{children}</main>
      <footer className="p-[2em] w-full flex justify-center text-white">
        Copyright 2023
      </footer>
    </div>
  );
}
