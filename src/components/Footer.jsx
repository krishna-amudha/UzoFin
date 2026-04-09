import React from 'react'
import LindedIn1 from "../assets/LindedIn-1.png";
import LindedIn2 from "../assets/LindedIn2.png";
import LindedIn3 from "../assets/LindedIn3.png";
import LindedIn4 from "../assets/LindedIn4.png";
import LogoFooter from "../assets/UzoFin Logo - Source.png";
function Footer() {
  return (
    <div>
      <footer class="bg-black text-gray-400">
  <div class="max-w-[1300px] mx-auto px-4 py-12">

  
    <div class="border-t border-blue-900/40 mb-10"></div>

  
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">

    
      <div class="lg:col-span-2">
        <h2 class="text-white text-3xl font-semibold flex items-center gap-2">
         <img src={LogoFooter} alt="" />
        </h2>


        <p class="text-sm mt-5 leading-relaxed text-gray-500 max-w-sm">
          Experience the new age of payments with UzOFIN and explore new growth
          opportunities to reach greater heights
        </p>
      </div>


      <div>
        <h3 class="text-blue-500 text-sm font-semibold mb-4 tracking-wide">
          PRODUCTS
        </h3>
        <ul class="space-y-3 text-sm">
          <li><a href="#" class="hover:text-white">AI Banking</a></li>
          <li><a href="#" class="hover:text-white">Payment</a></li>
          <li><a href="#" class="hover:text-white">Payout</a></li>
          <li><a href="#" class="hover:text-white">Merchant Onboarding</a></li>
          <li><a href="#" class="hover:text-white">FRM</a></li>
        </ul>
      </div>

  
      <div>
        <h3 class="text-blue-500 text-sm font-semibold mb-4 tracking-wide">
          COMPANY
        </h3>
        <ul class="space-y-3 text-sm">
          <li><a href="#" class="hover:text-white">About Us</a></li>
          <li><a href="#" class="hover:text-white">Help Center</a></li>
          <li><a href="#" class="hover:text-white">Contact</a></li>
        </ul>
      </div>

     
      <div>
        <h3 class="text-blue-500 text-sm font-semibold mb-4 tracking-wide">
          LEGAL
        </h3>
        <ul class="space-y-3 text-sm">
          <li><a href="#" class="hover:text-white">Cookie Policy</a></li>
          <li><a href="#" class="hover:text-white">Privacy Policy</a></li>
          <li><a href="#" class="hover:text-white">Terms of Service</a></li>
        </ul>
      </div>

    
      <div>
        <h3 class="text-blue-500 text-sm font-semibold mb-4 tracking-wide">
          SOCIAL
        </h3>

        <div class="space-y-2 text-sm">
          
          <div class="flex items-center gap-1">
            <div class="w-9 h-9 flex items-center justify-centertext-xs">
              <img src={LindedIn1} alt="" />
            </div>
            <span>/uzofin</span>
          </div>

          <div class="flex items-center gap-1">
            <div class="w-9 h-9 flex items-center justify-centertext-xs">
              <img src={LindedIn2} alt="" />
            </div>
            <span>/uzofin</span>
          </div>

          <div class="flex items-center gap-1">
            <div class="w-9 h-9 flex items-center justify-centertext-xs">
              <img src={LindedIn3} alt="" />
            </div>
            <span>/uzofin</span>
          </div>

          <div class="flex items-center gap-1">
            <div class="w-9 h-9 flex items-center justify-centertext-xs">
              <img src={LindedIn4} alt="" />
            </div>
            <span>/uzofin</span>
          </div>

        </div>
      </div>

    </div>

  
    <div class="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-500">
      <p>Copyright © 2025 UzOFIN. All rights reserved</p>
      <p class="mt-3 md:mt-0">India (EN)</p>
    </div>

  </div>
</footer>
    </div>
  )
}

export default Footer

