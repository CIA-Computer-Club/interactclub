import Navbar from "@/components/Navbar";
import { Providers } from "@/components/Providers";
import "./globals.css";
import { EB_Garamond } from "next/font/google";

const eb_garamond = EB_Garamond({ subsets: ["latin"] });

export const metadata = {
  title: "Interact Club",
  description: "Interact Club for Everyone",
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
        className={` ${eb_garamond.className} bg-[#fffcf9] text-black dark:bg-[#121212] dark:selection:bg-[#334eac] dark:text-white h-full selection:bg-[#d0e3ff]`}
      >
        <Providers>
          <Navbar />
          <main className="mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
