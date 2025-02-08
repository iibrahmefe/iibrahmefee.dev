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


import Learnhist from "../assets/Learnhist-Resim.png";
import LangingPage from "../assets/Landing-Page.png";
import NewSite from "../assets/News-Site.png";
import ProfilPage from "../assets/Profil-Page.png";
import Kutasdev from "../assets/kutas.dev.png";
import Youtube from "../assets/Youtube-wallpaper.png";
import TwitterWallpaper from "../assets/Twitter-wallpaper.png";
import Audiophile from "../assets/Audiophile.png";


export const CodingSkills = [
    {
        Name: 'Html',
        icon: <MdHtml className="text-7xl text-white/80" />,
    },
    {
        Name: 'Css',
        icon: <MdCss className="text-7xl text-white/80" />,
        link: ''
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
        icon: <SiMysql className="text-7xl text-white/80" />,
    },
]

const ProjectLists = [
    {
        name: "Learnhist",
        description: "LearnHist: Atatürk, Türk Tarihi, Tarih, Bilim, Felsefe, Mitoloji, Sanat, Evrim",
        link: "https://www.learnhist.com.tr/",
        image: Learnhist,
        tech: ["Html", "Css", "Bootstrap", "JavaScript", "PHP", "DriftChat"],
        status: "Tamamlandı"
    },
    {
        name: "Youtube React Clone",
        description: "Youtube web sitesi",
        image: Youtube,
        link: "https://youtube-react-clone-two.vercel.app/",
        tech: ["Html", "Css", "Tailwind", "React", " Reactİcons", "ReactRouterDom"],
        status: "Hazırlanıyor"
    },
    {
        name: "Twitter 'x' Clone",
        description: "Twitter web sitesinin kopyası",
        link: "https://x-clone-react-gold.vercel.app",
        image: TwitterWallpaper,
        tech: ["Html", "Css", "Tailwind", "React", "ReactMotion", "Reactİcons", "ReactRouterDom", "ClassNames"],
        status: "Hazırlanıyor"
    },
    {
        name: "Landing Page",
        description: "Frontend Mentor Challenge",
        link: "https://landing-page-rho-steel.vercel.app/",
        image: LangingPage,
        tech: ["Html", "Css", "JavaScript"],
        status: "Tamamlandı"
    },
    {
        name: "News Web Site",
        description: "Frontend Mentor Challenge",
        link: "https://frontend-exercises-news-site.vercel.app/",
        image: NewSite,
        tech: ["Html", "Css", "JavaScript"],
        status: "Tamamlandı"
    },
    {
        name: "Profile Page",
        description: "Frontend Mentor Challenge",
        link: "https://profil-page.vercel.app/",
        image: ProfilPage,
        tech: ["Html", "Css"],
        status: "Tamamlandı"
    },
    {
        name: "Kutas.dev",
        description: "Kişisel Portfolyo, Şuan bu projedesiniz",
        image: Kutasdev,
        tech: ["Html", "Css", "Tailwind", "React", "ReactMotion", "Reactİcons"],
    },
    {
        name: "Audiophile",
        description: "Figma Uygulaması",
        link: "https://audiophile-eight-orpin.vercel.app",
        image: Audiophile,
        tech: ["Html", "Css", "Tailwind", "React", "ReactMotion", "Reactİcons", "ReactRouterDom"],
    }
];


const techColors = {
    Html: "bg-orange-500",
    Css: "bg-blue-600",
    Bootstrap: "bg-purple-600",
    JavaScript: "bg-yellow-500",
    PHP: "bg-indigo-600",
    DriftChat: "bg-blue-600",
    Tailwind: "bg-blue-700",
    React: "bg-blue-400",
    ReactMotion: "bg-purple-600",
    Reactİcons: "bg-red-600",
    ReactRouterDom: "bg-red-500"
};

const statusColors = {
    Hazırlanıyor: "bg-green-500",
    Tamamlandı: "bg-blue-500",
};

export { ProjectLists, techColors, statusColors };