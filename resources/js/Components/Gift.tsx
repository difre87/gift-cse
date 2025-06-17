import DownloadButton from "./DownloadButton";
import Title from "./Title";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Gift = () => {
    return (
        <section className="w-full bg-tranparent  relative  z-20">
            <div className="w-full h-[640px] full-height bg-transparent relative -mt-96 mm">
                <div className="w-full  md:h-[440px] h-[440px] h-img  bg-[url('/resources/assets/images/green-curve.png')] bg-no-repeat bg-cover relative -top-14 overflow-hidden z-5"></div>
                <div className="w-[1300px] h-[300px] img-full  bg-[url('/resources/assets/images/blue-curve.svg')] bg-cover bg-no-repeat absolute top-24 -left-5 z-5 hidden md:block"></div>
            </div>
            <div className="flex flex-col gap-1 absolute md:top-[25%] top-[28%]  md:right-[5%] right-[30%]  bg-white z-30">
                <div className="flex items-center gap-2">
                    <img
                        src="./images/medaille.svg"
                        alt="gift&cse"
                        width="50"
                        height="90"
                        className="w-10 h-10 md:w-14 md:h-14"
                    />
                    <div className="flex flex-col ">
                        <h3 className="text-[#F8AD47] md:text-3xl text-xl uppercase roboto-bold md:leading-8">
                            Accès 100% <br />
                            gratuit
                        </h3>
                    </div>
                </div>

                <span className="text-[#2C3058] font-bold md:text-sm text-[12px] roboto-bold">
                    Brunch, animations et cadeaux offerts !
                </span>
            </div>
            <div className="md:max-w-screen-xl md:mx-auto w-full md:-mt-50 -mt-45">
                <div className="w-full">
                    <Title
                        title="Gratuit, gourmand, prestigieux : <br/> le salon CSE que vous attendiez"
                        className="text-center md:text-4xl text-2xl md:leading-10 leading-10"
                    />
                </div>
                <div className=" mt-10 md:hidden px-3">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation={false}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 5000 }}
                    >
                        <SwiperSlide className="w-full">
                            <div className="w-full  flex flex-col justify-center items-center bg-[#FFFFFF] rounded-xl py-8 gap-y-3 drop-shadow-lg transition-all ease-in-out duration-500 hover:drop-shadow-2xl">
                                <img
                                    src="./images/artifice.svg"
                                    className="w-14 h-14"
                                    alt="giftacse"
                                />
                                <div className="flex flex-col justify-center items-center">
                                    <h4 className="text-[#2C3058] font-bold text-md">
                                        Des animations gratuites
                                    </h4>
                                    <span className="text-[#2C3058]  text-md">
                                        toute la journée
                                    </span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="w-full">
                            <div className="w-full  flex flex-col justify-center items-center bg-[#FFFFFF] rounded-xl py-8 gap-y-3 drop-shadow-lg transition-all ease-in-out duration-500 hover:drop-shadow-2xl">
                                <img
                                    src="./images/chef.svg"
                                    className="w-14 h-14"
                                    alt="giftacse"
                                />
                                <div className="flex flex-col justify-center items-center">
                                    <h4 className="text-[#2C3058] font-bold text-md">
                                        Repas et boissons
                                    </h4>
                                    <span className="text-[#2C3058]  text-md">
                                        offerts non stop
                                    </span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="w-full">
                            <div className="w-full  flex flex-col justify-center items-center bg-[#FFFFFF] rounded-xl py-8 gap-y-3 drop-shadow-lg transition-all ease-in-out duration-500 hover:drop-shadow-2xl">
                                <img
                                    src="./images/gift.svg"
                                    className="w-14 h-14"
                                    alt="giftacse"
                                />
                                <div className="flex flex-col justify-center items-center">
                                    <h4 className="text-[#2C3058] font-bold text-md">
                                        Repartez avec votre cadeau
                                    </h4>
                                    <span className="text-[#2C3058]  text-md">
                                        d'une valeur de 30€ offert
                                    </span>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div className="w-full md:grid grid-cols-3 gap-10 mt-15 hidden">
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
                <div className="flex flex-col justify-center items-center md:py-10 py-3 md:px-0 px-10 gap-10">
                    <h2 className="md:text-lg text-md text-center text-[#2C3058] roboto-regular">
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
