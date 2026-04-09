import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-20 bg-color sticky">
      <div className="h-[90px] flex items-center justify-between max-w-[1300px] mx-auto px-4 relative">
        
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="Uzofin Logo" />
        </div>

        {/* Centered Menu */}
        <ul className="hidden md:flex items-center gap-8 text-white text-sm absolute left-1/2 transform -translate-x-1/2">
          <li className="cursor-pointer hover:text-purple-400">AI Banking</li>
          <li className="cursor-pointer hover:text-purple-400">Payments</li>
          <li className="cursor-pointer hover:text-purple-400">Payouts</li>
          <li className="cursor-pointer hover:text-purple-400">Support</li>
        </ul>

        {/* Start Building Button */}
        <button className="start-button rounded-full uppercase">
          <span>Start Building</span>
        </button>

      </div>
    </nav>
  );
}