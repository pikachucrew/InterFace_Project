import React from "react";
import logo from "../assets/noun_Face Recognition.png"

export default function Header() {
  return (
    <div
      className="h-20 font-header text-6xl text-center text-black tracking-widest flex justify-center"
    >
      <h1 className="fixed">InterFace</h1>
      <img src={logo} alt="" id="logo" class="w-40 self-end fixed top-0 right-0"/>
    </div>
  );
}
