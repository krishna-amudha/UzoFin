import React from "react";
import ImageTalk from "../assets/task_alt.png";
import ImageFooter from "../assets/footer-bg.png";
export default function SliderText() {
  return (
    <div className="relative w-full min-h-screen">
  <div
    className="w-full h-full overflow-hidden py-5 absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: `url(${ImageFooter})` }}
  >
    {/* Optional overlay */}
    <div className="absolute inset-0 bg-black/20"></div>

    <div className="relative z-10 text-center-support">
      <h3>24/7 support</h3>
    </div>

    <h1 className="relative z-10 built-fast-text text-3xl sm:text-5xl md:text-6xl font-bold leading-tight text-white mb-20">
      Industry{" "}
      <span className="powerapi bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
        Standard
      </span>
    </h1>

    {/* Slider track */}
    <div className="flex animate-slide gap-6 mb-30 relative z-10">
      
      {/* Card 1 */}
      <div className="flex-shrink-0 w-1/4">
        <div className="card max-w-sm mx-auto card-design" style={{ animationDelay: "0s" }}>
          <h2 className="card-title mb-4">Scalability & Integration</h2>
          <p className="card-description mb-4">
            Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development. Its purpose is to permit a page layout to be designed. <a href="#" className="text-gray-100 underline hover:text-purple-400 transition-colors">
              Know more
            </a>
          </p>
          <div className="icon">
            <img src={ImageTalk} alt="" />
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="flex-shrink-0 w-1/4">
        <div className="card max-w-sm mx-auto card-design" style={{ animationDelay: "0.5s" }}>
          <h2 className="card-title mb-4">Performance & Speed</h2>
          <p className="card-description mb-4">
            Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development. Its purpose is to permit a page layout to be designed.  <a href="#" className="text-gray-100 underline hover:text-purple-400 transition-colors">
              Know more
            </a>
          </p>
          <div className="icon">
            <img src={ImageTalk} alt="" />
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="flex-shrink-0 w-1/4">
        <div className="card max-w-sm mx-auto card-design" style={{ animationDelay: "1s" }}>
          <h2 className="card-title mb-4">Security & Privacy</h2>
          <p className="card-description mb-4">
            Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development. Its purpose is to permit a page layout to be designed. <a href="#" className="text-gray-100 underline hover:text-purple-400 transition-colors">
              Know more
            </a>
          </p>
          <div className="icon">
            <img src={ImageTalk} alt="" />
          </div>
        </div>
      </div>

      {/* Card 4 */}
      <div className="flex-shrink-0 w-1/4">
        <div className="card max-w-sm mx-auto card-design" style={{ animationDelay: "1.5s" }}>
          <h2 className="card-title mb-4">User Experience</h2>
          <p className="card-description mb-4">
            Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development. Its purpose is to permit a page layout to be designed. <a href="#" className="text-gray-100 underline hover:text-purple-400 transition-colors">
              Know more
            </a>
          </p>
          <div className="icon">
            <img src={ImageTalk} alt="" />
          </div>
        </div>
      </div>

      {/* Card 5 */}
      <div className="flex-shrink-0 w-1/4">
        <div className="card max-w-sm mx-auto card-design" style={{ animationDelay: "2s" }}>
          <h2 className="card-title mb-4">Analytics & Insights</h2>
          <p className="card-description mb-4">
            Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development. Its purpose is to permit a page layout to be designed. <a href="#" className="text-gray-100 underline hover:text-purple-400 transition-colors">
              Know more
            </a>
          </p>
          <div className="icon">
            <img src={ImageTalk} alt="" />
          </div>
        </div>
      </div>

      {/* Card 6 */}
      <div className="flex-shrink-0 w-1/4">
        <div className="card max-w-sm mx-auto card-design" style={{ animationDelay: "2.5s" }}>
          <h2 className="card-title mb-4">Scalability & Integration</h2>
          <p className="card-description mb-4">
            Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development. Its purpose is to permit a page layout to be designed. <a href="#" className="text-gray-100 underline hover:text-purple-400 transition-colors">
              Know more
            </a>
          </p>
          <div className="icon">
            <img src={ImageTalk} alt="" />
          </div>
        </div>
      </div>

    </div>

    {/* Animations */}
    <style jsx>{`
      @keyframes slide {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }

      .animate-slide {
        animation: slide 25s linear infinite;
      }

      @keyframes bounce {
        0%, 50% { transform: translateY(0); }
        50% { transform: translateY(100px); }
      }

      .card {
        animation: bounce 3s ease-in-out infinite;
      }
    `}</style>
  </div>
</div>
  );
}