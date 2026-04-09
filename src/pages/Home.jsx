import React from 'react'
import Navbar from "../components/Navbar";
import Abouts from './Abouts'
import ImageL from "../assets/frame-l.png";
import ImageR from "../assets/frame-r.png";
import Image2 from "../assets/image 2.png";
import Image3 from "../assets/image 3.png";
import Image4 from "../assets/image 4.png";
import Image5 from "../assets/image 5.png";
import Image6 from "../assets/image 6.png";
import Image7 from "../assets/image 7.png";
import Image8 from "../assets/image 8.png";
import WhyUzofin from './WhyUzofin';
import OurPowrFull from './OurPowrFull';
import SliderText from './SliderText';
import Features from './Features';

function Home() {
  return (
   <div>
     <section className="relative min-h-screen overflow-hidden">

      {/* ✅ Navbar INSIDE hero */}
      <Navbar />

      {/* Background Images */}
      <img 
        src={ImageL}
        className="absolute top-0 left-0 w-[300px] md:w-[650px]"
        style={{ objectPosition: 'top' }}
      />

      <img 
        src={ImageR}
        className="absolute top-0 right-0 w-[300px] md:w-[527px]"
        style={{ objectPosition: 'top' }}
      />

      {/* Overlay */}
      <div className="absolute inset-0"></div>

      {/* Hero Content */}
      <div className="relative z-30 flex items-center justify-center text-center max-w-[1300px] mx-auto px-4 mt-32">
        
        <div>
          <h1 className="text-power zoom-out">
  AI-powered{" "}
  <span className="text-color-bank">
    Banking & Payment Solutions <br />
  </span>
  built for Modern Businesses
</h1>

          <p className="mt-5 text-sm md:text-base text-gray-400 max-w-4xl mx-auto hero-decription">
            UzOfin brings intelligent automation, real-time payments, and seamless financial operations together so you can scale without friction.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-6">
            <button className="start-button rounded-full uppercase">
              <span>Start Building</span>
            </button>
            <button className="read-button rounded-full uppercase">
              <span> Read Docs </span>
            </button>
          </div>

          <p className="mt-30 logo-desicription uppercase">
            Powering tools and integration for companies around the world
          </p>
        </div>
      </div>
      
      {/* Logos Row */}
      <div className="overflow-hidden w-full mt-10">
  <div className="flex gap-8 animate-scroll">
    {[...Array(2)].map((_, i) => (
      <div key={i} className="flex gap-8">
        {[Image2, Image3, Image4, Image5, Image6, Image7, Image8].map((img, index) => (
          <div key={index} className="w-[120px] flex items-center justify-center">
            <img src={img} className="h-full object-contain" />
          </div>
        ))}
      </div>
    ))}
  </div>
</div>
    </section>

    {/* About Section */}
    <div className=''>
      <Abouts/>
    </div>
    
{/* Why Section */}
    <div className=''>
      <WhyUzofin/>
    </div>

    {/* Why Section */}
    <div className=''>
      <OurPowrFull/>
    </div>

    {/* Why Section */}
    <div className=''>
      <SliderText/>
    </div>
    <div className=''>
      <Features/>
    </div>

   </div>
  )
}

export default Home;