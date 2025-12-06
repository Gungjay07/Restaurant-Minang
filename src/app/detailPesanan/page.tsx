"use client";
import { div } from "motion/react-client";
import Link from "next/link";
import { Poltawski_Nowy, Inika } from "next/font/google";
import { IconArrowBack } from "@tabler/icons-react";
import Image from "next/image";

const Poltawski = Poltawski_Nowy({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["400", "700"],
});

const inika = Inika({
  subsets: ["latin"],
  weight: ["700"],
});

export default function DetailPesanan() {
  return (
    <div className="min-h-screen bg-gradient-to-t from-orange-400 via-yellow-400 to-yellow-400 text-yellow p-4">
      <IconArrowBack className="text-black"></IconArrowBack>
      <div className="mt-10 flex justify-center bg-amber-50 rounded-2xl">
        <Image
          src="/LogoNew.png"
          alt="Rumah Makan Kurnia Jaya"
          width={250}
          height={20}
        ></Image>
      </div>
      <div className="bg-amber-50 mt-1 rounded-2xl flex justify-center text-center">
        <h1 className={`${inika.className} text-black`}>Nasi Ayam Goreng</h1>
        <div>
            
        </div>
      </div>
    </div>
  );
}
