"use client"

import Image from "@/components/Image"
import Link from "@/components/Link"
import { block } from "million/react-server"

const Main = () => {
    return (
        <div className="flex flex-col mt-8">
        <div className="flex flex-wrap justify-center text-center">
          <div className="w-full lg:w-6/12 px-4">
            <h1 className="text-6xl font-medium text-[#081f3c]">
              WHAT WE <span className="text-[#7096d1]">DO</span></h1>
            </div>
          </div>
        <div className="flex flex-wrap justify-center mt-8">
            <div className="flex flex-col m-6">
                <Link href="/doing/funds">
                <Image className="border-2 border-[#7096d1]"
                    src={"https://media.discordapp.net/attachments/1163526744570081310/1163801819579945081/image.png?ex=6540e5e8&is=652e70e8&hm=6d15eecff721360bf76e6f66a4530b96f19d1d18f946268f6031dee97ae8efd9&=&width=560&height=400"} 
                    width={560}
                    height={400} 
                    alt="profile">
                </Image>
                    <div className="text-center mt-4">
                        <h1 className="text-2xl font-medium mb-1">
                            Raising Fund by Selling Overpriced Food
                        </h1>
                    </div>
                </Link>
            </div>
            <div className="flex flex-col m-6">
                <Link href="/doing/help">
                <Image className="border-2 border-[#7096d1]"
                    src={"https://media.discordapp.net/attachments/1163526744570081310/1163801856271712277/image.png?ex=6540e5f0&is=652e70f0&hm=42575306659ee1df8c7cdfece8be5cc18bd928348a658d4e5e5af5c308904bc8&=&width=560&height=400"} 
                    width={560}
                    height={400} 
                    alt="profile">
                </Image>
                    <div className="text-center mt-4">
                        <h1 className="text-2xl font-medium mb-1">
                            Helping Children by Donating.
                        </h1>
                    </div>
                </Link>
            </div>
        </div>
    </div>
    )
}


const MainBlock = block(Main);

export default function IndexPage() {
    return (
        <MainBlock />
    )
}