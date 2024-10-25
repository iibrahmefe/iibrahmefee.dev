import { motion } from 'framer-motion';
import { useState } from 'react';
import { ProjectLists, statusColors, techColors } from '../utils/const';

const Projects = () => {
    const [filter, setFilter] = useState(''); // Durum filtresi için useState kullan
    const [activeTab, setActiveTab] = useState(''); // Aktif tab durumunu tutmak için

    // Duruma göre projeleri filtrele
    const filteredProjects = filter
        ? ProjectLists.filter(project => project.status === filter)
        : ProjectLists;

    return (
        <motion.div
            initial={{ opacity: 0, y: -100 }} // Başlangıç durumu (sayfanın dışında yukarıda)
            animate={{ opacity: 1, y: 0 }}    // Animasyon son durumu (sayfa ortasında)
            transition={{ duration: 1.5, ease: 'easeOut' }} // Geçiş süresi ve animasyon eğrisi
            whileInView={{ opacity: 1, y: 0 }} // Sayfa içinde göründüğü sürece animasyon
            className="border-b border-neutral-700 pb-4"
        >
            <h2 className="text-center text-4xl font-bold">Projeler</h2>
            <div className='w-1/2 mx-auto py-4 my-4 rounded-sm flex items-center justify-evenly'>
                <button
                    className={`border rounded-md px-2 py-1.5 ${activeTab === 'Tamamlandı' ? 'bg-green-500 text-white' : ''}`}
                    onClick={() => {
                        setFilter('Tamamlandı'); // "Tamamlandı" butonuna tıklanınca durumu güncelle
                        setActiveTab('Tamamlandı'); // Aktif tabı güncelle
                    }}
                >
                    Tamamlanmış
                </button>
                <button
                    className={`border rounded-md px-2 py-1.5 ${activeTab === 'Hazırlanıyor' ? 'bg-green-500 text-white' : ''}`} // Burada typo düzeltilmiş
                    onClick={() => {
                        setFilter('Hazırlanıyor'); // "Hazırlanıyor" butonuna tıklanınca durumu güncelle
                        setActiveTab('Hazırlanıyor'); // Aktif tabı güncelle
                    }}
                >
                    Hazırlanıyor
                </button>
                <button
                    className={`border rounded-md px-2 py-1.5 ${activeTab === '' ? 'bg-green-500 text-white' : ''}`}
                    onClick={() => {
                        setFilter(''); // Tüm projeleri göstermek için filtreyi sıfırla
                        setActiveTab(''); // Aktif tabı sıfırla
                    }}
                >
                    Hepsi
                </button>
            </div>
            {filteredProjects.map((item, index) => (
                <div key={index} className="flex mb-10 flex-wrap lg:justify-center lg:gap-20">
                    <div className="w-full lg:w-1/4">
                        <div className='flex items-center justify-between'>
                            <p className="mb-2 font-bold text-white bg-clip-text text-xl text-transparent">
                                {item.name}
                            </p>
                            {item.status && (
                                <span
                                    className={`text-[14px] px-4 mb-2 h-7 flex items-center justify-center text-nowrap rounded-md ${statusColors[item.status]} text-white`}
                                >
                                    {item.status}
                                </span>
                            )}
                        </div>
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                            {item.image && <img src={item.image} alt={item.name} className='flex-1' />}
                        </a>
                        <p className="text-lg mt-2">{item.description}</p>
                    </div>
                    <div className="w-full max-w-xl lg:w-3/4 my-3 lg:px-12">
                        <h6 className="mb-6">
                            <span className="text-xl font-semibold text-purple-100">Kullanılan Teknolojiler</span>
                        </h6>
                        <div className="flex text-center flex-1 gap-5 mt-4 flex-wrap">
                            {item.tech.map((tech, techIndex) => (
                                <span key={techIndex} className={`p-2 px-4 rounded-sm ${techColors[tech] || 'bg-gray-600'}`}>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </motion.div>
    );
};

export default Projects;
