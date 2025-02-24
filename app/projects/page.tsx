"use client"
import Link from "next/link";
import { useState } from "react"

import Image from "next/image"
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";

import { RiShareForwardLine } from "react-icons/ri";
import { projectsData } from "@/app/sharedData"


export default function ProjectsPage() {

    const [projects, setProjects] = useState(projectsData);

    const handleLikes = (index: number) => {
        setProjects((prevProjects) =>
            prevProjects.map((project, idx) =>
                idx === index
                    ? {
                        ...project,
                        isLiked: !project.isLiked,
                        likeCount: project.isLiked
                            ? project.likeCount - 1
                            : project.likeCount + 1,
                    }
                    : project
            )
        );
    };
    return <div className="px-5  pb-5 pt-28 ">
        <div className="flex lg:justify-center lg:items-center justify-start flex-col items-start">
            <p className="text-start font-bold  text-[25px] leading-[32px] lg:leading-[64.48px] tracking-normal lg:text-[53.28px] font-sans text-[#1E2D3B] mt-10">PROJECTS</p>
            <div className="w-[116px] mt-2 flex h-[10px] bg-[#EDCD1F]"></div>

            <div className="flex flex-col gap-10 mt-10 pt-5 justify-center items-center">
                <div className="flex justify-center gap-[20px]">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {projects.map((project, index) => (
                            <div

                                key={project.id}
                                className="relative z-20 group cursor-pointer"

                            >
                                {/* Main Image */}
                                <Image
                                    src={project.images[0].img1_}
                                    alt={project.name}
                                    className="group w-[455px] h-[455px] transition-all cursor-pointer duration-500 ease-in-out group-hover:scale-110 group-hover:opacity-25"
                                    width={600}
                                    height={400}
                                />

                                {/* Overlay with project name */}
                                <div className="absolute inset-0 items-center justify-center hidden group-hover:flex">
                                    <p className="text-[22px] font-sans">{project.name}</p>
                                </div>

                                {/* Overlay with actions */}
                                <div className="absolute z-50 inset-0 p-5 items-end justify-between hidden group-hover:flex">
                                    <div
                                        className="flex items-center gap-2 justify-center"
                                        onClick={(e) => {
                                            e.stopPropagation(); // Prevents the click from triggering the Link
                                            handleLikes(index);
                                        }}
                                    >
                                        {project.isLiked ? (
                                            <FaHeart className="text-[30px] z-50 text-red-700" />
                                        ) : (
                                            <FaRegHeart className="z-50 text-[30px]" />
                                        )}
                                        {project.likeCount > 0 && <p>{project.likeCount}</p>}
                                    </div>
                                    <Link href={`/projects/${project.id}`} passHref>
                                        <RiShareForwardLine className="mt-10 text-[30px]" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


            </div>
        </div>

    </div>
}