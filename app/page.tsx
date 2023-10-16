"use client"

import { Gallery } from "react-grid-gallery";

export default function IndexPage() {
    const images = [
        {
           src: "https://media.discordapp.net/attachments/1163526744570081310/1163526942541226094/movie0.jpg?ex=653fe5e8&is=652d70e8&hm=11ca17b193749be8a27e4bd0adafa657cc27a62329ebadbc49fad2f6f81178f8&=&width=704&height=396",
           width: 625,
           height: 324,
           alt: "theanlay & soty",
        },
        {
           src: "https://media.discordapp.net/attachments/1163526744570081310/1163526942847422564/movie1.jpg?ex=653fe5e8&is=652d70e8&hm=65fdfd8d96afd70c939e8bd5562b998a2e43f6fe13f3a0e6ef4d873a882a2297&=&width=704&height=396",
           width: 580,
           height: 324,
           alt: "4 girls",
        },
        {
           src: "https://media.discordapp.net/attachments/1163526744570081310/1163526943082283119/movie2.jpg?ex=653fe5e8&is=652d70e8&hm=38598a498c8d2d5068b39707ab6b49563d40d0f485285df19e964928c9c48fcc&=&width=704&height=396",
           width: 580,
           height: 324,
           alt: "bunch of kids",
        },
     ];
     
     const images1 = [
        {
           src: "https://media.discordapp.net/attachments/1163526744570081310/1163526942541226094/movie0.jpg?ex=653fe5e8&is=652d70e8&hm=11ca17b193749be8a27e4bd0adafa657cc27a62329ebadbc49fad2f6f81178f8&=&width=704&height=396",
           width: 625,
           height: 324,
           alt: "theanlay & soty",
        },
        {
           src: "https://media.discordapp.net/attachments/1163526744570081310/1163526942847422564/movie1.jpg?ex=653fe5e8&is=652d70e8&hm=65fdfd8d96afd70c939e8bd5562b998a2e43f6fe13f3a0e6ef4d873a882a2297&=&width=704&height=396",
           width: 580,
           height: 324,
           alt: "4 girls",
        },
        {
           src: "https://media.discordapp.net/attachments/1163526744570081310/1163526943082283119/movie2.jpg?ex=653fe5e8&is=652d70e8&hm=38598a498c8d2d5068b39707ab6b49563d40d0f485285df19e964928c9c48fcc&=&width=704&height=396",
           width: 580,
           height: 324,
           alt: "bunch of kids",
        },
     ];



    return (
        <div className="divide-y divide-gray-400 dark:divide-gray-700">
            <div className="space-y-2 pt-6 pb-8 md:space-y-5">
                <h1 className="text-3xl font-semibold text-center leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                    INTERACT <span className="text-[#7096d1]">CLUB</span>
                </h1>
                <div className="justify-center">
                    <Gallery images={images} margin={20} rowHeight={400} />
                </div>
                <div className="justify-center">
                    <Gallery images={images1} margin={20} rowHeight={400} />
                </div>


            </div>
            <h1 className="text-base font-semibold text-center leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:base sm:leading-10 md:base md:leading-14">
                The Interact Club is a student-led club that aims to help those in need and urge others to do the same.
            </h1>
        </div>
    )
}