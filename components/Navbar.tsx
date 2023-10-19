import Link from "next/link";
import SocialIcon from '@/components/social-icons';
import siteMetadata from '@/data/siteMetadata'

export default function Navbar() {
  return (
    <div className="bg-[#f7f2eb] border-2 border-b-[#7096d1] border-t-[#f7f2eb] border-x-[#f7f2eb] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        <div className="flex justify-between items-center w-full">
          <div className="flex">
            <SocialIcon kind="instagram" href={siteMetadata.instagram} size={6} />
            <div className="ml-6 scale-125"><SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} /></div>
            <div className="ml-6 scale-100"><SocialIcon kind="home" href={`/`} size={6} /></div>

          </div>

          <div className ="flex justify-between items-center">
            
            <Link href="/doing"><p className="text-xl font-bold italic drop-shadow-lg">what we do</p></Link>
            <span className="mx-4 mb-6 text-5xl">.</span>
            <Link href="/about"><p className="mr-4 text-xl font-bold italic drop-shadow-lg">about us</p></Link>
          </div>
        </div>
      </div>
      <div className="absolute right-40 z-10 w-36 origin-top-right bg-[#7096d1] opacity-0">
    <div className="py-1" role="none">
      <a href="/doing/fundraising" className="block pt-1 font-thin text-lg text-white text-center underline">raising funds</a>
      <a href="/doing/helping" className="block pb-2 font-thin text-lg text-white text-center underline">how we help</a>
    </div>
  </div>
    </div>
  );
}