import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from "../assets/logo.png";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-color">
  <div className="h-[70px] md:h-[90px] flex items-center justify-between max-w-[1300px] mx-auto px-4 relative">

    {/* Logo */}
    <div className="logo w-28 md:w-auto">
      <img src={logo} alt="Uzofin Logo" />
    </div>

    {/* Desktop Menu */}
    <ul className="hidden md:flex items-center gap-8 text-white text-sm absolute left-1/2 transform -translate-x-1/2">
      <li className="cursor-pointer hover:text-purple-400">AI Banking</li>
      <li className="cursor-pointer hover:text-purple-400">Payments</li>
      <li className="cursor-pointer hover:text-purple-400">Payouts</li>
      <li className="cursor-pointer hover:text-purple-400">Support</li>
    </ul>

    {/* Desktop Button */}
    <button className="hidden md:block start-button rounded-full uppercase mobile-hide">
  <span>Start Building</span>
</button>

    {/* Mobile Menu Button */}
    <button
      className="md:hidden text-white text-2xl"
      onClick={() => setIsOpen(!isOpen)}
    >
      ☰
    </button>

  </div>

  {/* Mobile Menu */}
  {isOpen && (
    <div className="md:hidden bg-black text-white px-6 py-6 space-y-4">
      <div className="cursor-pointer">AI Banking</div>
      <div className="cursor-pointer">Payments</div>
      <div className="cursor-pointer">Payouts</div>
      <div className="cursor-pointer">Support</div>

      <button className="start-button rounded-full uppercase w-full mt-4">
        <span>Start Building</span>
      </button>
    </div>
  )}
</nav>
  );
}