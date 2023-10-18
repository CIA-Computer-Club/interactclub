"use client"

import { Gallery } from "react-grid-gallery";
import { help0 , help1 } from "@/data/images.tsx"

export default function IndexPage() {

    return (
        <div className="flex flex-col mt-8">
            <div className="flex flex-wrap mb-24">
                <div className="w-full md:w-full lg:w-full">
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                        <h1 className="text-6xl font-medium text-[#081f3c]">
                            HOW WE <span className="text-[#7096d1]">HELP</span>
                        </h1>
                    </a>
                    <p className="text-2xl mt-2">working with NGOS, we are able to:</p>
                    <div className="justify-center">
                        <Gallery images={help0} margin={20} rowHeight={400} />
                    </div>
                    <div className="justify-center">
                        <Gallery images={help1} margin={20} rowHeight={400} />
                    </div>
                </div>
            </div>
        </div>
    )
}