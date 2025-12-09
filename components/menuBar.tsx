"use client";

import { div } from "motion/react-client";
import { Inter, Crimson_Text, Inika } from "next/font/google";
import { useState } from "react";
import Image from "next/image";
import { IconPlus } from "@tabler/icons-react";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  weight: ["500"],
});

const crimson = Crimson_Text({
  subsets: ["latin"],
  weight: ["400"],
});
const inika = Inika({
  subsets: ["latin"],
  weight: ["700"],
});

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
      <div
        className={`${inter.className} grid grid-cols-3 gap-4 text-black text-center`}
      >
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={` rounded-sm  bg-[#FEFAE7] p-2
         ${
           activeCategory === category.id
             ? "bg-[#FEFAE7] text-black font-bold shadow-2xl shadow-gray-500"
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
              className="mx-8 my-8"
              src="/LogoNew.png"
              alt="Rumah Makan Kurnia Jaya"
              width={120}
              height={20}
            ></Image>
            <h1 className={` ${inika.className} text-black text-xl font-bold`}>
              {menu.nama}
            </h1>
            <h2 className={`${crimson.className} text-black font-bold`}>
              {menu.harga}
            </h2>

            <Link href={"/detailPesanan"}>
              <button className="text-black text-sm bg-[#FDD001] ml-30 mb-4 mt-4 rounded-sm">
                <IconPlus />
              </button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
