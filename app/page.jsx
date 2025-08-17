"use client";

import "./globals.css";
import React, { useState } from "react";

export default function XJDFinanceLanding() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      {/* Header */}
      <header className="w-full bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">XJD Finance</h1>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          {menuOpen ? "Close Menu" : "Open Menu"}
        </button>
      </header>

      {/* Menu */}
      {menuOpen && (
        <nav className="w-full bg-blue-100 p-4 text-center">
          <ul className="space-y-2">
            <li><a href="#" className="text-blue-700">Home</a></li>
            <li><a href="#" className="text-blue-700">About</a></li>
            <li><a href="#" className="text-blue-700">Contact</a></li>
          </ul>
        </nav>
      )}

      {/* Main Content */}
      <section className="flex-grow flex flex-col items-center justify-center text-center p-8">
        <h2 className="text-3xl font-semibold mb-4">Welcome to XJD Finance</h2>
        <p className="text-gray-700 max-w-xl">
          Empowering your future through strategy, discipline, and financial clarity.
        </p>
      </section>

      {/* Footer */}
      <footer className="w-full bg-white shadow p-4 text-center text-gray-500">
        © {new Date().getFullYear()} XJD Financial. All rights reserved.
      </footer>
    </main>
  );
}
