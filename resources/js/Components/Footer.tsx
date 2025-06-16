import { Facebook, Instagram, Linkedin, Phone } from "lucide-react";
import DownloadButton from "./DownloadButton";
import { scrollToSection } from "../types/type";

const Footer = () => {
    return (
        <section className="bg-[#47A185] py-10 w-full">
            <div className="max-w-screen-xl w-full mx-auto">
                <div className="w-full flex">
                    <div className="flex flex-col gap-10">
                        <div className="flex gap-2">
                            <a
                                href="#"
                                className="w-10 h-10 bg-white rounded-full flex justify-center items-center"
                            >
                                <img
                                    src="./images/facebook.svg"
                                    alt="logo"
                                    className="w-4 h-4"
                                />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 bg-white rounded-full flex justify-center items-center"
                            >
                                <img
                                    src="./images/instagram.svg"
                                    alt="logo"
                                    className="w-4 h-4"
                                />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 bg-white rounded-full flex justify-center items-center"
                            >
                                <img
                                    src="./images/linkedin.svg"
                                    alt="logo"
                                    className="w-4 h-4"
                                />
                            </a>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="grid grid-cols-2 pl-5">
                                <button
                                    onClick={(e) => scrollToSection("home")}
                                    className="text-lg text-white roboto-regular cursor-pointer relative before:absolute before:w-[5px] before:h-[5px] before:rounded-full before:bg-white before:bottom-[40%] before:-translate-y-[40%] before:-left-4 hover:underline transition-all duration-300"
                                >
                                    Accueil
                                </button>
                                <button
                                    onClick={(e) =>
                                        scrollToSection("programme")
                                    }
                                    className="text-lg text-white roboto-regular cursor-pointer relative before:absolute before:w-[5px] before:h-[5px] before:rounded-full before:bg-white before:bottom-[40%] before:-translate-y-[40%] before:-left-4 hover:underline transition-all duration-300"
                                >
                                    Programme
                                </button>
                                <button
                                    onClick={(e) =>
                                        scrollToSection("exposants")
                                    }
                                    className="text-lg text-white roboto-regular cursor-pointer relative before:absolute before:w-[5px] before:h-[5px] before:rounded-full before:bg-white before:bottom-[40%] before:-translate-y-[40%] before:-left-4 hover:underline transition-all duration-300"
                                >
                                    Exposants
                                </button>
                                <button
                                    onClick={(e) => scrollToSection("infos")}
                                    className="text-lg text-white no-underline roboto-regular cursor-pointer relative before:absolute before:w-[5px] before:h-[5px] before:rounded-full before:bg-white before:bottom-[40%] before:-translate-y-[40%] before:-left-4 hover:underline transition-all duration-300"
                                >
                                    Infos pratiques
                                </button>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex gap-2">
                                    <Phone className="text-white w-5 h-5" />
                                    <span className="text-lg text-white roboto-bold">
                                        02 36 47 52 05
                                    </span>
                                </div>
                                <span className="text-lg text-white roboto-regular">
                                    Lundi - Vendredi 09:00 - 12:00 | 14:00 -
                                    17:30
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center items-end pl-20">
                        <DownloadButton
                            title="Je télécharge &nbsp<b>mon badge gratuit</b>"
                            className="w-full h-14 mb-1"
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

export default Footer;
