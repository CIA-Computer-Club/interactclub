"use client"

import { Gallery } from "react-grid-gallery";
import { row0 , row1 } from "@/data/images.tsx"

export default function IndexPage() {

    return (
        <div className="flex flex-col mt-8">
            <div className="flex flex-wrap justify-center text-center">
                <div className="w-full md:w-full lg:w-full">
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                        <h1 className="text-3xl font-semibold text-center leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                            INTERACT <span className="text-[#7096d1]">CLUB</span>
                        </h1>
                    </a>
                    <div className="justify-center">
                        <Gallery images={row0} margin={20} rowHeight={400} />
                    </div>
                    <div className="justify-center">
                        <Gallery images={row1} margin={20} rowHeight={400} />
                    </div>
                </div>
            </div>
            <h1 className="text-base font-semibold text-center leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:base sm:leading-10 md:base md:leading-14">
                The Interact Club is a student-led club that aims to help those in need and urge others to do the same.
            </h1>
        </div>
    )
}