'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/app/sharedData"; // Adjust the path to where projectsData is located
import React from "react";

interface ImageSet {
    img1_: string;
    img2_: string;
    img3_: string;
}

export default function ProjectDetailsPage({ params }: { params: Promise<{ projectId: string }> }) {
    const { projectId } = React.use(params); // Unwrap the params promise

    // Hooks are always called at the top level
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const project = projectsData.find((p) => p.id.toString() === projectId);

    // Handle project or image conditions in JSX, not before hooks
    if (!project) {
        return <h1 className="text-red-700 z-50 text-center mt-[255px]">Project not found</h1>;
    }

    const currentImageSet = project.images && project.images.length > 0 ? project.images[0] : null;

    if (!currentImageSet) {
        return <h1 className="text-red-700 z-50 text-center mt-[255px]">No images available</h1>;
    }

    const imageKeys: Array<keyof ImageSet> = ['img1_', 'img2_', 'img3_'];
    const currentImageKey = imageKeys[currentIndex];
    const currentImage = currentImageSet[currentImageKey] || '/fallback-image.png';

    return (

        <div className="flex w-full h-full flex-col">
            <div className=" w-full flex mt-[100px] items-center flex-col">
                <div className="bg-[#F7F7F7] w-full pl-[5%] md:pl-[20%]   py-16 ">
                    <p className=" text-[27px] lg:mt-0 mt-8 md:text-[55px] leading-normal text-[#1E2D3B] tracking-normal font-semibold font-sans">
                        {project.name}
                    </p>
                    <div className="bg-[#EDCD1D] w-[130px] h-[10px]"></div>
                </div>
                <div className="flex flex-wrap gap-[20px] mt-16 justify-start pl-10 xl:pl-0 md:justify-center">
                    <div className="w-[350px]  md:w-[505px] h-full">
                        <p className="font-sans font-normal tracking-normal mb-[30px]  text-[14px]  lg:text-[17px] text-[#979494] leading:[17px] lg:leading-[28.9px]">
                            {project.info} 
                        </p>
                    </div>
                    <div className="flex items-center w-full md:w-[600px] overflow-x-auto scrollbar-hide">
                        <div className="flex items-center pr-10  w-full md:w-[600px] overflow-x-auto justify-center">
                            <Image
                                key={currentIndex}
                                src={currentImage}
                                alt={project.name}
                                className="w-full h-auto md:w-[600px] md:h-[400px]"
                                width={600}
                                height={400}
                            />
                        </div>
                    </div>
                </div>


            </div>

            <div className="flex mt-3 justify-center ">
                <Link
                    href="/"
                    className="p-3 bg-[#211f15]  text-[#EDCD1D] font-sans font-normal transition-all cursor-pointer duration-500 ease-in-out hover:bg-[#EDCD1D] hover:text-[#211f15]"
                >
                    BACK TO PROJECTS
                </Link>
            </div>
        </div>

    );
}
