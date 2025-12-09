"use client";
import { div } from "motion/react-client";
import Link from "next/link";
import { Poltawski_Nowy, Inika, Crimson_Text } from "next/font/google";
import { IconArrowBack, IconMinus, IconPlus } from "@tabler/icons-react";
import Image from "next/image";

const Poltawski = Poltawski_Nowy({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["400", "700"],
});


const crimson = Crimson_Text({
  subsets: ["latin"],
  weight: ["400"],
});

const inika = Inika({
  subsets: ["latin"],
  weight: ["700"],
});

export default function DetailPesanan() {
  return (
    <div className="min-h-screen bg-gradient-to-t from-orange-400 via-yellow-400 to-yellow-400 text-yellow p-4">
      <Link href={"/"}><IconArrowBack className="text-black"></IconArrowBack></Link>
      <div className="bg-amber-50 rounded-2xl">
         <div className="mt-10 flex justify-center bg-amber-50 rounded-2xl">
        <Image
          src="/LogoNew.png"
          alt="Rumah Makan Kurnia Jaya"
          width={250}
          height={20}
        ></Image>
      </div>
      <div className="bg-amber-50 mt-1 rounded-2xl flex justify-center text-center">
        <h1 className={`${inika.className} text-black text-xl`}>Nasi Ayam Goreng</h1>
      </div>
        <div className="mt-5 w-full px-5 ">
            <textarea name="masukan makanan" id="masukan makanan" placeholder="  Catatan..." className="w-full h-30 border border-none focus:outline-none resize-none rounded-sm shadow-2xl text-l text-black p-2"></textarea>
        </div>
        <div className="mt-5 flex">
          <h2 className={`${crimson.className} text-xl text-black px-5 py-5`}>Rp27.000</h2>
          <div className="flex ml-30 gap-5">
            <button className="">
            <IconMinus className="border border-yellow-400 text-black text-sm"/>
          </button>
          
          <button>
            <IconPlus className="border text-black border-yellow-500 text-sm bg-[#FDD001]"/>
          </button>
          </div>
        </div>
      </div>
         <div className="flex px-10 py-10 items-center justify-center">
            <button className="bg-[#FDE059] text-black px-8 py-3 rounded-xl text-lg font-bold">Simpan</button>
          </div>
    </div>
  );
}
