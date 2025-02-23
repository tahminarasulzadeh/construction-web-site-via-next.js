
'use client'
import { useEffect, useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";

import ServicesPage from "./components/Services/page";
import AboutPage from "./components/About/page";
import ProjectsPage from "./projects/page";
import Clients from './components/Clients/page';
import Contact from './components/Contact/page';
import Copyright from './components/Copyright/page';



export default function Home() {

  const [scrollY, setScrollY] = useState(0);

   useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full pt-28 h-full">
      <div className="relative w-full h-screen overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{
            transform: `translateY(${scrollY * 0.3}px)` // Adjust the parallax effect strength
          }}
        >
          <source src="/const-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Content on top of the video */}
        <div className="relative z-10 flex flex-col mt-20 items-center h-full">
          <p className="text-center font-sans text-white text-[48px] leading-[65px] font-[600] tracking-wide">
            LEADERS IN QUALITY <br /> CONSTRUCTION AND <br /> INFRASTRUCTURE
          </p>
          <Link className="mt-2" href="/#services">
            <IoIosArrowDown className="text-white text-[58px]" />
          </Link>
        </div>

        {/* Overlay to make text more readable */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-0"></div>
      </div>

      <ServicesPage />
      <AboutPage />
      <ProjectsPage />
      <Clients />
      <Contact />
      <Copyright />
    </div>

  );
}
