"use client";

import { div } from "motion/react-client";
import { Inter } from "next/font/google";
import { useState } from "react";

export default function MenuBar() {
  const [activeCategory, setActiveCategory] = useState("paket");
  const categories = [
    { id: "paket", label: "Menu Paket" },
    { id: "lauk", label: "Lauk" },
    { id: "minuman", label: "Minuman" },
  ];

  return (
    <div className={`grid grid-cols-3 gap-5 text-black text-center`}>
      {categories.map((category) => (
        <button
        key={category.id}
        onClick={() => setActiveCategory(category.id)}
          className={`border-none  rounded-sm border-black bg-[#FEFAE7] p-2
         ${
           activeCategory === category.id
             ? "bg-[#FEFAE7] text-black font-bold text-l shadow-2xl shadow-gray-500"
             : "bg-[#FEFAE7] text-gray-500"
         }`}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}
