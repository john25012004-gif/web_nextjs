"use client";
import React, { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav className="navbar bg-white shadow-md px-6 py-4 flex items-center justify-between relative z-50">
      {/* Logo bên trái */}
      <a
        href="#"
        className="text-xl font-bold text-gray-800"
        onClick={() => scrollToSection("gioithieu")}
      >
        Phạm Bùi Quốc Thắng
      </a>

      {/* Menu chính căn giữa */}
      <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-6 text-gray-700">
        <button onClick={() => scrollToSection("gioithieu")} className="hover:text-yellow-500">Giới thiệu</button>
        <button onClick={() => scrollToSection("hocvan")} className="hover:text-yellow-500">Học vấn</button>
        <button onClick={() => scrollToSection("kynang")} className="hover:text-yellow-500">Kỹ năng</button>
        <button onClick={() => scrollToSection("duan")} className="hover:text-yellow-500">Dự án</button>
        <button onClick={() => scrollToSection("lienhe")} className="hover:text-yellow-500">Liên hệ</button>
      </div>

      {/* Mobile menu button */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="md:hidden ml-4 text-2xl"
      >
        ☰
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden flex flex-col p-4 space-y-4">
          <button onClick={() => scrollToSection("gioithieu")} className="hover:text-yellow-500">Giới thiệu</button>
          <button onClick={() => scrollToSection("hocvan")} className="hover:text-yellow-500">Học vấn</button>
          <button onClick={() => scrollToSection("kynang")} className="hover:text-yellow-500">Kỹ năng</button>
          <button onClick={() => scrollToSection("duan")} className="hover:text-yellow-500">Dự án</button>
          <button onClick={() => scrollToSection("lienhe")} className="hover:text-yellow-500">Liên hệ</button>
        </div>
      )}
    </nav>
  );
}
