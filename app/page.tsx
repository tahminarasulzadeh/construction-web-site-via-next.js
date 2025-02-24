'use client'
import { useEffect, useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import ServicesPage from "./components/Services/page";
import AboutPage from "./components/About/page";
import ProjectsPage from "./projects/page";
import Clients from './components/Clients/page';
import Contact from './components/Contact/page';
import Copyright from './components/Copyright/page'

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full pt-28 h-full scroll-smooth">
      <div id="home" className="relative w-full h-screen overflow-hidden">
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
          <p className="text-center font-sans text-white  text-[24px] leading:[32px] xl:text-[48px] xl:leading-[65px] font-[600] tracking-wide">
            LEADERS IN QUALITY <br /> CONSTRUCTION AND <br /> INFRASTRUCTURE
          </p>
          <button
            onClick={handleScrollToServices}
            className="mt-2"
          >
            <IoIosArrowDown className="text-white text-[25px] xl:text-[58px] cursor-pointer" />
          </button>
        </div>

        {/* Overlay to make text more readable */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-0"></div>
      </div>

      {/* Add an ID to the Services section for targeting */}
      <div id="services">
        <ServicesPage />
      </div>
      <div id='about'>
        <AboutPage />
      </div>
      <div id='projects'>
        <ProjectsPage />
      </div>

      <Clients />
      <div id='contact'>
        <Contact />
      </div>

     
    </div>
  );
}
