"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setHovered(true);
    const handleMouseLeave = () => setHovered(false);

    // Track mouse movement
    document.addEventListener("mousemove", handleMouseMove);

    // Track hover events on interactive elements
    const hoverElements = document.querySelectorAll("a, button, input");
    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none transition-transform duration-150"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        width: hovered ? "50px" : "30px",
        height: hovered ? "50px" : "30px",
        zIndex: 9999,
      }}
    >
      <Image
        src="/bee.png"
        alt="Bee Cursor"
        width={hovered ? 50 : 30}
        height={hovered ? 50 : 30}
        className="transition-all duration-300"
      />
    </div>
  );
}
