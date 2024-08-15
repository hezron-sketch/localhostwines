import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "./components/navbar/page";
import Footer from "./components/footer/page";
import HomePage from "./pages";

const inter = Inter({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Navbar />
      <HomePage />
      <Footer />
    </>
  );
}
