import { div } from "motion/react-client";
import Image from "next/image";
import Link from "next/link";
import { Poltawski_Nowy } from "next/font/google";

const Poltawski = Poltawski_Nowy({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["400", "700"],
});

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-t from-white-800 via-white-300 to-yellow-400 text-yellow p-6">
      <div className="text-black mx-6 mt-5 relative flex items-center gap-8">
        <Image
          src="/LogoKJ.jpeg"
          alt="Rumah Makan Kurnia Jaya"
          width={100}
          height={20}
        ></Image>
        <div className="flex flex-col">
          <h1 className={`${Poltawski.className} text-lg font-semibold `}>
            Selamat Datang
          </h1>
          <p className="text-sm">Silahkan Memesan</p>
        </div>
      </div>
    </div>
  );
}
