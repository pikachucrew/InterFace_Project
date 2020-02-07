import React from "react";
import logo from "../assets/noun_Face Recognition.png"

export default function Header() {
  return (
    <div
      className="headerStyle w-full font-header text-6xl text-center text-black tracking-widest flex justify-center gains"
    >
      <h1 class="pr-10">InterFace</h1>
      <img src={logo} alt="" id="logo" class=" imgStyle self-end top-0 right-0"/>
    </div>
  );
}
