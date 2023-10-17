"use client"

import { Gallery } from "react-grid-gallery";

import Image from "@/components/Image"
import Link from "@/components/Link"

export default function IndexPage() {

    return (
        <div className="divide-y divide-gray-400 dark:divide-gray-700">
            <h1 className="text-3xl font-semibold text-center leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                WHAT WE <span className="text-[#7096d1]">DO</span>
            </h1>

            <div className=" relative flex justify-center m-8">

                <Link href='/doing/funds'>
                    <Image className="border-2 border-black mx-auto" src={"https://media.discordapp.net/attachments/674332038182207578/1163777998135238688/Screenshot_20231017_125802_Weather.jpg?ex=6540cfb8&is=652e5ab8&hm=ba0e51c3e2ef528f7ddae6a9d52bfabc631328f5342bbac0573d956e876f82b7&=&width=855&height=473"} width={855} height={473} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt="raising funds"></Image>
                    <h1 className="text-xl font-medium text-center leading-9 tracking-tight text-gray-900 dark:text-gray-100 mx-auto">
                        We ask for money from people.
                    </h1>

                </Link>
                <Link href='/doing/help'>
                    <Image className="border-2 border-black mx-auto" src={"https://media.discordapp.net/attachments/1163526744570081310/1163796091855179796/image.png?ex=6540e092&is=652e6b92&hm=094c2caf1a97d6d42add850e0ee50485785962fc22df985592d9626dc8f6e186&=&width=855&height=473"} width={855} height={473} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
 alt="raising funds"></Image>
                    <h1 className="text-xl font-medium text-center leading-9 tracking-tight text-gray-900 dark:text-gray-100 mx-auto">
                        We Help Children
                    </h1>

                </Link>

            </div>
        </div>
    )
}