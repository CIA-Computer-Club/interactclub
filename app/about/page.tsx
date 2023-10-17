import React from "react";
import Image from 'next/image'
import p2022 from 'images/gingerbread.jpg'
import ProfileCard from '@/components/ProfileCard'

export default function About(){
    return (
        <div className="flex flex-col mt-8">
            <div className="flex flex-wrap justify-center text-center">
              <div className="w-full lg:w-6/12 px-4">
                <h1 className="text-6xl font-medium text-[#081f3c]">
                  ABOUT <span className="text-[#7096d1]">US</span></h1>
                <p className="text-2xl font-light">student led club by</p>
                <hr className="h-0.5 my-4 bg-[#7096d1] border-none"></hr>
              </div>
          </div>
          <p className="text-center text-2xl font-light italic mb-6">leaders of year 2023-2024</p>
          <div className="flex flex-wrap">
            <ProfileCard src={"https://media.discordapp.net/attachments/1163526744570081310/1163822215947624488/image.png?ex=6540f8e7&is=652e83e7&hm=54542708fc33fe30370a7d276b07dd9ed9a0184fe77deb6d3719f4386f43d51c&=&width=400&height=400"} position={"President"} name={"Monita"}/>
            <ProfileCard src={""} position={"President"} name={"Monita"}/>
            <ProfileCard src={""} position={"President"} name={"Monita"}/>
            <ProfileCard src={""} position={"President"} name={"Monita"}/>
          </div>
        <p className="text-center text-2xl font-light italic mb-6">leaders of year 2022-2023</p>
          <div className="flex flex-wrap">
            <ProfileCard src={"https://media.discordapp.net/attachments/1163526744570081310/1163822215947624488/image.png?ex=6540f8e7&is=652e83e7&hm=54542708fc33fe30370a7d276b07dd9ed9a0184fe77deb6d3719f4386f43d51c&=&width=400&height=400"} position={"President"} name={"Monita"}/>
            <ProfileCard src={""} position={"President"} name={"Monita"}/>
            <ProfileCard src={""} position={"President"} name={"Monita"}/>
            <ProfileCard src={""} position={"President"} name={"Monita"}/>
          </div>
        <p className="text-center text-2xl font-light italic mb-6">leaders of year 2021-2022</p>
          <div className="flex flex-wrap">
          <ProfileCard src={"https://media.discordapp.net/attachments/1163526744570081310/1163822215947624488/image.png?ex=6540f8e7&is=652e83e7&hm=54542708fc33fe30370a7d276b07dd9ed9a0184fe77deb6d3719f4386f43d51c&=&width=400&height=400"} position={"President"} name={"Monita"}/>
            <ProfileCard src={""} position={"President"} name={"Monita"}/>
            <ProfileCard src={""} position={"President"} name={"Monita"}/>
            <ProfileCard src={""} position={"President"} name={"Monita"}/>
          </div>
      </div>
    )
}