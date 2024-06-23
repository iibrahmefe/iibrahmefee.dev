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

const Skills = () => {
  return (
    <div className="border-b border-neutral-900 pb-24 ">
        <h2 className="text-center text-4xl my-20">Yeteneklerim</h2>
        <div className="flex flex-wrap items-center justify-center gap-4 mt-10 max-w-screen-xl mx-auto">
            <div className="rounded-2xl border-4 border-neutral-500 p-6 hover:scale-110 transition-all cursor-pointer">
            <MdHtml className="text-7xl text-white/80" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-500 p-6 hover:scale-110 transition-all cursor-pointer">
            <MdCss className="text-7xl text-white/80" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-500 p-6 hover:scale-110 transition-all cursor-pointer">
            <FaBootstrap className="text-7xl text-white/80" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-500 p-6 hover:scale-110 transition-all cursor-pointer">
            <BsFiletypeScss className="text-7xl text-white/80" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-500 p-6 hover:scale-110 transition-all cursor-pointer">
            <SiJavascript  className="text-7xl text-white/80"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-500 p-6 hover:scale-110 transition-all cursor-pointer">
            <IoLogoReact  className="text-7xl text-white/80"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-500 p-6 hover:scale-110 transition-all cursor-pointer">
            <DiPhp  className="text-7xl text-white/80"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-500 p-6 hover:scale-110 transition-all cursor-pointer">
            <SiMysql  className="text-7xl text-white/80"/>
            </div>
        </div>
    </div>
  )
}

export default Skills