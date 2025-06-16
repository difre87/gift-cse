import DownloadButton from "./DownloadButton";
import Title from "./Title";

const Activite = () => {
    return (
        <section className="w-full bg-transparent relative md:h-[600px] md:py-10">
            <div className="md:max-w-screen-xl mx-auto w-full h-full px-3 md:px-0">
                <div className="w-full grid md:grid-cols-2 grid-cols-1 h-full">
                    <div className="w-full md:flex grid grid-cols-3 gap-x-2 md:items-center h-full relative md:gap-x-5">
                        <div className="md:w-64 md:h-[350px] h-[200px] rounded-full overflow-hidden">
                            <img
                                src="./images/faucheuse.jpg"
                                alt="gift&cse"
                                className="w-full h-full object-cover rounded-full hover:scale-110 transition-transform duration-500 ease-in-out"
                            />
                        </div>
                        <div className="md:w-64 md:h-[350px] h-[200px] rounded-full overflow-hidden">
                            <img
                                src="./images/rodeo.jpg"
                                alt="gift&cse"
                                className="w-full h-full object-cover rounded-full hover:scale-110 transition-transform duration-500 ease-in-out"
                            />
                        </div>

                        <div className="md:w-64 md:h-[350px] h-[200px] rounded-full overflow-hidden">
                            <img
                                src="./images/game.jpg"
                                alt="gift&cse"
                                className="w-full h-full object-cover rounded-full hover:scale-110 transition-transform duration-500 ease-in-out"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center md:items-start items-center md:pl-10 gap- relative">
                        <Title
                            title="Des activités inédites <br/>et  <span class='text-[#F8AD47]'>totalement gratuites</span>"
                            className="md:text-4xl text-2xl md:pb-10 py-5 text-center md:text-left"
                        />
                        <span className="md:text-lg text-sm pb-2 md:pb-0 text-[#2C3058] roboto-regular text-center">
                            🎯 Participez librement à nos animations toute la
                            journée :
                        </span>
                        <ul className="list-disc md:pl-5 text-[#2C3058] md:text-lg text-sm roboto-regular">
                            <li>Laser Game extérieur</li>
                            <li>Faucheuse gonflable</li>
                            <li>Rodéo mécanique</li>
                            <li>Et d’autres surprises…</li>
                        </ul>
                        <DownloadButton
                            title="Je télécharge &nbsp<b>mon badge gratuit</b>"
                            className="md:w-[320px] md:mt-8 h-12 mt-10 !flex text-sm !px-8"
                            linkHref={
                                "https://app.imagina.com/gift--cse/443285"
                            }
                        />
                        {/* <DownloadButton
                            title="Je télécharge &nbsp<b>mon badge gratuit</b>"
                            className="w-[320px] mt-8 h-12"
                            linkHref={
                                "https://app.imagina.com/gift--cse/443285"
                            }
                        /> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Activite;
