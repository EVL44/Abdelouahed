"use client";
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Stairs from './Stairs';

function StairTransition() {
  const pathname = usePathname();
  return (
    <>
      <div key={pathname}>
        <div className=' h-screen w-screen fixed top-0 left-0 right-0 z-40 flex pointer-events-none '> 
          <Stairs/>   
        </div>
      </div>
    </>
  );
}

export default StairTransition;