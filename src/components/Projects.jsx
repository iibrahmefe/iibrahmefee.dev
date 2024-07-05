import { motion } from 'framer-motion';





const Projects = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -100 }} // Başlangıç durumu (sayfanın dışında yukarıda)
            animate={{ opacity: 1, y: 0 }}    // Animasyon son durumu (sayfa ortasında)
            transition={{ duration: 1.5, ease: 'easeOut' }} // Geçiş süresi ve animasyon eğrisi/ Geçiş süresi

            whileInView={{ opacity: 1, y: 0 }} // Sayfa içinde göründüğü sürece animasyon

            className=" border-b border-neutral-700 pb-4">
            <h2 className="text-center my-20 text-4xl font-bold">Projeler</h2>
            <div className="flex mb-10 flex-wrap lg:justify-center lg:gap-20">
                <div className="w-full lg:w-1/4 ">
                    <p className="mb-2 font-bold bg-gradient-to-r from-red-400  to-red-800 bg-clip-text text-2xl text-transparent"><a href="www.learnhist.com.tr">Learnhist</a></p>
                    <p className="text-lg">LearnHist: Atatürk, Türk Tarihi, Tarih, Bilim, Felsefe,Mitoloji, Sanat, Evrim</p>
                </div>
                <div className="w-full max-w-xl lg:w-3/4">
                    <h6 className="mb-6 mt-6"><span className="text-xl  text-purple-100">Kullanılan Teknolojiler</span></h6>
                    <div className="flex items-center gap-5 mt-4 flex-wrap ">
                        <span className="bg-orange-600 p-2 rounded-sm">HTML</span>
                        <span className="bg-blue-600 p-2 rounded-sm">Css</span>
                        <span className="bg-purple-600 p-2 rounded-sm">Bootstrap</span>
                        <span className="bg-yellow-600 p-2 rounded-sm">JavaScript</span>
                        <span className="bg-blue-500 p-2 rounded-sm">Php</span>
                    </div>
                </div>
            </div>
            {/*  Proje ayırma */}
            <div className="flex mb-8 flex-wrap lg:justify-center lg:gap-20">
                <div className="w-full lg:w-1/4 ">
                    <p className="mb-2 font-bold text-white bg-clip-text text-2xl">Lojistik Taşıma</p>
                    <p className="text-lg">Lojistik Alan Tanıtımı, Kişisel Portfolyo</p>
                </div>
                <div className="w-full max-w-xl lg:w-3/4">
                    <div className="flex items-center gap-5 mt-6 flex-wrap">
                        <span className="bg-orange-600 p-2 rounded-sm">HTML</span>
                        <span className="bg-blue-600 p-2 rounded-sm">Tailwind</span>
                        <span className="bg-yellow-600 p-2 rounded-sm">JavaScript</span>
                        <span className="bg-blue-500 p-2 rounded-sm">React</span>
                    </div>
                </div>
            </div>
            {/* Proje ayırma */}
            <div className="flex mb-8 flex-wrap lg:justify-center lg:gap-20">
                <div className="w-full lg:w-1/4 ">
                    <a href="https://ibrahmefe-dev.vercel.app/" className="mb-2 font-bold text-white bg-clip-text text-2xl">Kutas.dev</a>
                    <p className="text-lg">Şuan bu projedesiniz</p>
                    <p className="text-lg">Kişisel Portfolyo</p>
                </div>
                <div className="w-full max-w-xl lg:w-3/4">
                    <div className="flex items-center gap-5 mt-6 flex-wrap">
                        <span className="bg-orange-600 p-2 rounded-sm">HTML</span>
                        <span className="bg-blue-600 p-2 rounded-sm">Tailwind</span>
                        <span className="bg-yellow-600 p-2 rounded-sm">JavaScript</span>
                        <span className="bg-blue-500 p-2 rounded-sm">React</span>
                    </div>
                </div>
            </div>
            {/* Proje ayırma */}
            <div className="flex mb-8 flex-wrap lg:justify-center lg:gap-20">
                <div className="w-full lg:w-1/4 ">
                    <a href="https://landing-page-rho-steel.vercel.app/" className="mb-2 font-bold text-white bg-clip-text text-2xl">Landing Page</a>
                    <p className="text-lg">Frontend Mentor</p>
                    <p className="text-lg">Egzersiz</p>
                </div>
                <div className="w-full max-w-xl lg:w-3/4">
                    <div className="flex items-center gap-5 mt-6 flex-wrap">
                        <span className="bg-orange-600 p-2 rounded-sm">HTML</span>
                        <span className="bg-blue-600 p-2 rounded-sm">Css</span>
                        <span className="bg-yellow-600 p-2 rounded-sm">JavaScript</span>
                    </div>
                </div>
            </div>
            {/* Proje ayırma */}
            <div className="flex mb-8 flex-wrap lg:justify-center lg:gap-20">
                <div className="w-full lg:w-1/4 ">
                    <a href="https://profil-page.vercel.app/" className="mb-2 font-bold text-white bg-clip-text text-2xl">Profile Page</a>
                    <p className="text-lg">Frontend Mentor</p>
                    <p className="text-lg">Egzersiz</p>
                </div>
                <div className="w-full max-w-xl lg:w-3/4">
                    <div className="flex items-center gap-5 mt-6 flex-wrap">
                        <span className="bg-orange-600 p-2 rounded-sm">HTML</span>
                        <span className="bg-blue-600 p-2 rounded-sm">Css</span>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Projects