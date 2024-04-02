import React from 'react'
import { socials } from '../../data'
import { YouTube, Twitter, Github, Discourd } from '../../assets'
import { HeroMd } from '../../assets'
import Scroller from '../../components/scroller'
import Contact from '../Contact/contact'
function About() {
  return (
    <>
      <section>
        <div className="border-x-2 border-black py-12">
          <div className="container mx-auto px-4 grid gap-8 lg:grid-cols-2">
            <div>
              <h1 className="text-4xl lg:text-5xl xl:text-7xl mb-4 font-bold">
                My Story
              </h1>
              <p className="text-lg mb-2">
                I've always been captivated by the magic of technology. Growing
                up, I found myself drawn to the intricate world of coding and
                web development. What started as a curious exploration soon
                blossomed into a passion as I delved deeper into the realms of
                frontend development.
              </p>
              <p className="text-lg mb-2">
                With relentless determination and a thirst for knowledge, I
                honed my skills, mastering the art of crafting visually stunning
                and seamlessly functional websites. My journey as a frontend
                developer has been marked by countless hours of dedication,
                experimentation, and learning.
              </p>
              <div className="text-lg font-bold">Find me on:</div>
              <div className="mb-8">
                <ul className="flex gap-6">
                  {socials.map((item, index) => (
                    <li key={index}>
                      <a
                        target="_blank"
                        href={item.link}
                        rel="noopener noreferrer"
                        className="py-2 flex flex-col md:flex-row gap-2 items-center justify-center"
                      >
                        <img
                          src={item.icon}
                          alt={item.alt}
                          width=""
                          height=""
                        />
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <img
                src={HeroMd}
                alt="Me Programming"
                className="border-black border-2 rounded-xl mb-8"
              />
            </div>
          </div>
        </div>
      </section>
      <Scroller
        text={
          " ✨ Let's get to work ✨ Have a project in mind? ✨ Let's get to work ✨ Have a project in mind? ✨ Let's get to work ✨ Have a project in mind?"
        }
        link={'/contact'}
      />

      <Contact />
    </>
  )
}

export default About
