"use client";
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaLaravel, FaPhp, FaJava, FaPython } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiExpress, SiAdobephotoshop, SiBootstrap, SiMongodb, SiMysql, SiOracle  } from 'react-icons/si';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';


const about = {
  title: "About me",
  description: "I'm a Computer Engineering and Embedded Systems Student, from Agadir,Morocco.",
  info: [
    { fieldName: "Name", fieldValue: "ID-BOUBRIK Abdelouahed" },
    { fieldName: "Phone", fieldValue: "(+212) 767 251 378" },
    { fieldName: "Email", fieldValue: "abdeloauhedidboubrik@gmail.com" },
    { fieldName: "Experience", fieldValue: "+2 Years" },
    { fieldName: "Nationality", fieldValue: "Moroccan" },
    { fieldName: "Languages", fieldValue: "English, French, Arabic" },
    
  ]
};

const experience = {
  title: "My experiences",
  description: "I' have an acceptable experience in computer engineering, not much because I'm still a student.",
  items: [
    { company: "Vala Orange", position: "Full Stack Developer, Intern", duration: " April - June 2024" },
    { company: "SEI Group", position: "Front End Developer, Intern", duration: "July - August 2023" },
  ]
};

const education = {
  title: "My education",
  description: "I've a long story with education, to be what I am, i walked through a path that wasnt eazy i've done alot of thing some was bad some was good but both made me stronger.",
  items: [
    { institution: "Faculty of Science, Agadir", degree: "Computer Engineering and Embedded Systems", duration: "2024 - Present" },
    { institution: "Higher school of technology, Agadir", degree: "Computer Science", duration: " 2022 - 2024" },
    { institution: "Ennaser High School, Boujdour", degree: "Physics Science", duration: "2019 - 2022" },
  ]
}

const skills = {
  title: "My Skills",
  description: "Through my carrier ( that Not started yet ) i have learn alot of skills that helps me alot to do alot of things.",
  skillList: [
    { name: "Java", icon: <FaJava /> },
    { name: "Python", icon: <FaPython /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3 /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Bootstrap", icon: <SiBootstrap /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "Node js", icon: <FaNodeJs /> },
    { name: "React js", icon: <FaReact /> },
    { name: "Next js", icon: <SiNextdotjs /> },
    { name: "Express js", icon: <SiExpress /> },
    { name: "PHP", icon: <FaPhp /> },
    { name: "Laravel", icon: <FaLaravel /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "Oracle DB", icon: <SiOracle /> },
    { name: "Figma", icon: <FaFigma /> },
    { name: "Photoshop", icon: <SiAdobephotoshop /> },
    
  ]
}

function Resume() {
  return (
    <motion.div 
      initial={{opacity:0}} 
      animate={{opacity:1, transition:{delay:1, duration:0.4, ease:'easeIn'}}}
      className='min-h-[80vh] flex items-center justify-center py-12 xl:py-8'
    >
      <div className="container mx-auto">
        <Tabs defaultValue='education' className='flex flex-col xl:flex-row gap-[60px] '>
          <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
            <TabsTrigger value='education'>Education</TabsTrigger>
            <TabsTrigger value='experience'>Experience</TabsTrigger>
            <TabsTrigger value='skills'>Skills</TabsTrigger>
            <TabsTrigger value='about'>About Me</TabsTrigger>
          </TabsList>
          <div className='min-h-[70vh] w-full'>
            
            <TabsContent value='education' className="w-full">
              <div className='flex flex-col gap-[30px] text-center xl:text-left '>
                <h3 className='text-4xl font-bold text-accent'>{education.title}</h3>
                <p className='max-w-[600px] text-surface/60 mx-auto xl:mx-0'>{education.description}</p>
                <ScrollArea className="h-[400px]" >
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {education.items.map((item, index) => {
                      return(
                        <li key={index} className='bg-subtle-background h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.degree}</h3>
                          <div className='flex items-center gap-3'>
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <p className='text-surface/60'>{item.institution}</p>
                          </div>
                        </li>
                      ); 
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value='experience' className="w-full">
             <div className='flex flex-col gap-[30px] text-center xl:text-left '>
                <h3 className='text-4xl font-bold text-accent'>{experience.title}</h3>
                <p className='max-w-[600px] text-surface/60 mx-auto xl:mx-0'>{experience.description}</p>
                <ScrollArea className="h-[400px]" >
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {experience.items.map((item, index) => {
                      return(
                        <li key={index} className='bg-subtle-background h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                          <div className='flex items-center gap-3'>
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <p className='text-surface/60'>{item.company}</p>
                          </div>
                        </li>
                      ); 
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value='skills' className="w-full h-full">
              <div className="flex flex-col">
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold text-accent'>{skills.title}</h3>
                  <p className='max-w-[600px] text-surface/60 mx-auto xl:mx-0'>{skills.description}</p>
                </div>
                <ScrollArea className="h-[400px]" >

                  <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap[30px] gap-4'>
                    {skills.skillList.map((skill, index) => {
                      return(
                        <li key={index} >
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className='w-full h-[150px] bg-subtle-background rounded-xl flex justify-center items-center group'>
                                <div className='text-6xl group-hover:text-accent transition-all duration-500'>{skill.icon}</div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value='about' className="w-full text-center xl:text-left">
              <div className='flex flex-col gap-[30px]'>
                <h3 className='text-4xl font-bold text-accent'>{about.title}</h3>
                <p className='max-w-[600px] text-surface/60 mx-auto xl:mx-0'>{about.description}</p>

                <ScrollArea className="h-[400px]" >
                  <ul className='grid grid-cols-1 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                    {about.info.map((item, index) => {
                      if( item.fieldName !== 'Email'){
                        return(
                          <li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
                            <span className='text-surface/60'>{item.fieldName}</span>
                            <span className='text-xl'>{item.fieldValue}</span>
                          </li>
                        );
                      } else {
                        return(
                          <li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
                            <TooltipProvider delayDuration={100}>
                              <Tooltip>
                                <TooltipTrigger className='flex gap-4'>
                                  <span className='text-surface/60'>{item.fieldName}</span>
                                  <span className='text-xl'>{item.fieldValue}</span>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>abdeloauhedidboubrik@gmail.com</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </li>
                        );
                      }
                      
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume;