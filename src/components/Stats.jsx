"use client";
import CountUp from "react-countup";
// node, next, react, express, HTML, CSS, Javascript, Tailwind, Bootstrap,
// MongoDB, MySQL, Oracle, PHP, Laravel,
// C/C++, java, javafx python, Figma, Photoshop, 
const stats = [
    {num: 2, text: "Years of experience"},
    {num: 7, text: "Projects"},
    {num: 19, text: "Technologies learned"},
    {num: 70, text: "Total commits"},
]

function Stats() {
  return (
    <section className="text-surface bg-surface-foreground pt-4 pb-12  xl:pt-0 xl:pb-0">
        <div className="container mx-auto">
            <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                {stats.map((stat, index) => {
                    return <div className="flex-1 flex gap-4 items-center justify-center xl:justify-start " key={index}>
                        <CountUp 
                            end={stat.num} duration={5}
                            delay={2} className="text-4xl xl:text-6xl font-extrabold"
                        />
                        <p className={`${stat.text.length < 15 ? "max-w-[100px]": "max-w-[100px]"} leading-snug text-surface/80`}>{stat.text}</p>
                    </div>
                })}
            </div>
        </div>
    </section>
  )
}

export default Stats