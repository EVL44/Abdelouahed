import { motion} from 'framer-motion';

const Stairanimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["0%", "100%"],
    }
};

const reverseIndex = (index) => {
    const totalSteps = 6; 
    return totalSteps - index - 1;
}

function Stairs() {
  return (
    <>
        {[...Array(6)].map((_,index)=> {
            return <motion.div key={index} variants={Stairanimation} 
            initial="initial" animate="animate" exit="exit"
            transition={{duration: 0.4, ease: "easeInOut", delay: reverseIndex(index)*0.1}}
            className='w-full h-full bg-accent relative' />
        })}
    </>
  )
}

export default Stairs