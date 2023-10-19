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
          </div>

          <div className ="flex justify-between items-center">
            
            <Link href="/doing"><p className="text-xl font-bold italic drop-shadow-lg">what we do</p></Link>
            <span className="mx-4 mb-6 text-5xl">.</span>
            <Link href="/about"><p className="mr-4 text-xl font-bold italic drop-shadow-lg">about us</p></Link>
          <Link href="/horror">
          <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
          />
        </svg>
          </Link>
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