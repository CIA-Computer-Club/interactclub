import Navbar from "@/components/Navbar";
import "./globals.css";
import { EB_Garamond } from "next/font/google";
import siteMetadata from "@/data/siteMetadata";

const eb_garamond = EB_Garamond({ subsets: ["latin"] });

export const metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
};

export const revalidate = 60

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={` ${eb_garamond.className} bg-[#fffcf9] text-[#081f3c] dark:bg-[#121212] dark:selection:bg-[#334eac] dark:text-white h-full selection:bg-[#d0e3ff]`}
      >
        <Navbar />
          <main className="mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </main>
      </body>
    </html>

  );
}