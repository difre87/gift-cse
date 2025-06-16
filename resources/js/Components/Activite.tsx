import DownloadButton from "./DownloadButton";
import Title from "./Title";

const Activite = () => {
    return (
        <section className="w-full bg-transparent relative h-[600px] py-10">
            <div className="max-w-screen-xl mx-auto w-full h-full">
                <div className="w-full grid grid-cols-2 h-full">
                    <div className="w-full flex items-center h-full relative gap-x-5">
                        <div className="w-64 h-[350px] rounded-full overflow-hidden">
                            <img
                                src="./images/faucheuse.jpg"
                                alt="gift&cse"
                                className="w-full h-full object-cover rounded-full hover:scale-110 transition-transform duration-500 ease-in-out"
                            />
                        </div>
                        <div className="w-64 h-[350px] rounded-full overflow-hidden">
                            <img
                                src="./images/rodeo.jpg"
                                alt="gift&cse"
                                className="w-full h-full object-cover rounded-full hover:scale-110 transition-transform duration-500 ease-in-out"
                            />
                        </div>

                        <div className="w-64 h-[350px] rounded-full overflow-hidden">
                            <img
                                src="./images/game.jpg"
                                alt="gift&cse"
                                className="w-full h-full object-cover rounded-full hover:scale-110 transition-transform duration-500 ease-in-out"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center pl-10 gap- relative">
                        <Title
                            title="Des activités inédites <br/>et  <span class='text-[#F8AD47]'>totalement gratuites</span>"
                            className="text-4xl pb-10"
                        />
                        <span className="text-lg text-[#2C3058] roboto-regular">
                            🎯 Participez librement à nos animations toute la
                            journée :
                        </span>
                        <ul className="list-disc pl-5 text-[#2C3058] text-lg roboto-regular">
                            <li>Laser Game extérieur</li>
                            <li>Faucheuse gonflable</li>
                            <li>Rodéo mécanique</li>
                            <li>Et d’autres surprises…</li>
                        </ul>
                        <DownloadButton
                            title="Je télécharge &nbsp<b>mon badge gratuit</b>"
                            className="w-[320px] mt-8 h-12"
                            linkHref={
                                "https://app.imagina.com/gift--cse/443285"
                            }
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Activite;
