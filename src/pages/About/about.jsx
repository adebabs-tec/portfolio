import React from 'react'
import { socials } from '../../data'
import { YouTube, Twitter, Github, Discourd } from '../../assets'

function About() {
  return (
    <section>
      <div className="border-x-2 border-black py-12">
        <div className="container mx-auto px-4 grid gap-8 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl lg:text-5xl xl:text-7xl mb-4 font-bold">
              My Story
            </h1>
            <p className="text-lg mb-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
              deserunt tempore officia harum sequi molestiae ratione odio quasi
              repellendus recusandae.
            </p>
            <p className="text-lg mb-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
              deseruntur adipisicing elit. Suscipit deserunt tempore officia
              harum sequi molestiae ratione odio quasi repellendus recusandae.
            </p>
            <div className="text-lg font-bold">Find me on:</div>
            <div className="mb-8">
              <ul className="flex gap-6">
                {socials.map((item, index) => (
                  <li key={index}>
                    <a
                      target={_blank}
                      href={item.link}
                      rel="noopener noreferrer"
                      className="py-2 flex flex-col md:flex-row gap-2 items-center justify-center"
                    ></a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>Image</div>
        </div>
      </div>
    </section>
  )
}

export default About
