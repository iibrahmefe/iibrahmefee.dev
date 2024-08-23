import efe from "../assets/lh4.jpg";

import React, { useRef } from "react";

// Resme çift tıklandığında açılacak olan kod
const About = () => {
    const imgRef = useRef(null);
    const handleDoubleClick = () => {
        if (imgRef.current) {
            if (imgRef.current.requestFullscreen) {
                imgRef.current.requestFullscreen();
            } else if (imgRef.current.mozRequestFullScreen) { /* Firefox */
                imgRef.current.mozRequestFullScreen();
            } else if (imgRef.current.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
                imgRef.current.webkitRequestFullscreen();
            } else if (imgRef.current.msRequestFullscreen) { /* IE/Edge */
                imgRef.current.msRequestFullscreen();
            }
        }
    }
    // Resme çift tıklandığında açılacak olan kod
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h2 className="text-center text-4xl font-bold p-6">Hakkımda</h2>
            <div className="flex flex-wrap">
                <div className="left w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center mb-5 lg:h-full lg:w-full mx-auto">
                        {/* ref refe tanımlandı çift tıklanması içinde onDoubleClick methoduna yukarda ne tanımladıysak onu ekledik */}
                        <img src={efe} alt="" ref={imgRef} onDoubleClick={handleDoubleClick} className="rounded mx-auto hover:cursor-pointer" />
                    </div>
                </div>
                <div className="right w-full lg:w-1/2 flex items-center ">
                    <div className="flex justify-center items-start lg:justify-center">
                        <p className="lg:p-10 text-justify lg:text-base text-sm">
                            Merhaba, adım İbrahim Efe Kutas. İstanbul Gelişim Üniversitesinde Web Tasarım ve Kodlama bölümünden mezun oldum. Mezuniyetimden bu yana frontend development alanında aktif olarak çalışıyorum. HTML, CSS, JavaScript ve React gibi popüler teknolojilerde güçlü bir bilgiye sahibim.

                            Özellikle frontend development üzerinde odaklanarak, kullanıcı dostu ve etkileyici web arayüzleri oluşturma konusunda deneyim kazandım. Bu süreçte, Tarih, Bilim, Felsefe, Mitoloji, Türk Tarihi ve Atatürk gibi konularda bilgi sunan Learnhist projesi gibi kapsamlı projelerde yer aldım. Learnhist, kullanıcılara bilgi verme hizmeti sunan ve bu konular üzerine odaklanan bir platformdur. Hem frontend hem de backend tarafında görev alarak, teknik bilgilerimi ve problem çözme becerilerimi geliştirme fırsatı buldum.

                            Yeni teknolojilere ve gelişmelere açık bir şekilde yaklaşarak, sürekli olarak kendimi yenilemeye ve geliştirmeye devam ediyorum. Takım çalışmasına uyumlu, iletişim becerileri kuvvetli ve proaktif bir yaklaşıma sahibim. Amacım, kullanıcı odaklı çözümler üreterek ve teknoloji dünyasındaki en son trendleri takip ederek, web geliştirme alanında kariyerimi ilerletmek.
                        </p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default About