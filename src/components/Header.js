import React from 'react'
import { SiSpacex } from "react-icons/si";

export default function Header() {
  return (
    <header className="absolute w-full flex items-center justify-between p-5 bg-black text-white bg-transparent ">
      <div className='text-6xl'><SiSpacex/></div>
      <nav>
        <ul><li className='text-sm lg:text-base'>SpaceX Crew</li></ul>
      </nav>
    </header>
  )
}
