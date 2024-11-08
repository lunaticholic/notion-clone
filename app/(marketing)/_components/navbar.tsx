"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";


export const Navbar = () => {
    // Check if the user has scrolled
    const scrolled = useScrollTop();

    // Return the Navbar component
    return (
        <div className={cn("z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6 transition-all", scrolled ? "shadow-sm" : "bg-transparent")}>
            <Logo />
            <div className="md:ml-auto justify-between md:justify-end w-full flex items-center gap-x-2">
                <ModeToggle />
            </div>
        </div>
    )
}