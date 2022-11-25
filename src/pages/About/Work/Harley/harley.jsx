import React from 'react'
import { HarleyCover, HarleyWebsite } from '../../../../assets'

function Harley() {
  return (
    <>
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
            <div className="mb-4">
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
      <section className="border-black border-t-2 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">Involvement</h1>
          <p className="text-lg max-w-xl mb-16">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
            excepturi laboriosam veritatis fugiat quidem at ex doloribus labore
            voluptas unde perspiciatis, officia recusandae eos ullam repellendus
            ab. Accusantium, ullam consequuntur.
          </p>
          <img
            src={HarleyWebsite}
            alt="Harley Davidson Website"
            width="756"
            height="539"
            loading="lazy"
            className="mx-auto mb-16"
          />
          <h1 className="text-3xl font-bold mb-4">Result</h1>
          <p className="text-lg max-w-xl mb-16">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
            excepturi laboriosam veritatis fugiat quidem at ex doloribus labore
            voluptas unde perspiciatis, officia recusandae eos ullam repellendus
            ab. Accusantium, ullam consequuntur.
          </p>
          <ul
            className="flex
          gap-8 text-lg"
          >
            <li className="flex flex-col text-center bg-white border-black border-2 rounded-lg p-4">
              <span className="font-bold text-2xl">10%</span>
              <span>Increase in Sales</span>
            </li>
            <li className="flex flex-col text-center bg-white border-black border-2 rounded-lg p-4">
              <span className="font-bold text-2xl">20%</span>
              <span>Increase in Website engagement</span>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default Harley
