import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <section className="h-full bg-surface-foreground text-surface">
      <div className="container mx-auto h-full px-4">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="xl:w-1/2 text-center xl:text-left order-2 xl:order-none">
            <h1 className="text-lg font-bold ">Hello, I'm </h1>
            <h1 className="text-accent text-4xl xl:text-6xl font-extrabold mb-4 cursor-pointer hover:text-orange-500 transition-all duration-500">ABDELOUAHED <br /> ID-BOUBRIK</h1>
            <p className="text-lg xl:text-xl mb-8">
              Computer Engineering and Embedded Systems Student
            </p>
            <div className="flex flex-col xl:flex-row gap-8">
              <a target="_blank" href="https://drive.google.com/file/d/1uVCcKZR1RlH3Oz72QCuy4G2R07rC1-Wd/view?usp=sharing">
                <Button 
                  className="bg-accent text-surface-foreground font-bold rounded-full px-8 py-3 
                    hover:bg-accent hover:shadow-accent/50 hover:shadow-2xl 
                    transition-all duration-300 ease-in-out hover:scale-105 
                    focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 
                    active:scale-95 animate-fade-in-up"
                >
                  <FiDownload className="mr-2 animate-pulse "  />
                  DOWNLOAD CV
                </Button>
              </a>
              
              <div className="mb-8 xl:mb-0 ">
                <Social containerStyles="flex gap-6 justify-center items-center" 
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center 
                    text-accent text-base hover:bg-accent hover:text-surface-foreground
                    transition-all duration-500" />
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className="xl:visible xl:w-1/2 flex justify-center xl:justify-end cursor-pointer  mb-8 xl:mb-0 order-1 xl:order-none">
            <div className="relative group w-64 h-64 xl:w-96 xl:h-96 bg-accent rounded-full 
              flex items-center justify-center transition-all duration-500 hover:scale-105 hover:bg-orange-500
              animate-fade-in">
              <img 
                src="/Me-WOBG.png" 
                alt="PHOTO" 
                className="grayscale w-full h-full rounded-full object-cover 
                  transition-all duration-500 group-hover:grayscale-0 
                  group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
      <Stats/>
    </section>
  );
}
