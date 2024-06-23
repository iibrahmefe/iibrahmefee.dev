
const MusicProjects = [
    {
        id: 1,
        MusicName: "İlayda Karakoç",
        MusicDesc: "Başıma Belasın",
        MusicType: "Remix",
        link: "https://www.youtube.com/watch?v=bQpNpqjP27Q"
    },
    {
        id: 2,
        MusicName: "Mavi Gri",
        MusicDesc: "Alt Üst Olmuşum",
        MusicType: "Remix",
        link: "https://www.youtube.com/watch?v=V91QifvjxSQ"

    },
    {
        id: 3,
        MusicName: "Dedublüman",
        MusicDesc: "En Dibine Kadar",
        MusicType: "Remix",
        link: "https://www.youtube.com/watch?v=LBzChxGxSus"
    },
    {
        id: 4,
        MusicName: "Dark Type Beat",
        MusicDesc: "KurtlarVadisiSpec",
        MusicType: "Remix",
        link: "https://www.youtube.com/watch?v=r7YfDBOPNdU"
    }
];

const Music = () => {

    return (
        <div className="border-b border-neutral-700 pb-4">
            <h2 className="text-center text-4xl font-bold mt-10">Müziklerim</h2>


            <div className=" p-12 flex items-center flex-wrap justify-center gap-5">
                {MusicProjects.map((skill, index) => (
                    <div key={index} className="p-4 flex-wrap flex items-center justify-center flex-col text-center border border-neutral-700 rounded hover:scale-105  transition-all ">
                        <a href={skill.link} target="_blank"><i className="text-4xl">{skill.MusicName}</i></a>
                        <h2 className="text-[32px]"></h2>
                        <h4 className="text-center">{skill.MusicDesc}</h4>
                        <p>{skill.MusicType}</p>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Music