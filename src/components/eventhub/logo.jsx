import React from "react";
import logoImg from "./logo.jpg";

export default function Logo({ className = "w-10 h-10" }) {
  return (
    <img
      src={logoImg}
      alt="EventHub Logo"
      className={`object-cover rounded-2xl shadow-lg shadow-indigo-600/30 transition-transform duration-300 ${className}`}
    />
  );
}
