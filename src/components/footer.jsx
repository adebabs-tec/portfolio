import React from 'react'
import { Logo } from '../assets'
import { Link, NavLink } from 'react-router-dom'

const activeClassName = 'text-amber-500'

function Footer() {
  return (
    <footer className="grid grid-cols-2 md:grid-cols-[180px_1fr_180px] border-black border-2 bg-white">
      <Link
        to="/"
        className="flex justify-center align-middle border-black border-r-2 py-4"
      >
        <img src={Logo} alt="Raddy" width="137" height="15" />
      </Link>
      <Link
        to="/contact"
        className="flex md:col-start-3 border-black border-l-0 
        md:border-l-2 text-lg justify-center items-center bg-yellow-300 
        hover:bg-yellow-500 ease-in-out gap-2 duration-75"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>
        Let's talk
      </Link>
      <div
        className="flex col-span-2 md:col-start-2 md:col-end-3 
      md:row-start-1 border-black border-t-2 md:border-t-0 items-center justify-center p-4 text-center"
      >
        &copy; 2022 Adebabs ・ Built with ReactJS ・ Hosted on GitHub
      </div>
    </footer>
  )
}

export default Footer
