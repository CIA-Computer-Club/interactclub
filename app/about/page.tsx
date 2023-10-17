import React from "react";
import ProfileCard from 'components/ProfileCard'

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
            <ProfileCard src={"https://media.discordapp.net/attachments/1163526744570081310/1163857468179366038/IMG_1623.jpg?ex=654119bb&is=652ea4bb&hm=596edb8a70bcb43f4891fba8e0e9bbf492d4497b36f574ef2e59e246e3bb2a81&=&width=400&height=400"} position={"President"} name={"Ketmonyta Prak"}/>
            <ProfileCard src={"https://media.discordapp.net/attachments/1163526744570081310/1163857468552650782/IMG_1624.jpg?ex=654119bb&is=652ea4bb&hm=08810c60067aff87d5996162ecb84a150cbfe5ae1fc11b69a0fe97d2c24382e1&=&width=400&height=400"} position={"Vice President"} name={"Kimhuy Chao"}/>
            <ProfileCard src={"https://media.discordapp.net/attachments/1163526744570081310/1163857468800110674/IMG_1625.jpg?ex=654119bb&is=652ea4bb&hm=991bb8f25c9bee4b4e61d65ee1f7a79d62d36e49f99e9c4a0b88aa28ab83b05a&=&width=400&height=400"} position={"Head of Finance"} name={"Sopanhavatey Sen"}/>
            <ProfileCard src={"https://media.discordapp.net/attachments/1163526744570081310/1163857467864780882/IMG_1626.jpg?ex=654119bb&is=652ea4bb&hm=e34cb4e79d1e6d55b48ea23d61caca50cefb038330ee27d4eb6655e4da50d499&=&width=400&height=400"} position={"Head of Media"} name={"Meiyi Bo"}/>
          </div>
        <p className="text-center text-2xl font-light italic mb-6">leaders of year 2022-2023</p>
          <div className="flex flex-wrap justify-center">
            <ProfileCard src={"https://media.discordapp.net/attachments/1163526744570081310/1163854988196462663/IMG_1616.jpg?ex=6541176c&is=652ea26c&hm=b0b06662aba9b57c12fc42c02242f8e097cce31cb7ffb7c43414e605be288f4c&width=400&height=400"} position={"President"} name={"Sac Neda Nop"}/>
            <ProfileCard src={"https://media.discordapp.net/attachments/1163526744570081310/1163854988544594000/IMG_1617.jpg?ex=6541176c&is=652ea26c&hm=f7f492255d8022ab8066e24da1af0f3a2f2ca8cdd118b4a955f750fafbc65d34&width=400&height=400"} position={"Vice President"} name={"Soniza Cheklim"}/>
            <ProfileCard src={"https://media.discordapp.net/attachments/1163526744570081310/1163854988766879775/IMG_1618.jpg?ex=6541176c&is=652ea26c&hm=2cd9d404e1674050348755eb16be7454520a3f06c1d26ff14c0e90fb45dee79b&width=400&height=400"} position={"Secretary"} name={"Kaknika Thea"}/>
          </div>
          <div className="flex flex-wrap justify-center">
            <ProfileCard src={"https://media.discordapp.net/attachments/1163526744570081310/1163854988997574769/IMG_1619.jpg?ex=6541176c&is=652ea26c&hm=8e8367ebc5f4bad968bd2b82fc615a4aa2490a5ce7af5f2edcec71ef962cae3b&width=400&height=400"} position={"Head of Media"} name={"Sophianyth Wath"}/>
            <ProfileCard src={"https://media.discordapp.net/attachments/1163526744570081310/1163854989270208572/IMG_1620.jpg?ex=6541176c&is=652ea26c&hm=c8ad353636a23a125024b88da8a75606f89d1b9af03b70d82cf2fbf8aeaa883e&width=400&height=400"} position={"Head of Finance"} name={"Kannapech Yong"}/>
          </div>
        <p className="text-center text-2xl font-light italic mb-6">leaders of year 2021-2022</p>
          <div className="flex flex-wrap justify-center">
          <ProfileCard src={"https://media.discordapp.net/attachments/1163526744570081310/1163853311674437724/IMG_1611.jpg?ex=654115dc&is=652ea0dc&hm=9d90a1c7d73207ff129bcf44b273e96a275ad9a741678108581fc7ea2008f3ec&width=400&height=400"} position={"President"} name={"Sophianyth Wath"}/>
            <ProfileCard src={"https://media.discordapp.net/attachments/1163526744570081310/1163853311968034836/IMG_1612.jpg?ex=654115dc&is=652ea0dc&hm=47183dde0572f2d703b479f8b568e6b71781e0c239d386268f373e18b0e4be35&width=400&height=400"} position={"Vice President"} name={"Sac Neda Nop"}/>
            <ProfileCard src={"https://media.discordapp.net/attachments/1163526744570081310/1163853312391663676/IMG_1613.jpg?ex=654115dd&is=652ea0dd&hm=8a4de766eb2c318c90256e433d0547e8851b162c0e0bd0fa6c47901e02dedae6&width=400&height=400"} position={"Secretary"} name={"Angela Vireak"}/>
          </div>
          <div className="flex flex-wrap justify-center">
          <ProfileCard src={"https://media.discordapp.net/attachments/1163526744570081310/1163853312781729863/IMG_1614.jpg?ex=654115dd&is=652ea0dd&hm=1010fa350be4bfbf00ca36842e9a13cd1b9a71a034487461d92c1d77f0b1b708&width=400&height=400"} position={"Head of Finance"} name={"Kaknika Thea"}/>
            <ProfileCard src={"https://media.discordapp.net/attachments/1163526744570081310/1163853313155010561/IMG_1615.jpg?ex=654115dd&is=652ea0dd&hm=c8208ec6f95dc8e4c6de1016f5d03d161499340230809098c687f898ff6d6f7f&width=400&height=400"} position={"Gwangyeong Park"} name={"Gwangyeong Park"}/>
          </div>
          <p className="text-center text-2xl font-light italic mb-6">leaders of year 2020-2021</p>
          <div className="flex flex-wrap justify-center">
            <ProfileCard src={"https://media.discordapp.net/attachments/1163526744570081310/1163851696993218620/IMG_1605.jpg?ex=6541145b&is=652e9f5b&hm=79c2651a7d197cbc5886c1d449f42f97fef7483dbb79e39a4ace07073fa512f8&width=400&height=400"} position={"President"} name={"Yujin Park"}/>
            <ProfileCard src={"https://media.discordapp.net/attachments/1163526744570081310/1163851697253253172/IMG_1606.jpg?ex=6541145b&is=652e9f5b&hm=cf9891fbfbf5ec9935856f83f97213b217e5e1d0e43bc5fcd4f69f9b4d3ef1d8&width=400&height=400"} position={"Vice President"} name={"Rattanakun Sith"}/>
            <ProfileCard src={"https://media.discordapp.net/attachments/1163526744570081310/1163851697513304064/IMG_1607.jpg?ex=6541145c&is=652e9f5c&hm=156683bb377389db23fbacc8ba4e248baddafcd77bb95ae39feb7ab37e1176e4&width=400&height=400"} position={"Secretary"} name={"Sora Lee"}/>
          </div>
          <div className="flex flex-wrap justify-center">
            <ProfileCard src={"https://media.discordapp.net/attachments/1163526744570081310/1163851697764970526/IMG_1608.jpg?ex=6541145c&is=652e9f5c&hm=70dd5172b9b507f1a4b4f41dabb8631a738f5e800e2f6b28172038fabd0f98c3&width=400&height=400"} position={"Secretary"} name={"Chansineth Chey"}/>
            <ProfileCard src={"https://media.discordapp.net/attachments/1163526744570081310/1163851698016616529/IMG_1609.jpg?ex=6541145c&is=652e9f5c&hm=27044bde914c4c656f55ce40b34859e532c244286b2cbcea8acead0df53365a0&width=400&height=400"} position={"Head of Finance"} name={"Mony Visal Chhorn"}/>
            <ProfileCard src={"https://media.discordapp.net/attachments/1163526744570081310/1163851698213752933/IMG_1610.jpg?ex=6541145c&is=652e9f5c&hm=96ae045bd31905ad982d3a93986eeb0fc96c73409f8eb2830f6cb5bdd19d569f&width=400&height=400"} position={"Head of Media"} name={"Sok Eng Khav"}/>
          </div>
          <p className="text-center text-2xl font-light italic mb-6">leaders of year 2018-2019</p>
          <div className="flex flex-wrap justify-center">
            <ProfileCard src={"https://media.discordapp.net/attachments/1163526744570081310/1163844965273698314/IMG_1596.jpg?ex=65410e16&is=652e9916&hm=138494dea4c6942a3097e8df946ae2c5e01f1025ead30fb330ae82de261ae64c&width=400&height=400"} position={"President"} name={"Abbasse Nurtitinova"}/>
            <ProfileCard src={"https://media.discordapp.net/attachments/1163526744570081310/1163844965584085042/IMG_1597.jpg?ex=65410e16&is=652e9916&hm=6e25531bff97b11d2432db9e80a1eb1b3cb3c2efb7bcfbdc7c88f1d292398ada&width=400&height=400"} position={"Vice President"} name={"Rattanakun Sith"}/>
            <ProfileCard src={"https://media.discordapp.net/attachments/1163526744570081310/1163844964363534406/IMG_1593.jpg?ex=65410e16&is=652e9916&hm=334486ac30fdc5a49977ef47fbaf4f2ecd698d9e033f469faf6ef71c079cce76&width=400&height=400"} position={"Vice President"} name={"Lou Han Thanh"}/>
          </div>
          <div className="flex flex-wrap justify-center">
          <ProfileCard src={"https://media.discordapp.net/attachments/1163526744570081310/1163844964661338253/IMG_1594.jpg?ex=65410e16&is=652e9916&hm=6503700a8899823365a7aec38998d90179034e5715cc1742a2dd3bbdef7548a6&width=400&height=400"} position={"Head of Secretaries"} name={"Patriece Janiele R.Penaranda"}/>
            <ProfileCard src={"https://media.discordapp.net/attachments/1163526744570081310/1163844964980113538/IMG_1595.jpg?ex=65410e16&is=652e9916&hm=7c721e94d693bf60c258caf9fe8c47a2ee328a16604a2316ee71db89828353c8&width=400&height=400"} position={"Secretary"} name={"Antonette Gabrielle Villapana"}/>
            <ProfileCard src={"https://media.discordapp.net/attachments/1163526744570081310/1163844965881888868/IMG_1598.jpg?ex=65410e17&is=652e9917&hm=358435c73a16588500f3fb9497caa6e75decf4d97babe51a3085b1dc3328119a&width=400&height=400"} position={"Secretary"} name={"Visal Mony Chhorn"}/>
          </div>
          <div className="flex flex-wrap justify-center">
          <ProfileCard src={"https://media.discordapp.net/attachments/1163526744570081310/1163844966183862432/IMG_1599.jpg?ex=65410e17&is=652e9917&hm=be6cd5867c24c27d80e28c2d76a7263f72a5a6595bc749f7b3fc4097520302a2&width=400&height=400"} position={"Head of Finance"} name={"Sang Jae Lee"}/>
            <ProfileCard src={"https://media.discordapp.net/attachments/1163526744570081310/1163844966477471774/IMG_1600.jpg?ex=65410e17&is=652e9917&hm=eafb3f1e8b46888289a6abfc7a43d11d48fa20dfa2bb5c245f0f852b14911f2c&width=400&height=400"} position={"Treasurer"} name={"Alexandra Khechoyan"}/>
            <ProfileCard src={"https://media.discordapp.net/attachments/1163526744570081310/1163847531403419738/IMG_1602.jpg?ex=6541107a&is=652e9b7a&hm=7a06a49e59b152f59cd10985a1e264371796aa31ec6943171a183ae5abdb85d8&width=400&height=400"} position={"Assistant"} name={"Gerald Aaron Tarza"}/>
            <ProfileCard src={"https://media.discordapp.net/attachments/1163526744570081310/1163848117070860348/IMG_1603.jpg?ex=65411106&is=652e9c06&hm=9c385c26f777bcc550060ceaf9722b1028b17faa26dba25cc7a47d9b50183e66&width=400&height=400"} position={"Head of Media"} name={"Tang Mong Siriwadh"}/>
          </div>
      </div>
    )
}