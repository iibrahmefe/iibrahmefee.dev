// Component import
import Navbar from "./components/Navbar";
import Heros from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
// import Music from "./components/Music";
// Component import

// Framer İmport 
import { motion } from "framer-motion";
import "./style/background.css";
// Framer İmport 




function App() {

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }} // Başlangıç durumu (sayfanın dışında yukarıda)
      animate={{ opacity: 1, y: 0 }}    // Animasyon son durumu (sayfa ortasında)
      transition={{ duration: 1.5, ease: 'easeOut' }} // Geçiş süresi ve animasyon eğrisi/ Geçiş süresi
      whileInView={{ opacity: 1, y: 0 }} // Sayfa içinde göründüğü sürece animasyon
      className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div class="background">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        {/* <div className="relative h-full w-full bg-slate-950"><div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div><div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div></div> */}

        {/* <div className="relative h-full w-full bg-black"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div><div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div></div> */}
      </div>
      <div className="container max-w-[1480px] mx-auto px-8">
        <Navbar />
        <Heros className="mt-80" />
        <About />
        <Projects />
        <Skills />
        {/* <Music /> */}
      </div>
    </motion.div>
  )
}

export default App
