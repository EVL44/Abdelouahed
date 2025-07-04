"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

function PageTransition({children}) {
    const pathname = usePathname();
    return (
        <AnimatePresence>
            <div key={pathname}>
                <motion.div 
                initial={{opacity: 1}} 
                animate={{opacity:0, transition: {delay: 0.1, duration: 0.1, ease: "easeInOut"}}}
                className="w-screen h-screen fixed bg-stone-950 top-0 pointer-events-none"/>
                {children}
            </div>
        </AnimatePresence>     
    );
}

export default PageTransition