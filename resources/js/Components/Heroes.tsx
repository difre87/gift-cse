import { Calendar, CalendarDays, Clock5, Gift, MapPin } from "lucide-react";
import DownloadButton from "./DownloadButton";

const Heroes = () => {
    return (
        <section
            id="home"
            className="w-full h-screen  relative bg-amber-100 bg-[url('/resources/assets/chateau.png')] bg-cover bg-center  bg-no-repeat relative after:content[''] overflow-hidden z-10"
        >
            <div className="absolute left-0 right-0 bottom-0 top-0 bg-black/50"></div>
            <div className="flex-flex-col">
                <div className="md:max-w-screen-xl w-full mx-auto z-30 relative h-full">
                    <div className="grid md:grid-cols-2 grid-cols-1 w-full h-full">
                        <div className="flex flex-col gap-4 md:py-30 py-20 md:pl-0 px-3">
                            <div className="bg-[#F8AD47]  py-2 px-5 rounded-r-full flex items-center gap-x-2 md:w-[85%] w-full">
                                <Gift className="text-[#2C3058] w-6 h-6" />
                                <h2 className="text-[#2C3058] md:text-2xl text-[12px] poppins-medium">
                                    Pemier Salon{" "}
                                    <span className="text-[#FFFDFC] poppins-bold md:pr-5 pr-3">
                                        GIFT&CSE
                                    </span>
                                    <span className="text-[#FFFDFC] poppins-bold relative md:pl-5 before:w-[1px] before:h-4 before:bg-[#FFFDFC] before:absolute before:top-1/2 before:-translate-y-1/2 md:before:left-0 before:-left-1 before: before:-translate-x-[100%]">
                                        Orléans
                                    </span>
                                </h2>
                            </div>
                            <div className="flex gap-2 flex-col md:px-5">
                                <h1 className="md:text-[58px] text-white  poppins-bold md:leading-18 text-2xl pr-2">
                                    Une journée VIP pour les CSE dans un lieu
                                    d'exception
                                </h1>
                                <h4 className="text-white md:text-md md:flex text-[12px] roboto-regular">
                                    Nouveau à Orléans :{" "}
                                    <span className="!roboto-regular md:pl-2">
                                        {" "}
                                        un salon CSE pas comme les autres
                                    </span>
                                </h4>
                            </div>
                        </div>
                        <div className="flex md:justify-end relative md:py-30  pr-5">
                            <div className=" px-4 flex justify-center gap-y-2 flex-col bg-[#2C3058E5] md:rounded-xl rounded-r-xl w-72 md:h-36 h-28">
                                <div className="flex items-center gap-2">
                                    <CalendarDays className="text-white md:w-5 md:h-5 w-4 h-4" />
                                    <h3 className="text-white md:text-lg text-sm Roboto-regular">
                                        Mardi 9 Septembre 2025
                                    </h3>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin className="text-white md:w-5 md:h-5 w-4 h-4" />
                                    <h3 className="text-white md:text-lg text-sm Roboto-regular">
                                        Château du Rollin
                                    </h3>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock5 className="text-white md:w-5 md:h-5 w-4 h-4" />
                                    <h3 className="text-white md:text-lg text-sm Roboto-regular">
                                        09:00 - 19:00
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Heroes;
