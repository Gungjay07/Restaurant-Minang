"use client";

import { div } from "motion/react-client";
import { Inter } from "next/font/google";
import { useState } from "react";
import Image from "next/image";
import { IconPlus } from "@tabler/icons-react";

export default function MenuBar() {
  const [activeCategory, setActiveCategory] = useState("paket");
  const categories = [
    { id: "paket", label: "Menu Paket" },
    { id: "lauk", label: "Lauk" },
    { id: "minuman", label: "Minuman" },
  ];
  const [activeMenum, setActiveMenu] = useState("paket");
  const menu = [
    { id: "Paket", nama: "Nasi Rendang", harga: "27.000" },
    { id: "Paket", nama: "Nasi Ayam", harga: "27.000" },
    { id: "Paket", nama: "Nasi Usus Sapi", harga: "27.000" },
    { id: "Paket", nama: "Nasi Usus Sapi", harga: "27.000" },
    { id: "Paket", nama: "Nasi Usus Sapi", harga: "27.000" },
    { id: "Paket", nama: "Nasi Usus Sapi", harga: "27.000" },
  ];

  return (
    <>
      <div className={`grid grid-cols-3 gap-5 text-black text-center`}>
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`rounded-sm  bg-[#FEFAE7] p-2
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

      {/* Tampilan Menu */}
      <div className="mt-10 grid grid-cols-2 gap-5 text-center">
        {menu.map((menu) => (
          <div className="bg-amber-50 rounded-xl">
            <Image
              className="m-5"
              src="/LogoNew.png"
              alt="Rumah Makan Kurnia Jaya"
              width={120}
              height={20}
            ></Image>
            <h1 className="text-black text-xl font-bold">{menu.nama}</h1>
            <h2 className="text-black font-bold">{menu.harga}</h2>
            <button className="text-black text-sm bg-[#FDD001] ml-30 mb-4 mt-4 rounded-sm">
              <IconPlus className="" />
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
