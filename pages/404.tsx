"use client";

import Link from "next/link";
import Navbar from "../components/navbar/page";
import Footer from "../components/footer/page";

const NotFoundPage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-green-50 min-h-screen flex flex-col items-center justify-center text-center p-6">
        <div className="max-w-md w-full bg-white p-8 shadow-md rounded">
          <h1 className="text-4xl font-bold mb-4 text-red-500">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-6">
            Sorry, the page you are looking for does not exist.
          </p>
          <Link
            href="/"
            className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
          >
            Go to Home
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFoundPage;
