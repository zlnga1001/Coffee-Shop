/*
Color reference:
#05533E - Dark Green
#77C8C9 - Teal
#346E16 - Forest Green
#F5F1DF - Light Cream
#B0BFA0 - Soft Olive
*/

"use client";

import Image from "next/image";
import Head from "next/head";
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import { useState, useEffect } from 'react';

const images = [
  { src: "/coffee.png", width: 400, height: 400 },
  { src: "/coffee-cup.png", width: 950, height: 950 },
  { src: "/strawberry.png", width: 250, height: 250 },
  { src: "/lagoon.png", width: 250, height: 250 },
  { src: "/boba.png", width: 250, height: 250 }
];

function ImageSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-[450px] h-[350px] overflow-hidden flex justify-center items-center rounded-lg">
    <Image 
      src={images[index].src} 
      alt="Coffee Image" 
      width={images[index].width} 
      height={images[index].height} 
      className="object-contain"
    />
</div>

  );
}

export default function Home() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    
    
    <div className="bg-[#F5F1DF] text-gray-800">
      <Head>
        <title>Cuisine Café</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Roboto:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      
      {/* Header */}
      <header className="bg-[#05533E] text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-6">
        <Image src="/logo1.png" alt="TAN CAFÉ Logo" width={140} height={150} />
          <nav className="space-x-8">
            <a className="text-white hover:text-[#77C8C9]" href="#">Coffees</a>
            <a className="text-white hover:text-[#77C8C9]" href="#">Shops</a>
            <a className="text-white hover:text-[#77C8C9]" href="#">Hotline</a>
            <a className="text-white hover:text-[#77C8C9]" href="#">Packaging</a>
          </nav>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                className="pl-8 pr-4 py-2 rounded-full border border-[#B0BFA0] focus:outline-none bg-[#F5F1DF] text-gray-700"
                placeholder="Search"
                type="text"
              />
              <i className="fas fa-search absolute left-2 top-2 text-[#B0BFA0]"></i>
            </div>
            <i className="fas fa-shopping-cart text-white"></i>
          </div>
        </div>
      </header>
      
      {/* Main Section */}
      <main className="container mx-auto py-12 flex flex-col lg:flex-row items-center px-6">
        <div className="lg:w-1/2 space-y-6">
        <h2 className="text-[#346E16] text-1xl font-['Burgues'] tracking-wider italic animate-pulse center">WHERE EVERY SIP IS A VIBE TO REMEMBER</h2>
          <h1 className="header-title text-6xl font-bold text-[#05533E]">
            A Forest of Flavors 🌿 <span className="text-8xl text-[#77C8C9] ">9</span>
          </h1>
          <p className="text-[#05533E] font-['Burgues']">
          Welcome to TAN Café, a mystical green oasis where every sip is a story, and every drink is a guardian of the forest. Here, nature breathes through the aroma of coffee, the sweetness of fruit blends, and the warmth of every crafted cup. Each drink is more than just a refreshment—it’s a character in the enchanted forest of TAN, working together to keep the magic alive.
          </p>
          <button className="bg-[#77C8C9] text-white py-2 px-6 rounded-full hover:bg-[#346E16]">
            Order Now
          </button>
        </div>
        <div className="lg:w-1/2 flex justify-center mt-12 lg:mt-0">
  <ImageSlider />
</div>
      </main>
      
      {/* Menu Section */}
      <section className="container mx-auto py-12 text-center">
                {/* Tabs Section */}
                <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: '#F5F1DF' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            aria-label="scrollable force tabs example"
          >
            <Tab label="Item One" sx={{ color: '#05533E' }} />
            <Tab label="Item Two" sx={{ color: '#77C8C9' }} />
            <Tab label="Item Three" sx={{ color: '#346E16' }} />
            <Tab label="Item Four" sx={{ color: '#B0BFA0' }} />
            <Tab label="Item Five" sx={{ color: '#F5F1DF' }} />
            <Tab label="Item Six" sx={{ color: '#05533E' }} />
            <Tab label="Item Seven" sx={{ color: '#77C8C9' }} />
          </Tabs>
        </Box>
        
        {/* <h1 className="text-5xl font-bold text-[#05533E]">Welcome to Brew Haven Coffee</h1> */}
        <Image src="/logo2.png" alt="TAN CAFÉ Logo" width={140} height={150} />
        <p className="text-lg text-[#B0BFA0] mt-4">Your daily dose of perfectly brewed coffee ☕</p>
        <a
          href="/menu"
          className="mt-8 inline-block px-6 py-3 bg-[#346E16] text-white rounded-lg hover:bg-opacity-80 transition"
        >
          View Our Menu
        </a>
        

      </section>
      
      {/* Footer */}
      <footer className="bg-[#05533E] text-white py-4 text-center">
        <div className="flex justify-center space-x-6">
          <a className="text-white" href="#"><i className="fab fa-facebook-f"></i></a>
          <a className="text-white" href="#"><i className="fab fa-instagram"></i></a>
          <a className="text-white" href="#"><i className="fab fa-google"></i></a>
        </div>
      </footer>
    </div>
  );
}
