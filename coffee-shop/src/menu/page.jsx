// pages/menu.js or app/menu/page.js (depending on your Next.js setup)

"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CustomCursor from "../components/CustomCursor"; // Adjust path if needed
import ChatboxAgent from "../components/Chatbox"; // Adjust path if needed


export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("featured");
  
  const categories = [
    { id: "featured", name: "Featured Items" },
    { id: "coffee", name: "Coffee" },
    { id: "tea", name: "Tea" },
    { id: "specialty", name: "Specialty Drinks" },
    { id: "food", name: "Light Bites" },
    { id: "seasonal", name: "Seasonal Offers" },
  ];
  
  // Sample menu items (replace with your actual menu data)
  const menuItems = {
    featured: [
      { id: 1, name: "Forest Mist Latte", price: "5.95", image: "/coffee.png", description: "Our signature latte infused with vanilla and a hint of mint", tags: ["Popular", "Signature"] },
      { id: 2, name: "Berry Grove Refresher", price: "6.50", image: "/strawberry.png", description: "Sweet strawberry with a refreshing citrus twist", tags: ["New", "Refreshing"] },
      // Add more items
    ],
    coffee: [
      { id: 3, name: "Classic Espresso", price: "3.95", image: "/coffee-cup.png", description: "Rich, bold espresso with perfect crema", tags: ["Classic"] },
      { id: 4, name: "Woodland Mocha", price: "5.95", image: "/coffee.png", description: "Chocolate and espresso with pine nut undertones", tags: ["Signature"] },
      // Add more items
    ],
    tea: [
      { id: 5, name: "Misty Mountain Tea", price: "4.95", image: "/boba.png", description: "A soothing blend of green tea with jasmine", tags: ["Calming"] },
      // Add more items
    ],
    specialty: [
      { id: 6, name: "Lagoon Blue Matcha", price: "6.95", image: "/lagoon.png", description: "Blue butterfly pea flower matcha with coconut", tags: ["Instagram Favorite"] },
      // Add more items
    ],
    food: [
      { id: 7, name: "Forest Berry Croissant", price: "4.50", image: "/strawberry.png", description: "Buttery croissant with mixed berry compote", tags: ["Breakfast"] },
      // Add more items
    ],
    seasonal: [
      { id: 8, name: "Autumn Maple Latte", price: "6.50", image: "/coffee.png", description: "Seasonal favorite with real maple and warm spices", tags: ["Limited Time"] },
      // Add more items
    ],
  };

  return (
    <div className="bg-[#F5F1DF] text-gray-800 min-h-screen flex flex-col">
      <ChatboxAgent />
      <CustomCursor />

      {/* Header - same as homepage */}
      <header className="bg-[#05533E] font-['Tan Moonlight'] text-white py-3">
        <div className="container mx-auto flex justify-between items-center px-3">
          <Link href="/">
            <Image src="/logo1.png" alt="TAN CAFÉ Logo" width={160} height={170} />
          </Link>

          <nav className="space-x-8 text-lg md:text-xl lg:text-2xl font-semibold">
            <Link href="/menu" className="text-white hover:text-[#77C8C9] transition duration-300">
                Menu
            </Link>
            <Link href="#" className="text-white hover:text-[#77C8C9] transition duration-300">
                Coffees
            </Link>
            <Link href="#" className="text-white hover:text-[#77C8C9] transition duration-300">
                Shops
            </Link>
            <Link href="#" className="text-white hover:text-[#77C8C9] transition duration-300">
                Hotline
            </Link>
            <Link href="#" className="text-white hover:text-[#77C8C9] transition duration-300">
                Packaging
            </Link>
            </nav>

          <div className="flex items-center space-x-6">
            <div className="relative flex items-center bg-[#F5F1DF] rounded-full px-3 py-2 border border-[#B0BFA0]">
              <input
                className="pl-8 pr-4 py-2 rounded-full focus:outline-none bg-transparent text-gray-700 text-lg"
                placeholder="Search"
                type="text"
              />
              <i className="fas fa-search absolute left-3 text-[#B0BFA0] text-xl"></i>
            </div>
            
            <div className="relative cursor-pointer hover:text-[#77C8C9] transition duration-300">
              <ShoppingCartIcon style={{ fontSize: 30 }} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">3</span>
            </div>
          </div>
        </div>
      </header>

      {/* Menu Page Hero */}
      <div className="bg-[#05533E] text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Menu</h1>
          <p className="max-w-2xl mx-auto text-lg">
            Discover the enchanted flavors of TAN Café, where every drink tells a story from the mystical forest
          </p>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="sticky top-0 bg-white shadow-md z-20">
        <div className="container mx-auto px-6 py-4 overflow-x-auto">
          <div className="flex space-x-6 min-w-max">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-4 py-2 text-lg font-medium rounded-full whitespace-nowrap transition-colors duration-300 ${
                  activeCategory === category.id
                    ? "bg-[#77C8C9] text-white"
                    : "text-[#05533E] hover:bg-gray-100"
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
      </div>

      {/* Menu Items */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems[activeCategory].map((item) => (
            <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 relative overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-[#05533E]">{item.name}</h3>
                  <span className="text-lg font-semibold">${item.price}</span>
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-[#F5F1DF] text-[#346E16] text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="w-full py-2 bg-[#77C8C9] text-white rounded-full hover:bg-[#346E16] transition-colors duration-300 flex items-center justify-center gap-2">
                  <ShoppingCartIcon style={{ fontSize: 20 }} />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer - same as homepage */}
      <footer className="bg-[#05533E] text-white w-full mt-auto">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 py-4 text-center md:text-left">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a className="text-white text-xl hover:text-[#77C8C9] transition duration-300" href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a className="text-white text-xl hover:text-[#77C8C9] transition duration-300" href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a className="text-white text-xl hover:text-[#77C8C9] transition duration-300" href="#">
              <i className="fab fa-google"></i>
            </a>
          </div>

          <nav className="flex flex-wrap justify-center md:justify-start space-x-4 md:space-x-8 text-sm md:text-base">
            <a className="hover:text-[#77C8C9] transition duration-300" href="#">About</a>
            <Link href="/menu" className="hover:text-[#77C8C9] transition duration-300">
  Menu
</Link>
<Link href="/contact" className="hover:text-[#77C8C9] transition duration-300">
  Contact
</Link>

            <a className="hover:text-[#77C8C9] transition duration-300" href="#">Careers</a>
          </nav>

          <p className="text-sm mt-4 md:mt-0">
            &copy; {new Date().getFullYear()} TAN Café. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}