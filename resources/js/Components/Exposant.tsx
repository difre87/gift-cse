import Title from "./Title";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ExposantItems } from "../../data/data";

const Exposant = () => {
    return (
        <section className="w-full bg-white">
            <div className="max-w-screen-xl w-full mx-auto">
                <div className="w-full flex justify-center items-center mb-20">
                    <Title
                        title="Les Exposants présents"
                        className="!text-[#47A185] text-4xl"
                    />
                </div>
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={5}
                    navigation={false}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000 }}
                >
                    {ExposantItems.map((exposant) => (
                        <SwiperSlide className="flex flex-col  justify-center items-center gap-8">
                            <div className="w-24  mx-auto">
                                <img
                                    src={exposant.imageUrl}
                                    alt={exposant.title}
                                    className="w-full object-cover"
                                />
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <h4 className="text-[#2C3058] font-bold text-lg">
                                    {exposant.title}
                                </h4>
                                <span className="text-[#2C3058] text-sm block text-center">
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
