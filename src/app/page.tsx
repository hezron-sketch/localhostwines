import "../styles/globals.css";
import Navbar from "../components/navbar/page";
import Footer from "../components/footer/page";
import HomePage from ".";

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
