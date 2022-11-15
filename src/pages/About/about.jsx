import React from 'react'

function About() {
  return (
    <section>
      <div className="border-x-2 border-black py-12">
        <div className="container mx-auto px-4 grid gap-8 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl lg:text-5xl xl:text-7xl mb-4">My Story</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
              deserunt tempore officia harum sequi molestiae ratione odio quasi
              repellendus recusandae.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
              deseruntur adipisicing elit. Suscipit deserunt tempore officia
              harum sequi molestiae ratione odio quasi repellendus recusandae.
            </p>
          </div>
          <div>Image</div>
        </div>
      </div>
    </section>
  )
}

export default About
