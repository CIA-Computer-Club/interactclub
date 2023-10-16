import Link from "next/link";
import Themebutton from "./ThemeButton";
import SocialIcon from '@/components/social-icons';
import siteMetadata from '@/data/siteMetadata'

export default function Navbar() {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        <div className="flex justify-between items-center w-full">
          <div className="mb-3 flex space-x-4">
            <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
            <SocialIcon kind="instagram" href={siteMetadata.instagram} size={6} />
          </div>

          <div className ="flex">
            <Link href="/whatwedo"><p className="mr-4 text-xl font-bold italic">what we do</p></Link>
            <Link href="/about"><p className="mr-4 text-xl font-bold italic">about us</p></Link>
            <Themebutton />
          </div>
        </div>
      </div>
    </div>
  );
}
