'use client'
import { useState } from "react";
import Logo from "../Logo/page";
import { RxHamburgerMenu } from "react-icons/rx";

export default function HeaderPage() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className="fixed w-full bg-[#EDCD1D] z-50">
            {/* Desktop Navigation */}
            <div className="w-full shadow-md xl:pr-[10%] xl:justify-between hidden xl:flex bg-[#1E2D3B]">
                <Logo />
                <ul className="flex flex-row items-center gap-[70px]">
                    <li className="text-white font-montserrat leading-[16.94px] font-[400] text-[14px]">HOME</li>
                    <li className="text-white font-montserrat leading-[16.94px] font-[400] text-[14px]">SERVICES</li>
                    <li className="text-white font-montserrat leading-[16.94px] font-[400] text-[14px]">ABOUT</li>
                    <li className="text-white font-montserrat leading-[16.94px] font-[400] text-[14px]">PROJECTS</li>
                    <li className="text-white font-montserrat leading-[16.94px] font-[400] text-[14px]">CONTACT</li>
                </ul>
            </div>

            {/* Mobile Navigation */}
            <div className="xl:hidden flex w-full justify-between items-center p-4">
                <Logo />
                <RxHamburgerMenu
                    className="text-[45px] cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                />
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="fixed inset-0 w-full h-full bg-[#1E2D3B] flex flex-col items-center justify-center z-50">
                    <ul className="flex flex-col gap-[20px] justify-center items-center">
                        <li className="text-white font-montserrat leading-[16.94px] font-[400] text-[20px] cursor-pointer">
                            HOME
                        </li>
                        <li className="text-white font-montserrat leading-[16.94px] font-[400] text-[20px] cursor-pointer">
                            SERVICES
                        </li>
                        <li className="text-white font-montserrat leading-[16.94px] font-[400] text-[20px] cursor-pointer">
                            ABOUT
                        </li>
                        <li className="text-white font-montserrat leading-[16.94px] font-[400] text-[20px] cursor-pointer">
                            PROJECTS
                        </li>
                        <li className="text-white font-montserrat leading-[16.94px] font-[400] text-[20px] cursor-pointer">
                            CONTACT
                        </li>
                    </ul>
                    <button
                        className="absolute top-4 right-4 text-white text-[45px]"
                        onClick={() => setIsOpen(false)}
                    >
                        &times;
                    </button>
                </div>
            )}
        </div>
    );
}
