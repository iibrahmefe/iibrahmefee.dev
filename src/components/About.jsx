import efe from "../assets/efe.jpeg";

const About = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h2 className="text-center text-4xl font-bold p-6">Hakkımda</h2>
            <div className="flex flex-wrap">
                <div className="left w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center h-96 w-96 mx-auto">
                        <img src={efe} alt="" className="rounded" />
                    </div>
                </div>
                <div className="right w-full lg:w-1/2 flex items-center ">
                    <div className="flex justify-center items-start lg:justify-center">
                        <p className="py-6 text-justify">
                            Merhaba, adım İbrahim Efe Kutaş. İstanbul Gelişim Üniversitesinde Web Tasarım ve Kodlama bölümünden mezun oldum. Mezuniyetimden bu yana frontend development alanında aktif olarak çalışıyorum. HTML, CSS, JavaScript ve React gibi popüler teknolojilerde güçlü bir bilgiye sahibim.

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