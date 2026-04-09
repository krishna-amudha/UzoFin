import React, { useRef } from "react";
import HeroImage from "../assets/bg-image.png";
import RoundImage from "../assets/ring.png";

import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

/* 🔁 Continuous Rotate + Smooth Zoom */
function RotatingRing() {
  const meshRef = useRef();
  const texture = useTexture(RoundImage);

  useFrame((state) => {
    if (!meshRef.current) return; // guard
    const t = state.clock.elapsedTime;

    // 🔹 Smooth zoom in/out
    const scale = 1 + Math.sin(t * 1.0) * 0.08;
    meshRef.current.scale.set(scale, scale, scale);

    // 🔹 Rotate counter-clockwise
    const rotationSpeed = -0.002 - Math.abs(Math.sin(t * 1.0)) * 0.005;
    meshRef.current.rotation.z += rotationSpeed;
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[4.5, 4.5]} />
      <meshBasicMaterial map={texture} transparent />
    </mesh>
  );
}

function Abouts() {
  return (
    <section className="relative py-24 overflow-hidden">
      
      {/* Background */}
      <div
        className="absolute inset-0 bg-no-repeat bg-top bg-contain"
        style={{ backgroundImage: `url(${HeroImage})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0" />

      {/* First Row */}
      <div className="relative max-w-[1300px] mx-auto px-4 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-20">
        
        {/* LEFT */}
        <div className="space-y-8 lg:pl-15">
          <h2 className="text-pays">
            Your Business Pays Are Now Faster and Secure
          </h2>

          {/* 🔥 Three.js Canvas */}
          <div className="my-10 w-full mx-auto" style={{ maxWidth: "500px", aspectRatio: "1/1" }}>
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
              <ambientLight intensity={0.9} />
              <pointLight position={[2, 2, 2]} intensity={1} />
              <RotatingRing />
            </Canvas>
          </div>
        </div>

        {/* RIGHT */}
        <div className="space-y-12 lg:pl-15">
          <div className="space-y-8">
            <div>
              <h1 className="monthly_number">11.5M+</h1>
              <p className="text-processed">Transactions processed monthly</p>
            </div>

            <div>
              <h1 className="uptime_number">99.9%</h1>
              <p className="text-processed">Platform uptime and reliability</p>
            </div>

            <div>
              <h1 className="faster_number">
                70% <span className="faster">Faster</span>
              </h1>
              <p className="text-processed">Merchant onboarding with automation</p>
            </div>
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div className="relative max-w-[1300px] mx-auto px-4 md:pl-12 lg:pl-20 grid grid-cols-12 gap-6 md:gap-20 mt-12 md:mt-20">

        <div className="col-span-12 md:col-span-5 lg:pl-15 mt-30">
          <h3 className="text-pays">
            Our Intelligent Financial Suite
          </h3>
          <p className="text-step mt-2">
            <span className="roundcolor"></span>
            Tools That Accelerate Every Step Of your Financial Workflow.
          </p>
        </div>

        <div className="col-span-12 md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-20">
          {/* Column 1 */}
          <div className="space-y-2 mt-20">
            <div>
              <h4 className="text-title-header border-l-2 border-[#1FCFF1] pl-3">
                AI Banking
              </h4>
              <p className="text-step my-4">
                Smart, automated digital banking for businesses. Instant onboarding, intelligent insights, and real-time account operations.
              </p>
              <p className="text-number-header"><span className="roundcolor"></span>3,969</p>
              <p className="text-processed">
                Transactions per second
              </p>
            </div>

            <div>
              <h4 className="text-title-header border-l-2 border-purple-500 pl-3 mt-20">
                Payouts
              </h4>
              <p className="text-step my-4">
                Bulk, automated payouts built for high-volume businesses. Reliable, trackable, and lightning-fast disbursements.
              </p>
              <p className="text-number-header">163,077,581,394</p>
              <p className="text-processed">
                Total transactions
              </p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-2">
            <div>
              <h4 className="text-title-header border-l-2 border-yellow-400 pl-3">
                Payments
              </h4>
              <p className="text-step my-4">
                Fast, secure, and scalable payment infrastructure. Send and receive money globally with ease.
              </p>
              <p className="text-number-header mt-10"><span className="roundcolor"></span>1,675</p>
              <p className="text-processed">
                Validator nodes
              </p>
            </div>

            <div>
              <h4 className="text-title-header border-l-2 border-green-400 pl-3 mt-20">
                Merchant Onboarding
              </h4>
              <p className="text-step my-4">
                Frictionless onboarding for merchants at any scale. Automated KYC, verification, and risk assessments—done in minutes.
              </p>
              <p className="text-number-header mt-15">100%</p>
              <p className="text-processed">
                On-time merchant<br /> onboard
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Abouts;