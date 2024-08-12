import Image from "next/image";
import Header from "./components/Header";
import Experience from "./components/Experience";
import { DesktopNavigation } from "./components/Navigations";

export default function Home() {
   return(
    <>
     <Header />
      <main className="border-t border-zinc-200 dark:border-zinc-500 lg:relative lg:mb-28 lg:ml-112 lg:border-t-0 xl:ml-120">
        <div className="relative">
          <DesktopNavigation className="pointer-events-auto fixed z-50 top-6 right-4 hidden md:block" />
          <Experience />
        
        </div>
      </main>

     

    </>
   )

}