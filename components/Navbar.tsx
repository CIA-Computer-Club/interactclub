import Link from "@/components/Link";

import SocialIcon from '@/components/social-icons';
import siteMetadata from '@/data/siteMetadata'

export default function Navbar() {
  return (
    <div className="bg-[#f7f2eb] border-2 border-b-[#7096d1] border-t-[#f7f2eb] border-x-[#f7f2eb] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        <div className="flex justify-between items-center w-full">
          <div className="flex">
            <SocialIcon kind="instagram" href={siteMetadata.instagram} size={6} target="_blank"/>
            <div className="ml-6 scale-125">
              <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} target="_blank"/>
            </div>
            <div className="ml-6 scale-125">
              <SocialIcon kind="home" href={`/`} size={6} target={""}/>
            </div>
          </div>

          <div className ="flex justify-between items-center">
            
            <Link className="text-xl font-bold italic drop-shadow-lg" href="/doing">what we do</Link>
            <Link className="mx-4 mb-7 text-5xl" href="https://github.com/CIA-Computer-Club/interactclub" target="_blank">
              <span className="">.</span>
            </Link>
            <Link className="mr-4 text-xl font-bold italic drop-shadow-lg" href="/about">about us</Link>
          </div>
        </div>
      </div>
    </div>
  );
}