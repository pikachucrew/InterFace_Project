import React from 'react'
import logo from "../assets/transparent_Interface_logo.png"

export default function Header() {
  return (
    <div className="Header" class="bg-blue-700">
      <h1>Interface</h1>
      <img src={logo} alt="" id="logo"/>
    </div>
  )
}
