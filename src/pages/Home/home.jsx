import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import {
  HeroSm,
  HeroMd,
  HeroLg,
  PortfolioPattern,
  Services,
} from '../../assets'
import Scroller from '../../components/scroller'
import { portfolioData } from '../../data'
function Home() {
  return (
    <div className="border-black border-x-2">
      <section className="py-10 lg:py-24 xl:py-36">
        <div className="container gap-8 px-4 flex flex-col md:flex-row mx-auto items-center">
          <div className="md:flex-1 md:order-2">
            <picture
              className="flex drop-shadow-[10px_-10px_0_rgba(250,204,21,1)]
             border-black rounded-tl-[150px] rounded-br-[150px] rounded-xl overflow-hidden"
            >
              <source
                srcSet={HeroSm}
                width="363"
                height="222"
                media="(max-width:400px)"
                type="image/jpg"
              />
              <source
                srcSet={HeroMd}
                width="608"
                height="372"
                media="(max-width:400px)"
                type="image/jpg"
              />
              <img
                src={HeroLg}
                width="870"
                height="532"
                alt="It is quite interesting!"
              />
            </picture>
          </div>
          <div className="md:flex-1">
            <h2 className="text-lg md:text-xl font-bold uppercase">
              Hi 🙌 I'm Ruqoyat
            </h2>
            <h1 className="text-4xl lg:text-5xl xl:text-7xl font-bold mb-4">
              Hajia<span className="text-yellow-400">.</span>
              <br />
              Developer<span className="text-violet-900">.</span>
            </h1>
            <p className="text-lg max-w-xl mb-6 ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. tenetur
              ea facere in ak.
            </p>
            <div className="flex gap-4 items-baseline">
              <HashLink
                to="#work"
                className="px-6 py-4 bg-teal-600 hover:bg-teal-700 rounded-md text-white"
              >
                Selected work
              </HashLink>
              <Link to="/contact" className="flex px-6 py-4 text-black gap-2">
                Let's talk
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
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Scroller
        text={
          "✨ Let's get to work ✨ Have a project in mind? ✨ Let's get to work ✨ Have a project in mind? ✨ Let's get to work ✨ Have a project in mind?"
        }
        link={'/contact'}
      />

      <section
        id="work"
        className="px-4 p-12 border-black border-t-2 bg-teal-600 bg-fixed"
        style={{ backgroundImage: 'url(' + PortfolioPattern + ')' }}
      >
        <div className="container mx-auto">
          <div className="text-white text-center py-12">
            <h1 className="text-4xl lg:text-5xl xl:text-7xl font-bold mb-4">
              Selected Work
            </h1>
            <p className="max-w-xl text-lg mx-auto">
              Getting to know more about Tailwindcss by designing this
              portfolio. Hope you like it and I am expecting more comments in
              the contact section.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-28">
            {portfolioData.map((item, index) => (
              <Link
                to={item.link}
                key={index}
                className="md:even:pt-12 ease-in-out duration-75 hover:translate-y-[-4px] hover:drop-shadow-[10px_8px_0_rgba(0,0,0,1)]"
              >
                <div className="border-2 border-black rounded-xl overflow-hidden bg-black">
                  <img src={item.thumbnail} alt={item.alt} loading="lazy" />
                </div>
                <div className="bg-white border-x-2 border-black border-b-2 rounded-bl-xl rounded-br-xl mx-4 p-4 text-lg flex justify-between">
                  <div className="">
                    <span className="font-bold">{item.title}</span>
                    <span className="text-zinc-400">
                      &#9679; {item.category}
                    </span>
                  </div>
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
                </div>
              </Link>
            ))}
          </div>

          <Link
            to="/work"
            className="text-xl mb-4 text-white gap-4 font-bold justify-center flex"
          >
            View all work
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
          </Link>
        </div>
      </section>
      <section className="border-black border-t-2 px-4 py-12">
        <div className="container mx-auto">
          <div className=" text-center py-12">
            <h1 className="text-4xl lg:text-5xl xl:text-7xl font-bold mb-4">
              Services
            </h1>
            <p className="max-w-xl text-lg mx-auto">
              Getting to know more about Tailwindcss by designing this
              portfolio. Hope you like it and I am expecting more comments in
              the contact section.
            </p>
          </div>
          <div className="text-black py-12 grid lg:grid-cols-4 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Web design</h3>
              <p className="mb-4 text-lg">
                I have been developing websites for a while, but I also equally
                enjoy creating other digital products.
              </p>
              <Link
                to={'/web-design'}
                className="flex gap-2 items-center font-bold mb-14 text-lg"
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
              </Link>
              <h3 className="text-3xl font-bold mb-4">Web development</h3>
              <p className="mb-4 text-lg">
                I have been developing websites for a while, but I also equally
                enjoy creating other digital products.
              </p>
              <Link
                to={'/web-development'}
                className="flex gap-2 items-center font-bold mb-14 text-lg"
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
              </Link>
            </div>
            <div className="flex justify-center mb-12 md:mb-0 col-span-2">
              <img
                src={Services}
                alt="Services I offer"
                width="611"
                height="764"
                loading="lazy"
                className="border-2 border-black rounded-full w-3/5 drop-shadow-[10px_-10px_0_rgba(250,204,21,1)]"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-4">Branding</h3>
              <p className="mb-4 text-lg">
                I have been developing websites for a while, but I also equally
                enjoy creating other digital products.
              </p>
              <Link
                to={'/branding'}
                className="flex gap-2 items-center font-bold mb-14 text-lg"
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
              </Link>
              <h3 className="text-3xl font-bold mb-4">Bootstrap</h3>
              <p className="mb-4 text-lg">
                I have been developing websites for a while, but I also equally
                enjoy creating other digital products.
              </p>
              <Link
                to={'/web-bootstrap'}
                className="flex gap-2 items-center font-bold mb-14 text-lg"
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
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
