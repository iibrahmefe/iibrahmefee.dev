import { motion } from 'framer-motion';

import Learnhist from "../assets/Learnhist-Resim.png";
import LangingPage from "../assets/Landing-Page.png";
import NewSite from "../assets/News-Site.png";
import ProfilPage from "../assets/Profil-Page.png";
import Kutasdev from "../assets/kutas.dev.png";

const ProjectLists = [
    {
        name: "Learnhist",
        description: "LearnHist: Atatürk, Türk Tarihi, Tarih, Bilim, Felsefe, Mitoloji, Sanat, Evrim",
        link: "https://www.learnhist.com.tr/",
        image: Learnhist,
        tech: ["Html", "Css", "Bootstrap", "JavaScript", "PHP", "DriftChat"]
    },
    {
        name: "Landing Page",
        description: "Frontend Mentor Challenge",
        link: "https://landing-page-rho-steel.vercel.app/",
        image: LangingPage,
        tech: ["Html", "Css", "JavaScript"]
    },
    {
        name: "News Web Site",
        description: "Frontend Mentor Challenge",
        link: "https://frontend-exercises-news-site.vercel.app/",
        image: NewSite,
        tech: ["Html", "Css", "JavaScript"]
    },
    {
        name: "Profile Page",
        description: "Frontend Mentor Challenge",
        link: "https://profil-page.vercel.app/",
        image: ProfilPage,
        tech: ["Html", "Css"]
    },

    {
        name: "Kutas.dev",
        description: "Kişisel Portfolyo, Şuan bu projedesiniz",
        link: "https://ibrahmefe-dev.vercel.app/",
        image: Kutasdev,
        tech: ["Html", "Css", "Tailwind", "React", "ReactMotion", "Reactİcons"]
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
    Reactİcons: "bg-red-600"
};

const Projects = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -100 }} // Başlangıç durumu (sayfanın dışında yukarıda)
            animate={{ opacity: 1, y: 0 }}    // Animasyon son durumu (sayfa ortasında)
            transition={{ duration: 1.5, ease: 'easeOut' }} // Geçiş süresi ve animasyon eğrisi/ Geçiş süresi
            whileInView={{ opacity: 1, y: 0 }} // Sayfa içinde göründüğü sürece animasyon
            className=" border-b border-neutral-700 pb-4 "
        >
            <h2 className="text-center my-20 text-4xl font-bold">Projeler</h2>
            {ProjectLists.map((item, index) => (
                <div key={index} className="flex mb-10 flex-wrap lg:justify-center lg:gap-20">
                    <div className="w-full lg:w-1/4 ">
                        <p className="mb-2 font-bold text-white bg-clip-text text-2xl text-transparent">
                            {item.name}
                        </p>
                        <a href={item.link} target="_blank">
                            {item.image && <img src={item.image} alt={item.name} className='flex-1' />}
                        </a>
                        <p className="text-lg mt-2">{item.description}</p>
                    </div>
                    <div className="w-full max-w-xl lg:w-3/4 my-3 lg:px-12">
                        <h6 className="mb-6">
                            <span className="text-xl font-semibold text-purple-100">Kullanılan Teknolojiler</span>
                        </h6>
                        <div className="flex text-center flex-1 gap-5 mt-4 flex-wrap ">
                            {item.tech.map((tech, techIndex) => (
                                <span key={techIndex} className={`p-2 px-4 rounded-sm ${techColors[tech] || 'bg-gray-600'}`}>{tech}</span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </motion.div>
    );
};

export default Projects;
