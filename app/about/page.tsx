import React from "react";
import { About } from "../lib/interface";
import Image from 'next/image'
import logo from '../images/logo.png'
import gingerbread from '../images/gingerbread.jpg'

export default async function About(){
    return (
    <div className="divide-y divide-gray-400 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
            </h1>
        </div>
        <ul>
          <li className="flex item-centers md:item-centers py-4">
              <div>
                <Image src={logo} height={160} width={160} alt="Logo"/>
              </div>
                <div className="ml-12 w-max">
                  <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                    Interact Club
                  </h3>
                  <p>
                    A Student-Led Club <br/> 
                    <span className ="text-[#7096d1]">
                        2019-Present</span><br/>
                    <span className="text-gray-500 dark:text-gray-400 line-clamp-2">
                    For everyone and the community.</span>
                </p>
              </div>    
          </li>
          <li className="flex item-centers md:item-centers py-4">
              <div>
                <Image className="rounded-full" src={gingerbread} height={160} width={160} alt="Gingerbread"/>
              </div>
                <div className="ml-12 w-max">
                  <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                    Ginger Bread
                  </h3>
                  <p>
                    Vice President <br/> 
                    <span className ="text-[#7096d1]">
                        2023-2024</span><br/>
                    <span className="text-gray-500 dark:text-gray-400 line-clamp-2">
                        For everyone and the community.</span>
                </p>
              </div>    
          </li>
      </ul>
    </div>
    )
}