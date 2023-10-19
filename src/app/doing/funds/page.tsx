"use client"

import ImageBox from "@/components/ImageBox"

import React from "react"
import { funds0 } from "@/data/images";

import { block } from "million/react-server";

const Main = () => {
  return (
    <div className="flex flex-col mt-8">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-6/12 px-4">
          <h1 className="text-6xl font-medium text-[#081f3c]">
              RAISING <span className="text-[#7096d1]">FUNDS</span>
          </h1>
            <p className="text-2xl mt-2">We organize events:</p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center mt-8">
            {funds0.map((row, i) => (
                <React.Fragment key={i}>
                    <ImageBox src={row.src} width={row.width} height={row.height} title={row.thumbnailCaption}></ImageBox>
                </React.Fragment>
            ))}
      </div>
        
    </div>
)

}
const MainBlock = block(Main);

export default function Help() {
    return (
        <MainBlock />
    )
}