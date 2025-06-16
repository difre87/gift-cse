import { Calendar, CalendarDays, Clock5, Gift, MapPin } from "lucide-react";
import DownloadButton from "./DownloadButton";

const Heroes = () => {
    return (
        <section
            id="home"
            className="w-full h-screen relative bg-amber-100 bg-[url('/resources/assets/chateau.png')] bg-cover bg-center bg-no-repeat relative after:content['] overflow-hidden z-10"
        >
            <div className="absolute left-0 right-0 bottom-0 top-0 bg-black/50"></div>
            <div className="flex-flex-col">
                <div className="max-w-screen-xl w-full mx-auto z-30 relative h-full">
                    <div className="grid grid-cols-2 h-full">
                        <div className="flex flex-col gap-4 py-30">
                            <div className="bg-[#F8AD47] py-2 px-5 rounded-r-full flex items-center gap-x-2 w-[85%]">
                                <Gift className="text-[#2C3058] w-6 h-6" />
                                <h2 className="text-[#2C3058] text-2xl poppins-medium">
                                    Pemier Salon{" "}
                                    <span className="text-[#FFFDFC] poppins-bold pr-5">
                                        GIFT&CSE
                                    </span>
                                    <span className="text-[#FFFDFC] poppins-bold relative pl-5 before:w-[1px] before:h-4 before:bg-[#FFFDFC] before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:-translate-x-[100%]">
                                        Orléans
                                    </span>
                                </h2>
                            </div>
                            <div className="flex  gap-2 flex-col px-5">
                                <h1 className="text-[58px] text-white  poppins-bold leading-18">
                                    Une journée VIP pour les CSE dans un lieu
                                    d'exception
                                </h1>
                                <h4 className="text-white text-md flex roboto-regular">
                                    Nouveau à Orléans :{" "}
                                    <span className="!roboto-regular pl-2">
                                        {" "}
                                        un salon CSE pas comme les autres
                                    </span>
                                </h4>
                            </div>
                        </div>
                        <div className="flex justify-end relative py-30 pr-5">
                            <div className=" px-4 flex justify-center gap-y-2 flex-col bg-[#2C3058E5] rounded-xl w-72 h-36">
                                <div className="flex items-center gap-2">
                                    <CalendarDays className="text-white w-5 h-5" />
                                    <h3 className="text-white text-lg Roboto-regular">
                                        Mardi 9 Septembre 2025
                                    </h3>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin className="text-white w-5 h-5" />
                                    <h3 className="text-white text-lg Roboto-regular">
                                        Château du Rollin
                                    </h3>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock5 className="text-white w-5 h-5" />
                                    <h3 className="text-white text-lg Roboto-regular">
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
