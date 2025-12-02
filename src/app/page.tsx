"use client"
import { div } from "motion/react-client";
import Image from "next/image";
import Link from "next/link";
import { Poltawski_Nowy } from "next/font/google";
import SearchBar from "../../components/searchBar";
import MenuBar from "../../components/menuBar";

const Poltawski = Poltawski_Nowy({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["400", "700"],
});

const handleSearch = (text) => {
  console.log("Search:", text);
};
export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-t from-orange-400 via-yellow-400 to-yellow-400 text-yellow p-4">
      <div className="text-black mx-6 mt-5 relative flex items-center gap-2">
        <Image
          src="/LogoNew.png"
          alt="Rumah Makan Kurnia Jaya"
          width={120}
          height={20}
        ></Image>
        <div className="flex flex-col">
          <h1 className={`${Poltawski.className} text-2xl font-semibold`}>
            Selamat Datang
          </h1>
          <p className="text-sm">Silahkan Memesan</p>
        </div>
      </div>
      <div className="mt-10">
        <SearchBar onSearch={handleSearch}></SearchBar>
      </div>
      <div className="mt-10">
        <MenuBar></MenuBar>
      </div>

    </div>
  );
}
