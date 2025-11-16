"use client";
import React from "react";

export default function Footer() {
  return (
    <footer className="footer bg-gray-100 dark:bg-[#16162d] text-gray-700 dark:text-gray-300 py-6 mt-8">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-lg font-semibold">Phạm Bùi Quốc Thắng</p>
        <p className="text-sm mt-1">
          {new Date().getFullYear()} — CV cá nhân.
        </p>
        <p className="text-sm mt-2">
          Liên hệ: <a href="mailto:youremail@gmail.com" className="text-primary underline">
            mrwilliam2501@gmail.com

          </a>
        </p>
      </div>
    </footer>
  );
}
