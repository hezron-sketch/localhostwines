import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Localhost Wines & Spirits</h2>
            <p className="mt-2">True Friendship.</p>
          </div>
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold">Quick links</h3>
            <ul className="mt-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/account"
                  className="text-gray-400 hover:text-white"
                >
                  Account
                </Link>
              </li>
              <li>
                <Link href="/cart" className="text-gray-400 hover:text-white">
                  Cart
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul className="mt-2">
              <li>
                Email:{" "}
                <a
                  href="mailto:info@localhostwines.com"
                  className="text-gray-400 hover:text-white"
                >
                  info@localhostwines.com
                </a>
              </li>
              <li>
                Phone: <span className="text-gray-400">+254707069007</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center mt-10">
          <h1 className="text-lg mr-4">Find Us on:</h1>
          <div className="flex space-x-4">
            <Link
              href="https://facebook.com"
              className="text-gray-400 hover:text-white"
              aria-label="Facebook"
            >
              <Facebook className="h-6 w-6" />
            </Link>
            <Link
              href="https://twitter.com"
              className="text-gray-400 hover:text-white"
              aria-label="Twitter"
            >
              <Twitter className="h-6 w-6" />
            </Link>
            <Link
              href="https://instagram.com"
              className="text-gray-400 hover:text-white"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6" />
            </Link>
            <Link
              href="https://linkedin.com"
              className="text-gray-400 hover:text-white"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </Link>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-400 text-sm">
            &copy; 2024 Localhost Wines. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
