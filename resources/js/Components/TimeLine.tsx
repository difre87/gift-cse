import Title from "./Title";
import DownloadButton from "./DownloadButton";
import { Mail, Phone } from "lucide-react";
import { scrollToSection } from "../types/type";

const TimeLine = () => {
    return (
        <section className="w-full bg-white relative pt-30 z-30" id="infos">
            <div className="max-w-screen-xl mx-auto w-full flex justify-center items-center mb-20 relative z-20">
                <Title
                    title="Infos pratiques"
                    className="text-4xl !text-[#47A185]  py-5 relative"
                />
            </div>
            <div className="max-w-screen-xl mx-auto w-full pb-20">
                <div className="grid grid-cols-3">
                    <div className="relative flex flex-col gap-y-2 items-center">
                        <div className="flex gap-x-6 justify-center">
                            <div className="flex items-end relative gap-x-2">
                                <span className="text-[#47A18526]  roboto-bold text-9xl">
                                    1
                                </span>
                                <div className="w-5 h-5 rounded-full bg-[#47A18526] relative bottom-4"></div>
                            </div>
                            <div className="flex items-end">
                                <span className="uppercase text-[#2C3058]  roboto-bold text-2xl relative bottom-3">
                                    en voiture
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-y-4">
                            <ul className="flex flex-col justify-center items-center text-md text-[#2C3058] roboto-regular">
                                <li>
                                    <b>Depuis Paris :</b> environ 1h30 via l'A10
                                </li>
                                <li>
                                    <b>Depuis Bourges :</b> environ 1h45 via
                                    l'A71
                                </li>
                                <li>
                                    <b>Depuis Angers :</b> environ 2h10 via
                                    l’A11 et l’A10
                                </li>
                            </ul>
                            <ul className="flex flex-col justify-center items-center text-md text-[#2C3058] roboto-regular">
                                <li>
                                    <b>Sortie d'autoroute recommandée :</b>
                                </li>
                                <li>
                                    Prenez la sortie{" "}
                                    <span className="text-[#47A185]">
                                        n°2 "Orléans-Centre /
                                    </span>
                                </li>
                                <li>
                                    <span className="text-[#47A185]">
                                        La Chapelle-Saint-Mesmin"{" "}
                                    </span>
                                    sur l’autoroute
                                    <span className="text-[#47A185]"> A10</span>
                                    .
                                </li>
                            </ul>
                            <span className="text-md text-[#2C3058] roboto-regular">
                                Le Château se situe à environ 5 minutes de la
                                sortie.
                            </span>
                            <DownloadButton
                                title="Itinéraire &nbsp<b>sur Maps</b>"
                                className="h-12 !bg-[#2C3058] mt-5 hover:!bg-[#47A185]"
                                linkHref="https://maps.app.goo.gl/gAenF9bcWNZYRNsn9"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-y-28">
                        <div className="w-24 h-24 rounded-full bg-[#2C3058] flex justify-center items-center relative z-[10] before:content[''] before:absolute before:bg-[url('/resources/assets/images/arc-left.svg')] before:bg-no-repeat before:w-[93px] before:h-[270px] before:bottom-[60%] before:-left-[60%] before:z-0  after:content[''] after:absolute after:-right-[70%] after:bg-[url('/resources/assets/images/arc-right.svg')] after:bg-no-repeat after:w-[93px] after:h-[270px] after:top-[40%] after:z-0">
                            <img
                                src="./images/car.svg"
                                alt="gift&cse"
                                className="w-8 h-8"
                            />
                        </div>
                        <div className="w-24 h-24 rounded-full bg-[#47A185] flex justify-center items-center relative z-20">
                            <img
                                src="./images/train.svg"
                                alt="gift&cse"
                                className="w-8 h-8"
                            />
                        </div>
                        <div className="w-24 h-24 rounded-full bg-[#F8AD47] flex justify-center mt-10 items-center  relative before:content[''] before:absolute before:bg-[url('/resources/assets/images/arc-left.svg')] before:bg-no-repeat before:w-[93px] before:h-[270px] before:bottom-[20%] before:-left-[75%] before:z-10">
                            <img
                                src="./images/pin.svg"
                                alt="gift&cse"
                                className="w-8 h-8"
                            />
                        </div>
                        <div className="relative flex flex-col gap-y-6 items-center">
                            <div className="flex gap-x-4 justify-center">
                                <div className="flex items-end relative gap-x-2">
                                    <span className="text-[#47A18526] f roboto-bold text-9xl">
                                        3
                                    </span>
                                    <div className="w-5 h-5 rounded-full bg-[#47A18526] relative bottom-4"></div>
                                </div>
                                <div className="flex flex-col justify-between items-center">
                                    <h3 className="uppercase text-[#F8AD47] font-bold text-2xl relative mt-5 roboto-bold">
                                        Château du rollin
                                    </h3>
                                    <span className=" text-[#2C3058] font-bold text-xl relative bottom-3 roboto-bold">
                                        Option nuitée
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col items-center gap-y-4">
                                <ul className="flex flex-col justify-center items-center text-lg text-[#2C3058] roboto-regular">
                                    <li className="text-center">
                                        possible à l’hôtel du château <br />{" "}
                                        (sur réservation, contactez-nous)
                                    </li>
                                </ul>
                                <button
                                    onClick={(e) => scrollToSection("contact")}
                                    className="bg-[#F8AD47] px-10 py-3 rounded-lg text-white cursor-pointer duration-500 ease-in-out transition-all hover:bg-[#2C3058]"
                                >
                                    Réserver <b> une Nuitée</b>
                                </button>
                                {/* <DownloadButton
                                    title=""
                                    className="h-12"

                                /> */}
                                <ul className="flex flex-col gap-y-4 justify-center  text-lg text-[#2C3058] roboto-regular">
                                    <li className="flex gap-x-3 items-center">
                                        <Phone />
                                        <span className="text-lg">
                                            02 36 47 52 05
                                        </span>
                                    </li>
                                    <li className=" flex gap-x-3 items-center">
                                        <Mail />
                                        <span className="text-lg">
                                            contact@gift-cse.fr
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="relative flex flex-col gap-y-6 items-center mt-40">
                        <div className="flex gap-x-8 justify-center">
                            <div className="flex items-end relative gap-x-2">
                                <span className="text-[#47A18526]  roboto-bold text-9xl">
                                    2
                                </span>
                                <div className="w-5 h-5 rounded-full bg-[#47A18526] relative bottom-4"></div>
                            </div>
                            <div className="flex items-end">
                                <span className="uppercase text-[#47A185]  roboto-bold text-2xl relative bottom-3">
                                    en train
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-y-4">
                            <ul className="flex flex-col justify-center items-center text-md text-[#2C3058]">
                                <li>
                                    Prenez un train jusqu’à la gare d’Orléans
                                </li>
                                <li>(gare située en centre-ville) :</li>
                                <li>
                                    <b>Depuis Paris-Austerlitz :</b> environ
                                    1h05
                                </li>
                                <li>
                                    <b>Depuis Bourges :</b> environ 1h45
                                </li>
                                <li>
                                    <b>Depuis Angers-Saint-Laud :</b> environ
                                    2h20
                                </li>
                                <li>(avec correspondance)</li>
                            </ul>
                            <ul className="flex flex-col justify-center items-center text-md text-[#2C3058]">
                                <li>
                                    <b>À votre arrivée,</b>{" "}
                                    <span className="text-[#47A185]">
                                        des taxis et VTC (Uber)
                                    </span>
                                </li>
                                <li>
                                    sont disponibles à la sortie de la gare.
                                </li>
                                <li className="italic text-center">
                                    Le trajet en taxi ou Uber jusqu’au Château
                                    du Rollin <br />
                                    dure environ 15 minutes.
                                </li>
                            </ul>
                            <DownloadButton
                                title="Itinéraire &nbsp<b>sur Maps</b>"
                                className="h-12 !bg-[#47A185] mt-5 hover:!bg-[#F8AD47]"
                                linkHref="https://maps.app.goo.gl/gAenF9bcWNZYRNsn9"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TimeLine;
