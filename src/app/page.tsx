import "./globals.css"; // Import global styles
// import type { AppProps } from "next/app";
import Navbar from "./components/navbar/page";
import Footer from "./components/footer/page";
import ShopPage from "./shop/page";
import HomePage from "../../pages";

function Index() {
  return (
    <>
      <Navbar />
      <HomePage />
      <Footer />
    </>
  );
}

export default Index;
