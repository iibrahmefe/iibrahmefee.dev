// icon imports
import { MdHtml } from "react-icons/md";
import { MdCss } from "react-icons/md";
import { FaBootstrap } from "react-icons/fa";
import { BsFiletypeScss } from "react-icons/bs";
import { SiJavascript } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import { DiPhp } from "react-icons/di";
import { SiMysql } from "react-icons/si";



// icon imports

const CodingSkills = [
    {
        Name: 'Html',
        icon: <MdHtml className="text-7xl text-white/80" />,
    },
    {
        Name: 'Css',
        icon: <MdCss className="text-7xl text-white/80" />,
    },
    {
        Name: 'Bootstrap',
        icon: <FaBootstrap className="text-7xl text-white/80" />,
    },
    {
        Name: 'Scss',
        icon: <BsFiletypeScss className="text-7xl text-white/80" />,
    },
    {
        Name: 'JavaScrip<t',
        icon: <SiJavascript className="text-7xl text-white/80" />,
    },
    {
        Name: 'React',
        icon: <IoLogoReact className="text-7xl text-white/80" />,
    },
    {
        Name: 'Php',
        icon: <DiPhp className="text-7xl text-white/80" />,
    },
    {
        Name: 'SQl',
        icon: <SiMysql  className="text-7xl text-white/80"/>,
    },
]

const Skills = () => {
  return (
    <div className="border-b border-neutral-900 pb-24 ">
      <h2 className="text-center text-4xl my-20 font-bold">Yeteneklerim</h2>
      <div className="flex flex-wrap items-center justify-center gap-4 mt-10 max-w-screen-xl mx-auto">
      {CodingSkills.map((skill, index) => (
          <div className="rounded-2xl border-4 border-neutral-500 p-6 hover:scale-110 transition-all cursor-pointer" key={index}>
            {skill.icon}
          </div>
        ))}


      </div>
    </div>
  )
}

export default Skills