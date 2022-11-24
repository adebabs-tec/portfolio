import React from 'react'
import { Link } from 'react-router-dom'
import { socials } from '../../data'

function Contact() {
  return (
    <section>
      <div className="border-x-2 border-black py-12">
        <div className="container mx-auto px-4 grid gap-8 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl lg:text-5xl xl:text-7xl mb-4 font-bold">
              Contact
            </h1>
            <p className="text-lg mb-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
              deserunt tempore officia harum sequi molestiae ratione odio quasi
              repellendus recusandae.
            </p>
            <p className="text-xl mb-6 font-semibold">
              Need my email: babalolaruqoyat@gmail.com
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
                      <img src={item.icon} alt={item.alt} width="" height="" />
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <form
            action="https://public.herotofu.com/v1/52fc1400-68b3-11ed-bd0a-c1ef0a3c8340"
            method="post"
          >
            <div className="w-full mb-4">
              <label
                for="name"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Your Name
              </label>
              <input
                name="Name"
                id="name"
                type="text"
                required
                className="w-full block px-4 py-3 border-black border-2 rounded"
              />
            </div>
            <div className="w-full mb-4">
              <label
                for="email"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Your Email
              </label>
              <input
                name="Email"
                id="email"
                type="text"
                required
                className="w-full block px-4 py-3 border-black border-2 rounded"
              />
            </div>
            <div className="w-full mb-4">
              <label
                for="message"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Message
              </label>
              <textarea
                name="email"
                id="email"
                className="w-full block px-4 py-3 border-black border-2 rounded"
                cols="30"
                rows="10"
              ></textarea>
            </div>

            <div>
              <input
                type="submit"
                value="Send Message"
                className="px-6 py-4 rounded-md bg-teal-600 hover:bg-teal-700 text-white"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
