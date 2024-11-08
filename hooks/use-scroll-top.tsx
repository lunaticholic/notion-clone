import { useEffect, useState } from "react";

export const useScrollTop = (threshold = 10) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        // Function to handle scroll event
        const handleScroll = () => {
            if (window.scrollY > threshold) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        // Add event listener for scroll event
        window.addEventListener("scroll", handleScroll);
        // Remove event listener when component unmounts
        return () => window.removeEventListener("scroll", handleScroll);
    }, [threshold]);

    return scrolled;
}