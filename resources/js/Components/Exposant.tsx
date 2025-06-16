import Title from "./Title";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ExposantItems } from "../../data/data";

const Exposant = () => {
    return (
        <section className="w-full bg-white py-10 md:py-0" id="exposants">
            <div className="md:max-w-screen-xl w-full md:mx-auto">
                <div className="w-full flex justify-center items-center mb-20">
                    <Title
                        title="Les Exposants présents"
                        className="!text-[#47A185] md:text-4xl text-2xl mt-10 md:mt-0"
                    />
                </div>
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={5}
                    navigation={false}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000 }}
                    className="!hidden md:block"
                >
                    {ExposantItems.map((exposant) => (
                        <SwiperSlide className="flex flex-col  justify-center items-center md:gap-8">
                            <div className="w-32 h-28 flex justify-center items-center  mx-auto">
                                <img
                                    src={exposant.imageUrl}
                                    alt={exposant.title}
                                    className="w-full object-cover"
                                />
                            </div>
                            <div className="flex flex-col justify-center items-center py-2">
                                <h4 className="text-[#2C3058] font-bold md:text-lg">
                                    {exposant.title}
                                </h4>
                                <span className="text-[#2C3058] text-sm block text-center">
                                    {exposant.description}
                                </span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={3}
                    navigation={false}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000 }}
                    className="block md:!hidden -mt-10"
                >
                    {ExposantItems.map((exposant) => (
                        <SwiperSlide className="flex flex-col  justify-center items-center ">
                            <div className="w-20 h-16 flex justify-center items-center  mx-auto">
                                <img
                                    src={exposant.imageUrl}
                                    alt={exposant.title}
                                    className="w-full object-cover"
                                />
                            </div>
                            <div className="flex flex-col justify-center items-center py-2">
                                <h4 className="text-[#2C3058] font-bold text-[12px] text-center">
                                    {exposant.title}
                                </h4>
                                <span className="text-[#2C3058] text-[10px] block text-center">
                                    {exposant.description}
                                </span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Exposant;
