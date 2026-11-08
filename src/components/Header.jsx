// src/components/Header.jsx
import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import Nav from './Nav';
import MobileNav from './MobileNav';
import ThemeToggle from './ThemeToggle'; // Import the new component

function Header() {
  return (
    <header className='py-8 xl:py-12 bg-surface-foreground text-surface'>
      <div className='container mx-auto flex items-center justify-between'>
        <Link target='_blank' href='/'> <h1 className='font-extrabold text-xl group'>EVL<span className='text-accent group-hover:text-destructive transition-all duration-500'>44</span></h1> </Link>

        {/* PC */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav/>
          <Link href='/contact'>
            <Button
              className="text-surface-foreground font-bold rounded-full shadow-xl transition-all duration-500 ease-in-out border-accent
              bg-accent border-2 hover:bg-transparent hover:border-accent hover:shadow-accent/50 hover:shadow-2xl hover:text-accent
              hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 active:scale-95"
            >
              Hire Me
            </Button>
          </Link>
          <ThemeToggle />
        </div>

        {/* Telephone */}
        <div className="xl:hidden flex items-center gap-4">
          <ThemeToggle /> {/* Also add it for mobile view */}
          <MobileNav/>
        </div>

      </div>
    </header>
  )
}

export default Header;
