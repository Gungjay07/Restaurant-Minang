"use client"

import { div } from "motion/react-client"
import { Inter } from "next/font/google";

export default function MenuBar(){
    return (
      <div className={`grid grid-cols-3 gap-5 text-black text-center`}>
        <div className="border-none  rounded-sm border-black bg-[#FEFAE7] p-2">
          Menu Paket
        </div>
        <div className=" border-2 border-none rounded-sm border-black bg-[#FEFAE7] p-2">
          Lauk
        </div>
        <div className=" border-2 border-none rounded-sm border-black  bg-[#FEFAE7] p-2">
          Minuman
        </div>
      </div>
    );
}