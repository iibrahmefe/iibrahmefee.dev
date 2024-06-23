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
                            İsmim İbrahim Efe Kutas ve İstanbul Gelişim Üniversitesinde öğrenciyim. Frontend development alanında büyük bir ilgi ve tutkuya sahibim. HTML ve CSS konularında orta düzeyde bilgiye sahip olmamın yanı sıra, web sayfalarının yapılarını oluşturmak ve stile vermek konusunda yetenekliyim. Ayrıca, JavaScriptte temel yeteneklere hakimim ve kullanıcı arayüzlerini etkileşimli hale getirme, form kontrolleri ve animasyonlar gibi temel JavaScript konularında deneyimim bulunmaktadır.
                            Backend tarafında ise PHP ve Python gibi dillere yeni başladım. Bu dilleri öğrenerek web uygulamalarını daha kapsamlı ve dinamik hale getirme amacındayım. Ekibimle birlikte yürüttüğümüz <button className="bg-white rounded p-1 text-black  hover:bg-white/80 transition-all"><a href="https://www.learnhist.com.tr/" className="" target="_blank">Learnhist</a></button>  Tarih Sitesi projesinde hem Frontend hem de Backend alanlarında görev aldım. Frontend development konusundaki bilgilerimi sürekli olarak geliştirerek daha karmaşık projelerde çalışmak istiyorum.
                    </p>
                </div>
            </div>
        </div>
        </div >
    )
}

export default About