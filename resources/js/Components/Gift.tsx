import DownloadButton from "./DownloadButton";
import Title from "./Title";

const Gift = () => {
    return (
        <section className="w-full bg-tranparent  relative  z-20">
            <div className="w-full h-[640px] bg-transparent relative -mt-96 ">
                <div className="w-full h-[440px]  bg-[url('/resources/assets/images/green-curve.png')] bg-no-repeat bg-cover relative -top-14 overflow-hidden z-5"></div>
                <div className="w-[1300px] h-[300px]  bg-[url('/resources/assets/images/blue-curve.svg')] bg-cover bg-no-repeat absolute top-24 -left-5 z-5 "></div>
            </div>
            <div className="flex flex-col gap-1 absolute top-[25%] right-[11%]  bg-white z-30">
                <div className="flex gap-2">
                    <img
                        src="./images/medaille.svg"
                        alt="gift&cse"
                        width="50"
                        height="90"
                    />
                    <div className="flex flex-col ">
                        <h3 className="text-[#F8AD47] text-3xl uppercase roboto-bold leading-8">
                            Accès 100% <br />
                            gratuit
                        </h3>
                    </div>
                </div>

                <span className="text-[#2C3058] font-bold text-sm roboto-bold">
                    Brunch, animations et cadeaux offerts !
                </span>
            </div>
            <div className="max-w-screen-xl mx-auto w-full -mt-50">
                <div className="w-full">
                    <Title
                        title="Gratuit, gourmand, prestigieux : <br/> le salon CSE que vous attendiez"
                        className="text-center text-4xl "
                    />
                </div>
                <div className="w-full grid grid-cols-3 gap-10 mt-15">
                    <div className="flex flex-col justify-center items-center bg-[#FFFFFF] rounded-xl py-8 gap-y-3 drop-shadow-lg transition-all ease-in-out duration-500 hover:drop-shadow-2xl">
                        <img
                            src="./images/artifice.svg"
                            className="w-14 h-14"
                            alt="giftacse"
                        />
                        <div className="flex flex-col justify-center items-center">
                            <h4 className="text-[#2C3058] font-bold text-xl">
                                Des animations gratuites
                            </h4>
                            <span className="text-[#2C3058]  text-xl">
                                toute la journée
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center bg-[#FFFFFF] rounded-xl py-6 gap-y-3 drop-shadow-lg transition-all ease-in-out duration-500 hover:drop-shadow-2xl">
                        <img
                            src="./images/chef.svg"
                            className="w-14 h-14"
                            alt="giftacse"
                        />
                        <div className="flex flex-col justify-center items-center">
                            <h4 className="text-[#2C3058] font-bold text-xl">
                                Repas et boissons
                            </h4>
                            <span className="text-[#2C3058]  text-xl">
                                offerts non stop
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center bg-[#FFFFFF] rounded-xl py-6 gap-y-3 drop-shadow-lg transition-all ease-in-out duration-500 hover:drop-shadow-2xl">
                        <img
                            src="./images/gift.svg"
                            className="w-14 h-14"
                            alt="giftacse"
                        />
                        <div className="flex flex-col justify-center items-center">
                            <h4 className="text-[#2C3058] font-bold text-xl">
                                Repartez avec votre cadeau
                            </h4>
                            <span className="text-[#2C3058]  text-xl">
                                d'une valeur de 30€ offert
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center py-10 gap-10">
                    <h2 className="text-lg text-[#2C3058] roboto-regular">
                        Et tout cela{" "}
                        <span className="uppercase text-[#F8AD47] font-semibold">
                            gratuitement
                        </span>
                        , rien que pour vous, élus CSE!
                    </h2>
                    <DownloadButton
                        title="Je télécharge mon &nbsp<b>badge gratuit</b>"
                        className="h-12"
                        linkHref={"https://app.imagina.com/gift--cse/443285"}
                    />
                </div>
            </div>
        </section>
    );
};

export default Gift;
