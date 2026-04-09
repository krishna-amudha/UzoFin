import React from 'react';
import ImageL from "../assets/StartBuilding.png";

function OurPowrFull() {
  return (
    <div>
      <section className="relative flex items-center justify-center text-center mt-30 h-screen sm:h-[90vh]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${ImageL})` }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 " />

        {/* Content */}
        <div className="relative z-10 max-w-[1300px] mx-auto px-6 sm:px-10 pb-44">
          <h1 className="built-fast-text text-3xl sm:text-5xl md:text-6xl font-bold leading-tight text-white">
            Build Faster with Our{" "}
            <span className="powerapi bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Powerful API’s
            </span>
          </h1>

          <p className="mt-6 text-small-gray text-base sm:text-lg md:text-xl text-gray-300">
            Plug into secure, developer-friendly financial API’s and launch in days, not months
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <button className="start-button px-8 py-3 rounded-full uppercase  ">
              <span>Start Building</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OurPowrFull;