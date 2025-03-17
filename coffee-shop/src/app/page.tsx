
"use client";

import Image from "next/image";
import * as React from "react";
import CustomCursor from "./CustomCursor"; // Custom Cursor
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"; // MUI Cart Icon
import ChatboxAgent from "./Chatbox"; // Chatbox Agent

import { useState, useEffect } from "react";

// Image Slider Data
const images = [
  { src: "/coffee.png", width: 400, height: 400 },
  { src: "/coffee-cup.png", width: 950, height: 950 },
  { src: "/strawberry.png", width: 250, height: 250 },
  { src: "/lagoon.png", width: 250, height: 250 },
  { src: "/boba.png", width: 250, height: 250 },
];

// Random Background Wrapper
function RandomBackground({ children }) {
  return (
    <div className="relative flex justify-center items-center">
      {/* Drop Background */}
      <Image
        src="/drop.png"
        alt="Drop background"
        width={5000}
        height={5000}
        className="absolute opacity-50"
        style={{
          left: `50%`,
          top: `60%`,
          transform: "translate(-50%, -50%)",
        }}
      />
      {/* Drink Image */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

// Image Slider Component
function ImageSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <RandomBackground>
      <div className="w-[450px] h-[350px] overflow-hidden flex justify-center items-center rounded-lg">
        <Image
          src={images[index].src}
          alt="Coffee Image"
          width={images[index].width}
          height={images[index].height}
          className="object-contain"
        />
      </div>
    </RandomBackground>
  );
}

// Menu Categories Component
function MenuCategories() {
  const categories = [
    { name: "Coffee", image: "/coffee.png", path: "/menu/coffee" },
    { name: "Tea", image: "/boba.png", path: "/menu/tea" },
    { name: "Specialty Drinks", image: "/strawberry.png", path: "/menu/specialty" },
    { name: "Light Bites", image: "/lagoon.png", path: "/menu/food" },
  ];

  return (
    <section className="bg-[#F5F1DF] py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#05533E] mb-3">Explore Our Menu</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Discover our forest-inspired beverages and treats, each with its own unique story and flavor profile.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <a 
              key={index} 
              href={category.path}
              className="group bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-0 transition-opacity duration-300"></div>
                <Image
                  src={category.image}
                  alt={category.name}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-[#05533E] mb-2">{category.name}</h3>
                <span className="inline-block text-[#77C8C9] font-medium group-hover:text-[#346E16] transition-colors duration-300">
                  View Selection →
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/menu"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#05533E] text-white rounded-full hover:bg-[#346E16] transition-colors duration-300 text-lg font-medium"
          >
            View Full Menu
          </a>
        </div>
      </div>
    </section>
  );
}

// Home Page Component
export default function Home() {
  return (
    <div className="bg-[#F5F1DF] text-gray-800 min-h-screen flex flex-col">
      <ChatboxAgent /> {/* Chatbot */}
      <CustomCursor /> {/* Custom Cursor */}

      {/* Header */}
      <header className="bg-[#05533E] text-white py-3">
        <div className="container mx-auto flex justify-between items-center px-3">
          <Image src="/logo1.png" alt="TAN CAFÉ Logo" width={160} height={170} />
          <nav className="space-x-8 text-lg md:text-xl lg:text-2xl font-semibold">
            <a className="text-white hover:text-[#77C8C9]" href="#">Coffees</a>
            <a className="text-white hover:text-[#77C8C9]" href="#">Shops</a>
            <a className="text-white hover:text-[#77C8C9]" href="#">Hotline</a>
            <a className="text-white hover:text-[#77C8C9]" href="#">Packaging</a>
          </nav>
          <div className="flex items-center space-x-6">
            <div className="relative flex items-center bg-[#F5F1DF] rounded-full px-3 py-2 border border-[#B0BFA0]">
              <input className="pl-8 pr-4 py-2 rounded-full focus:outline-none bg-transparent text-gray-700 text-lg" placeholder="Search" type="text"/>
            </div>
            <div className="relative cursor-pointer hover:text-[#77C8C9]">
              <ShoppingCartIcon style={{ fontSize: 30 }} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">3</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
<main className="container mx-auto py-12 flex flex-col items-center text-center px-6">
  <div className="w-full max-w-3xl space-y-6">
    <h1 className="header-title text-6xl font-bold text-[#05533E]">
      A Forest of Flavors 🌿 <span className="text-8xl text-[#77C8C9]">9</span>
    </h1>
    <p style={{ fontFamily: "Playfair Display, serif", fontSize: "1.2rem" }}>
      Welcome to TAN Café, a mystical green oasis where every sip is a
      story, and every drink is a guardian of the forest. Here, nature
      breathes through the aroma of coffee, the sweetness of fruit blends,
      and the warmth of every crafted cup. Each drink is more than just a
      refreshment—it’s a character in the enchanted forest of TAN, working
      together to keep the magic alive.
    </p>
  </div>

  {/* Centered Image Slider */}
  <div className="flex justify-center mt-8">
    <ImageSlider />
  </div>
</main>

      {/* Menu Section */}
      <MenuCategories />

      {/* Footer */}
      <footer className="bg-[#05533E] text-white w-full mt-auto text-center py-4">
        <p>© {new Date().getFullYear()} TAN Café. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
