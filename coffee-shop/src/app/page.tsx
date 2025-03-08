"use client";

import Image from "next/image";

/*
Color reference:
#05533E
#77C8C9
#346E16
#F5F1DF
#B0BFA0

*/

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center p-8">
      <h1 className="text-5xl font-bold text-coffee">Welcome to Brew Haven Coffee???</h1>
      <p className="text-lg text-gray-700 mt-4">
        Your daily dose of perfectly brewed coffee ☕
      </p>
      <Image
        src="/coffee-cup.png" // Place an image in the "public/" folder
        alt="Coffee Cup"
        width={250}
        height={250}
        className="mt-6"
      />
      <a
        href="/menu"
        className="mt-8 px-6 py-3 bg-coffee text-white rounded-lg hover:bg-opacity-80 transition"
      >
        View Our Menu
      </a>
    </div>
  );
}
