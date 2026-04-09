import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div >

       <Navbar />
    
      <main >
         <Outlet />
      </main>
      <div className="max-w-[1300px] mx-auto px-4">
        <Footer/>
      </div>
    </div>
  );
}