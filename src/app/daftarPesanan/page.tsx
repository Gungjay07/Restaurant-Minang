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
    weight: "400"
});

export default function DaftarPesanan() {
    return (
        <div className="min-h-screen bg-gradient-to-t from-orange-400 via-yellow-400 to-yellow-400 text-yellow p-4">
            <Link href={"/"}><IconArrowBack className="text-black"></IconArrowBack></Link>
            <h1 className="text-2xl font-bold text-black text-center pt-10">Daftar Pesanan</h1>
            <div className="flex flex-wrap px-5 py-10">
                <Image
                    src="/LogoNew.png"
                    alt="Rumah Makan Kurnia Jaya"
                    width={150}
                    height={20}
                ></Image>
                <div className="flex flex-col px-5">
                    <h2 className={`${inika.className} text-black px-5 py-2`}>Nasi Rendang</h2>
                    <h3 className={`${crimson.className} text-black px-5`}>Rp 27.000</h3>
                </div>
            </div>
            <hr className="border-black mx-5" />

            <div className="flex flex-wrap px-5 py-10">
                <Image
                    src="/LogoNew.png"
                    alt="Rumah Makan Kurnia Jaya"
                    width={150}
                    height={20}
                ></Image>
                <div className="flex flex-col px-5">
                    <h2 className={`${inika.className} text-black px-5 py-2`}>Nasi Rendang</h2>
                    <h3 className={`${crimson.className} text-black px-5`}>Rp 27.000</h3>
                </div>
            </div>
            <div className="mt-10 flex">
                <h2 className={`${inika.className} text-black px-3`}>Total Pesanan</h2>
                <h2 className={`${inika.className} text-black pl-45`}> Rp.54.000</h2>
            </div>

            <div className="mt-20 items-center justify-center flex">
                <button className="text-black bg-[#FDE059] px-10 py-2 rounded-xl">Lanjut</button>
            </div>
        </div>
    );
}
