import React from 'react'
import { HarleyCover, HarleyWebsite } from '../../../../assets'

function Harley() {
  return (
    <section
      className="text-white py-28 bg-center bg-cover"
      style={{ backgroundImage: 'url(' + HarleyCover + ')' }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-lg font-bold uppercase">customer</h2>
        <h1 className="text-4xl lg:text-5xl xl:text-7xl font-bold mb-6">
          Harley Divson
        </h1>
        <div className="text-lg md:flex gap-12">
          <div>
            <span className="font-bold block mb-4">Role</span>
            Website Design
          </div>
          <div>
            <span className="font-bold block mb-4">Visit Website</span>
            <a
              target="_blank"
              href="https://harley-davidson.com"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              www.harley-davidson.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Harley
