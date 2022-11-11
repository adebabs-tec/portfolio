import React from 'react'
import Marquee from 'react-fast-marquee'
import { Link } from 'react-router-dom'

function Scroller({ text, link }) {
  return (
    <section>
      <Link to={link}>
        <Marquee
          pauseOnHover
          gradient={false}
          className="text-bold text-2xl border-black border-t-2 bg-yellow-300"
        >
          {text}
        </Marquee>
      </Link>
    </section>
  )
}

export default Scroller
