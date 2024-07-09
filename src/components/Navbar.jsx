import { CiInstagram } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa6";
import { LuGithub } from "react-icons/lu";
import { FaYoutube } from "react-icons/fa";



const Navbar = () => {
    return (
        <nav className=" mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                {/* <img src="" alt="iek-foto" /> */}
                <h1 className="text-3xl font-semibold text-white">kutas.dev</h1>
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-4xl">
                <a href="https://www.instagram.com/iibrahmefe/" target="_blank">
                    <CiInstagram className="cursor-pointer hover:text-white/40 transition-all" />
                </a>
                <a href="https://www.linkedin.com/in/ibrahim-efe-kutas-101474279/">
                    <FaLinkedin className="cursor-pointer hover:text-white/40 transition-all" />
                </a>
                <a href="https://github.com/iibrahmefe">
                    <LuGithub className="cursor-pointer hover:text-white/40 transition-all" />
                </a>
                <a href="https://www.youtube.com/channel/UCjKwD9eDeUBPga8dRY6VQWw">
                    <FaYoutube className="cursor-pointer hover:text-white/40 transition-all"  />
                </a>
            </div>
        </nav>
    )
}

export default Navbar