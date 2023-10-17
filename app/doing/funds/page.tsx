"use client"

import { Gallery } from "react-grid-gallery";

import Image from "next/image"

export default function IndexPage() {

    return (
        <div className="divide-y divide-gray-400 dark:divide-gray-700">
        <div className="flex flex-col mt-8">
            <div className="flex flex-wrap mb-3">
                <div className="w-full lg:w-6/12 px-4">
                    <h1 className="text-[82px] font-semibold text-[#081f3c]">
                        RAISING <span className="text-[#7096d1]">FUNDS</span>
                    </h1>
                </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
                <h1 className="text-xl font-medium text-[#081f3c]">
                    We make events blah blah blahj  raise money lalalallala. example:
                </h1>
            </div>

        </div>



        </div>
    )
}