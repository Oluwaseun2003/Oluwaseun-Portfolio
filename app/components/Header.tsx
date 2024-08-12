import Image from "next/image";
import Link from "next/link";
import { 
    GitHubIcon,
    LinkedInIcon,
    SocialLink,
    XIcon       
 } from "./Socials";
 import { Button } from "./Button";
 import { MobileNavigation } from "./Navigations";
 import { ThemeToggle } from "./ThemeToggle";

 function ArrowDownIcon(props: React.ComponentPropsWithoutRef<"svg">) {
    return (
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    );
 }

 
 export default function Header() {
    return (
        <header className="lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:w-122 lg:items-start lg:overflow-y-auto xl:w-120">
            <div className="hidden lg:sticky gap-6 lg:top-0 lg:flex lg:w-16 lg:flex-none lg:items-center lg:whitespace-nowrap lg:py-12 lg:text-sm lg:leading-7 lg:[writing-mode:vertical-rl]">
                <div className="pointer-events-auto">
                    <ThemeToggle/>
                </div>
                <p className="text-sm text-teal-400 dark:text-teal-500">
                    &copy; {new Date().getFullYear()} Oluwaseun Oluwafemi. All rights reserved.
                </p>
            </div>
            <div className="pointer-events-auto z-50 fixed top-4 left-2 md:hidden">
                <ThemeToggle/>
            </div>

            <MobileNavigation className="pointer-events-auto z-50 top-4 right-2 fixed md:hidden" />

            <div className="relative z-10 mx-auto px-4 pb-4 pt-10 sm:px-6 md:max-w-2xl md:px-4 lg:min-h-full lg:flex-auto lg:border-x lg:border-teal-200 lg:dark:border-teal-500 lg:px-8 lg:py-12 xl:px-12">
                <Link 
                href="/"
                className="border-teal-700 mx-auto block w-48 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-500 shadow-xl sm:w-64 sm:rounded-full lg:w-auto lg:rounded-full"
                aria-label="Homepage"
                >
                    <Image 
                    className="w-full border-4 rounded-full border-teal-700"
                    src={"/profileimg.jpg"}
                    alt=""
                    width={250}
                    height={250}
                    sizes="(min-width: 1024px) 18rem, (min-width: 640px) 14rem, 10rem"
                    priority
                    >

                    </Image>

                </Link>

                <div className="mt-10 text-center lg:mt-12 lg:text-left">
                    <h1 className="text-3xl text-center font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                        Oluwaseun Oluwafemi
                    </h1>

                        <p className="mt-6 text-base text-center text-zinc-600 dark:text-zinc-400">
                            I&apos;m a Software Engineer from Nigeria. I specialize in
                            building exceptional websites and applications.
                        </p>
                </div>

                <Button target="blank" href="https://docs.google.com/document/d/1CDFK3HOiCSl5kq1AJsOcxFXLOvHXLammY5LQe1Q1vO0/edit?usp=sharing"
                download
                variant="solid"
                className="group mt-6 w-full">
                    Download Resume
                    <ArrowDownIcon className="h-4 w-4 stroke-teal-100 transition group-active:stroke-teal-600 dark:group-hover:stroke-teal-50 dark:group-active:stroke-teal-50"/>

                </Button>

                <div className="mt-6 flex items-center justify-center gap-6">
                    <SocialLink 
                    href="https://x.com/Oluwaseun1511"
                    aria-label="Follow on X"
                    icon={XIcon}
                    />
                    <SocialLink
                    href="https://github.com/Oluwaseun2003"
                    aria-label="Follow on GitHub"
                    icon={GitHubIcon}
                     />
                    <SocialLink
                    href="https://www.linkedin.com/in/oluwaseunoluwafemi"
                    aria-label="Follow on LinkedIn"
                    icon={LinkedInIcon}
                     />

                </div>
            </div>
        </header>
    )
}