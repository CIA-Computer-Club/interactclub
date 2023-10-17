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
                    <Image className="border-2 border-black mx-auto" src={"https://media.discordapp.net/attachments/1163526744570081310/1163801819579945081/image.png?ex=6540e5e8&is=652e70e8&hm=6d15eecff721360bf76e6f66a4530b96f19d1d18f946268f6031dee97ae8efd9&=&width=855&height=473"} width={855} height={473} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt="raising funds"></Image>
                    <h1 className="text-xl font-medium text-center leading-9 tracking-tight text-gray-900 dark:text-gray-100 mx-auto">
                        We sell overpriced snaks.
                    </h1>

                </Link>
                <Link href='/doing/help'>
                    <Image className="border-2 border-black mx-auto" src={"https://media.discordapp.net/attachments/1163526744570081310/1163801856271712277/image.png?ex=6540e5f0&is=652e70f0&hm=42575306659ee1df8c7cdfece8be5cc18bd928348a658d4e5e5af5c308904bc8&=&width=855&height=473"} width={855} height={473} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
 alt="raising funds"></Image>
                    <h1 className="text-xl font-medium text-center leading-9 tracking-tight text-gray-900 dark:text-gray-100 mx-auto">
                        We Help Children.
                    </h1>

                </Link>

            </div>
        </div>
    )
}