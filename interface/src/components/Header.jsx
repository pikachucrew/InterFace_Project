import React from "react";
import logo from "../assets/noun_Face Recognition.png"

export default function Header() {
  return (
    <div
      className="Header"
      className="h-20 font-sans text-6xl text-center text-black tracking-widest flex justify-between"
    >
      <h1 className="self-center">Interface</h1>
      <img src={logo} alt="" id="logo" class="w-40 self-end absolute top-0 right-0"/>
    </div>
  );
}
