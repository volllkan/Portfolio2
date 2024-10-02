"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

const about = {
  title: "Hakkımda",
  description: "Tanımıyorum",
  info: [
    {
      fieldName: "Telefon",
      fieldValue: "(+90) 546 681 4550",
    },
    {
      fieldName: "Tecrübe",
      fieldValue: "2 Yıl",
    },
    {
      fieldName: "Discord  ",
      fieldValue: " volllkan.1",
    },
    {
      fieldName: "Ülke",
      fieldValue: "Türkiye",
    },
    {
      fieldName: "Email",
      fieldValue: "volllkan.1@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Dil",
      fieldValue: "İngilizce, Türkçe",
    },
  ],
};

const experience = {
  icon: "/",
  title: "Tecrübem",
  description: " asdasdasd",

  items: [
    {
      company: "Bilitro",
      position: "Full Stack",
      duration: "2024 ",
    },
    {
      company: "Bilitro",
      position: "Full Stack",
      duration: "2024 ",
    },
    {
      company: "Bilitro",
      position: "Full Stack",
      duration: "2024 ",
    },
    {
      company: "Bilitro",
      position: "Full Stack",
      duration: "2024 ",
    },
    {
      company: "Bilitro",
      position: "Full Stack",
      duration: "2024 ",
    },
    {
      company: "Bilitro",
      position: "Full Stack",
      duration: "2024 ",
    },
  ],
};

const education = {
  icon: "/",
  title: "Eğitimim",
  description: " asdasdasd",

  items: [
    {
      institution: "Online Üniversite",
      degree: "Full Stack",
      duration: "2024 ",
    },
    {
      company: "Udemy Kurs",
      position: "Programlama kursu",
      duration: "2022 ",
    },
    {
      institution: "Online Üniversite",
      degree: "Full Stack",
      duration: "2024 ",
    },
    {
      company: "Udemy Kurs",
      position: "Programlama kursu",
      duration: "2022 ",
    },
  ],
};

const skills = {
  title: "Yeteneklerim",
  description: " Yapıyorum çoğu şeyi",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <SiTailwindcss />,
      name: "TailwindCSS",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Tecrübe</TabsTrigger>
            <TabsTrigger value="education">Eğitim</TabsTrigger>
            <TabsTrigger value="skills">Yetenekler</TabsTrigger>
            <TabsTrigger value="about">Hakkımda</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] full">
            {/* Tecrünem */}
            <TabsContent value="experience" className="w-full ">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea>
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <>
                          <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col  justify-center items-center lg:items-start gap-1 ">
                            <span className="text-accent">{item.duration}</span>
                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                              {item.position}
                            </h3>
                            <div className="flex items-center gap-3">
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-white/80">{item.company}</p>
                            </div>
                          </li>
                        </>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>


            {/* Eğitim */}
            <TabsContent value="education" className="w-full ">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea>
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <>
                          <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col  justify-center items-center lg:items-start gap-1 ">
                            <span className="text-accent">{item.duration}</span>
                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                              {item.degree}
                            </h3>
                            <div className="flex items-center gap-3">
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-white/80">{item.institution}</p>
                            </div>
                          </li>
                        </>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>



            {/* yetenekler */}
            <TabsContent value="skills" className="w-full h-full ">
            <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
              </div>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4"> 
                {skills.skillList.map((skill, index) => {
                  return <li key={index}> 
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                          <div className="text-6xl group-hover:text-accent transition-all duration-300"> 
                            {skill.icon} 
                            </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="capitalize">{skill.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </li>
                })}
              </ul>
            </div>
            </TabsContent>



            {/* Hakkımda */}
            <TabsContent value="about" className="w-full  text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index)=> {
                    return <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};
export default resume;
