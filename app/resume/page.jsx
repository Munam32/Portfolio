"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaPython,
  FaAngular,
  FaBootstrap,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

// about data
const about = {
  title: "About me",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Abdul Munam",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+92) 311 654 976 9",
    },
    {
      fieldName: "Experience",
      fieldValue: "12+ Years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Pakistani",
    },
    {
      fieldName: "Email",
      fieldValue: "abdulmunam891@gmail.com",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "Crafting responsive, scalable web solutions with React, Node.js, Python, and more — powered by passion, driven by precision.",
  items: [
    {
      company: "Freelance",
      position: "Full Stack Developer ",
      duration: "2023 - Present",
    },
    {
      company: "Freelance",
      position: "Fullstack Engineer",
      duration: "2021-2023",
    },
    {
      company: "Freelance",
      position: "Logo Designer",
      duration: "2021 - 2023",
    },
    {
      company: "Freelance",
      position: "UI/UX Designer",
      duration: "2021 - 2023",
    },
    {
      company: "Freelance",
      position: "Junior Developer",
      duration: "2017 - 2018",
    },
  ],
};

// education data
const education = {
  icon: "/public/assets/resume/cap.svg",
  title: "My Education",
  description:
    "Computer Science student with a proven track record in building smart, scalable, and AI-enhanced web platforms.",
  items: [
    {
      institution:
        "National University of Computer and Emerging Sciences (FAST-NUCES)",
      degree: "Bachelors in computer Science",
      duration: "2023 - 2027",
    },
    {
      institution: "The City School",
      degree: "A Levels",
      duration: "2021 - 2023",
    },
    {
      institution: "The City School",
      degree: "O Levels",
      duration: "2019 - 2021",
    },
  ],
};

// skills data
const skills = {
  title: "My Skills",
  description:
    "Crafting responsive, scalable web solutions with React, Node.js, Python, and more — powered by passion, driven by precision.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
    {
      icon: <FaPython />,
      name: "python3",
    },
    {
      icon: <FaAngular />,
      name: "angular",
    },
    {
      icon: <FaBootstrap />,
      name: "bootstrap5",
    },
  ],
};

const Resume = () => {
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
        {/*  */}
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}

                            <span className="relative flex size-3">
                              {/* <span className="w-[6px] h-[6px] rounded-full bg-accent"></span> */}
                              <span className="absolute inline-flex h-[8px] w-[8px] animate-ping rounded-full bg-accent opacity-75"></span>

                              <span className="relative inline-flex h-[8px] w-[8px] rounded-full bg-accent"></span>
                            </span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                  <ScrollBar orientation="vertical" />
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="relative flex size-3">
                              {/* <span className="w-[6px] h-[6px] rounded-full bg-accent"></span> */}
                              <span className="absolute inline-flex h-[8px] w-[8px] animate-ping rounded-full bg-accent opacity-75"></span>

                              <span className="relative inline-flex h-[8px] w-[8px] rounded-full bg-accent"></span>
                            </span>

                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                  <ScrollBar orientation="vertical" />
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300 cursor-pointer">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* About me */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-start xl:justify-start gap-4"
                      >
                        <span className="text-white/60 flex">
                          {item.fieldName}
                        </span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
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
export default Resume;
