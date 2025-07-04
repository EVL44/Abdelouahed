"use client";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";

const links = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Resume", path: "/resume" },
    // { name: "Work", path: "/work" },
    { name: "Contact", path: "/contact" },
];

function MobileNav() {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className="bg-accent flex flex-col items-center">
                <SheetHeader>
                    <SheetTitle className='text-stone-950'><Link href='/'> <h1 className='font-extrabold text-xl'>EVL44</h1></Link></SheetTitle>
                </SheetHeader>
                <div className="flex flex-col items-center justify-center  mt-10 text-center">
                    {links.map((link, index) => {
                        return <Link
                            key={index}
                            href={link.path}
                            className={`p-2 text-stone-950 capitalize hover:border-white hover:text-white hover:border-b-2 transition-all
                            ${ pathname === link.path && "font-bold border-b-2 border-stone-950"}`}>
                            {link.name}
                        </Link>
                    })}
                </div>  
            </SheetContent>
        </Sheet>
    );
}

export default MobileNav;
