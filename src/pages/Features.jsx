import React from 'react'
import ImageAbstract from "../assets/Abstract.png";

export default function Features() {
  return (
    <section className="relative flex items-center justify-center text-center sm:min-h-[90vh]">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center"
        style={{ 
          backgroundImage: `url(${ImageAbstract})`, 
          backgroundSize: "900px",
          backgroundPosition: "center"
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 max-w-[1300px] mx-auto px-6 sm:px-10">
        
        <h1 className="built-fast-text text-3xl sm:text-5xl md:text-6xl font-bold leading-tight-future text-white">
          The future of your<br/> industry{" "}
          <span className="powerapi bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent leading-future">
            starts here
          </span>
        </h1>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          
          <button className="start-button px-8 py-3 rounded-full uppercase">
            <span>Book a Demo</span>
          </button>

          <button className="read-button px-8 py-3 rounded-full uppercase">
            <span>Build AI</span>
          </button>

        </div>
      </div>
    </section>
  )
}