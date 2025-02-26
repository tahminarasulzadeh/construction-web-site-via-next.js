'use client';
import { useState } from "react";
import Link from "next/link";
import Logo from "../Logo/page";
import { RxHamburgerMenu } from "react-icons/rx";

export default function HeaderPage() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [active, setActive] = useState("HOME"); // Default active item

    const menuItems = [
        { name: "HOME", link: "/" },
        { name: "SERVICES", link: "/#services" },
        { name: "ABOUT", link: "/#about" },
        { name: "PROJECTS", link: "/projects" },
        { name: "CONTACT", link: "/#contact" },
    ];

    return (
        <div className={`fixed top-0 w-full z-50 bg-[#EDCD1D] transition-colors`}>
            {/* Desktop Navigation */}
            <div className="w-full shadow-md xl:pr-[10%] xl:justify-between hidden xl:flex bg-[#1E2D3B]">
                <Logo />
                <ul className="flex flex-row items-center gap-[70px]">
                    {menuItems.map((item) => (
                        <li
                            key={item.name}
                            className="cursor-pointer"
                            onClick={() => setActive(item.name)} // Set active item
                        >
                            <Link href={item.link}>
                                <span
                                    className={`font-montserrat leading-[16.94px] font-[400] text-[14px] ${
                                        active === item.name
                                            ? "text-[#FFD700] font-[600]" // Active class styles
                                            : "text-white"
                                    }`}
                                >
                                    {item.name}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Mobile Navigation */}
            <div className="xl:hidden flex w-full  justify-between items-center p-4">
                <Logo />
                <RxHamburgerMenu
                    className="text-[45px] cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                />
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="fixed inset-0 w-full h-full bg-[#1E2D3B] flex justify-center z-50">
                    <ul className="flex flex-col gap-[20px] justify-center items-center">
                        {menuItems.map((item) => (
                            <li
                                key={item.name}
                                className="cursor-pointer"
                                onClick={() => {
                                    setActive(item.name); // Set active item
                                    setIsOpen(false); // Close mobile menu
                                }}
                            >
                                <Link href={item.link}>
                                    <span
                                        className={`text-white font-montserrat leading-[16.94px] font-[400] text-[20px] ${
                                            active === item.name
                                                ? "text-[#FFD700] font-[600]" // Active class styles
                                                : ""
                                        }`}
                                    >
                                        {item.name}
                                    </span>
                                </Link>
                            </li>
                        ))}
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
