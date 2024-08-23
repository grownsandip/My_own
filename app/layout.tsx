import {Inter} from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";
import ActiveSectionProvider from "@/context/active_section";
import {Toaster} from "react-hot-toast";
import Footer from "@/components/Footer";
import ThemeSwitch from "@/components/theme-switch";
import {ThemeContextProvider} from "@/context/theme-context";

export const metadata={
  title:'My portfolio',
  description:'Next portfolio'
}
const inter=Inter({subsets:["latin"]});

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;})
  {
  return (
    <html lang="en" className="!scroll-smooth">
      <head><meta name="viewport" content="width=device-width, initial-scale=1.0"></meta></head>
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative  pt-38 sm:pt-36 dark:text-gray-50 dark:bg-gray-900 dark:text-opacity-90 sm:overflow-x-hidden`}>
        <div className="absolute bg-[#fbe2e3] top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263] "></div>
        <div className="absolute bg-[#dbd7fb] top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] sm:left-[-33rem] -z-10 lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
        <ThemeContextProvider>
        <ActiveSectionProvider>
        <Header/>
        {children}
        <Toaster position="top-right"/>
        <Footer/>
        <ThemeSwitch/>
        </ActiveSectionProvider>
        </ThemeContextProvider>
        </body>
    </html>
  );
}
