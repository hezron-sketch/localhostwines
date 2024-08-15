"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "../components/navbar/page";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
    // Example: if (email === '' || password === '' || password !== confirmPassword) setError('Please fill all fields and ensure passwords match.');
  };

  return (
    <>
      <Navbar />
      <div className="bg-green-50 min-h-screen flex items-center justify-center">
        <div className="max-w-md w-full p-6">
          <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>
          {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
          <form onSubmit={handleRegister}>
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
            <div className="mb-4">
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
            <div className="mb-6">
              <label
                htmlFor="confirm-password"
                className="block text-sm font-semibold mb-1"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded"
            >
              Register
            </button>
          </form>
          <p className="mt-4 text-sm text-center">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
