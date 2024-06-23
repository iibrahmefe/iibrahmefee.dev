import efe from "../assets/efe.jpeg";

const heros = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35 min-h-screen">
            <div className="flex flex-wrap h-full">
                <div className="left w-full lg:w-1/2 flex lg:items-center justify-center lg:justify-start pb-6   ">
                    <div className="flex flex-col items-center lg:items-start justify-center">
                        <h1 className="title pb-4 text-4xl tracking-tight a lg:mt-16 lg:text-center "> İbrahim Efe Kutas</h1>
                        <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl text-transparent mb-2" >Frontend Developer</span>
                        <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-xl text-transparent" >Music Producer</span>
                        {/* <p className="my-2 max-w-xl py-6 font-light ">Yazılım, Müzik</p> */}
                    </div>
                </div>
                <div className="right w-full lg:w-1/2 lg:p-8 h-full" >
                    <div className="flex justify-center">
                        <img src={efe} alt="profil-resmi" className="object-cover rounded-full max-h-96  hover:scale-105 transition-all" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default heros