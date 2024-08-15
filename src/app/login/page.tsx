"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "../components/navbar/page";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    // Example: if (email === '' || password === '') setError('Please fill all fields.');
  };

  return (
    <>
      <Navbar />
      <div className="bg-green-50 min-h-screen flex items-center justify-center">
        <div className="max-w-md w-full p-6">
          <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
          {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-semibold mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-semibold mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded"
            >
              Login
            </button>
          </form>
          <p className="mt-4 text-sm text-center">
            Don't have an account?{" "}
            <Link href="/register" className="text-blue-500 hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
