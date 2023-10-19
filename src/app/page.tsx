"use client"

import ImageBox from "@/components/ImageBox";
import React from "react"
import { row0, row1 } from "@/data/images";

import { block } from "million/react-server";

const Main = () => {
    return (
    <div className="flex flex-col mt-8">
    <div className="flex flex-wrap">
        <div className="w-full md:w-full lg:w-full">
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                <h1 className="text-3xl font-semibold text-center leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                    INTERACT <span className="text-[#7096d1]">CLUB</span>
                </h1>
            </a>
            <div className="flex flex-wrap justify-center mt-8">
                {row0.map((row, i) => (
                    <React.Fragment key={i}>
                        <ImageBox src={row.src} width={row.width} height={row.height}></ImageBox>
                    </React.Fragment>
                ))}

            </div>
            <div className="flex flex-wrap justify-center mt-8">
            {row1.map((row, i) => (
                    <React.Fragment key={i}>
                        <ImageBox src={row.src} width={row.width} height={row.height}></ImageBox>
                    </React.Fragment>
                ))}
            </div>
        </div>
    </div>
        <h1 className="text-base font-semibold text-center leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:base sm:leading-10 md:base md:leading-14">
            The Interact Club is a student-led club that aims to help those in need and urge others to do the same.
        </h1>
    </div>
    )
}

const MainBlock = block(Main);

export default function IndexPage() {
    return (
        <MainBlock />
    )
}