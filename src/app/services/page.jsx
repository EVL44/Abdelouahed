"use client";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  { num: '01', title: 'Web Development', description:'Having a large experience in web development in the last two years make me call my self a web developer.', href: ''},
  { num: '02', title: 'IoT & Embedded Systems', description:'Based on what i study right now, my licence title is computer engineering and embedded systems that makes me capable of working in this field.', href: ''},
  { num: '03', title: "Cyber Security", description:"Based on what I've learn in school to get my degree (Networking & Cyber Security), I do not have mush experience at this field just the basics.",  href: ''},
  { num: '04', title: 'AI & ML', description:"Also based on what I've learn in school to get my degree and not going deep, I do not have mush experience at this field just the basics.",  href: ''},
  // { num: '05', title: 'UI design', description:"I was intrested in this field even before the others, from the childhood, I know to use many tool.",  href: ''},
]

function Services() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 bg-surface-foreground text-surface"> 
      <div className="container mx-auto">
        <motion.div 
          initial={{opacity: 0}} 
          animate={{
            opacity: 1, 
            transition:{delay: 0.4, duration: 0.4, ease: "easeIn"}
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return <div key={index} className="flex-1 flex flex-col justify-center gap-6 group"> 
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                  {service.num}
                </div>
                <Link href={service.href} 
                  className="w-[60px] h-[60px] rounded-full bg-accent group-hover:bg-orange-400 transition-all duration-500 flex justify-center items-center hover:-rotate-45"> 
                  <BsArrowDownRight className="text-stone-950 text-3xl" /> 
                </Link>
              </div>
              <h2 className="text-[42px] font-bold leading-none group-hover:text-accent  transition-all duration-500">{service.title }</h2>
              <p className="text-surface/60 ">{service.description}</p>
              <div className="border-b border-surface/20 w-full"></div>
            </div>
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services