"use client";
import DownloadButton from "./DownloadButton";
import Title from "./Title";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { useRef, useState, useEffect } from "react";

const Images = [
    {
        images: "./images/sac.jpg",
    },
    {
        images: "./images/casque.jpg",
    },
    {
        images: "./images/ecouteur.jpg",
    },
    {
        images: "./images/enceinte.jpg",
    },
];

const OfferGift = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef(null);
    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.slideToLoop(activeIndex);
        }
    }, [activeIndex]);
    return (
        <section className="w-full bg-transparent md:pt-20 pb-40 relative">
            <div className="md:max-w-screen-xl mx-auto w-full md:px-0 px-3">
                <div className="grid md:grid-cols-2 grid-cols-1 md:gap-30 gap-y-5">
                    <div className="flex gap-10">
                        <div className="md:flex flex-col gap-2 hidden">
                            {Images.map((image, index) => (
                                <div
                                    key={index}
                                    onClick={() => setActiveIndex(index)}
                                    className={`w-24 h-24 cursor-pointer rounded-lg border-[1px]  ${
                                        index === activeIndex
                                            ? "border-[#F8AD47]"
                                            : "border-[#F5F5F5]"
                                    }`}
                                >
                                    <img
                                        src={image.images}
                                        alt="gift"
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                            ))}
                        </div>

                        <Swiper
                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                            modules={[Pagination, Autoplay]}
                            autoplay={{ delay: 8000 }}
                            onSlideChange={(swiper: { realIndex: any }) =>
                                setActiveIndex(swiper.realIndex)
                            }
                            initialSlide={activeIndex}
                            pagination={{ clickable: true }}
                            slidesPerView={1}
                            spaceBetween={10}
                            className="flex-1 flex border-[1px] border-[#F5F5F5] md:h-[410px] h-[300px] rounded-lg"
                        >
                            {Images.map((image, index) => (
                                <SwiperSlide key={index}>
                                    <img
                                        src={image.images}
                                        alt="gift"
                                        className="w-full h-full object-contain rounded-lg"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className="relative md:hidden flex  items-center">
                        <span className="roboto-light italic text-[10px] text-[#2C3058] md:py-3 block">
                            *Photos non contractuelles.
                        </span>
                    </div>
                    <div className="flex flex-col justify-center items-center md:items-start w-full md:px-0 px-3">
                        <Title
                            title="<span class='text-[#F8AD47] uppercase'>Cadeaux offerts</span><br/> à tous les visiteurs"
                            className="md:text-4xl text-2xl pb-10"
                        />
                        <p className="md:text-lg text-md text-center text-[#2C3058] mb-5">
                            Parce que vous êtes importants pour nous...
                        </p>
                        <ul className=" text-[#2C3058] md:text-lg text-sm text-center md:text-left">
                            <li className="text-[#F8AD47]">
                                Un cadeau premium (valeur 30€) offert
                            </li>
                            <li>à chaque participant</li>
                            <li className="text-sm">
                                (Limité à 2 visiteurs par CSE, badge requis)
                            </li>
                        </ul>
                        <DownloadButton
                            title="Je télécharge &nbsp<b>mon badge gratuit</b>"
                            className="md:w-80 h-12 md:mt-20 mt-10 !flex text-sm !px-8"
                            linkHref={
                                "https://app.imagina.com/gift--cse/443285"
                            }
                        />
                    </div>
                </div>
                <div className="relative hidden">
                    <span className="roboto-light italic text-sm text-[#2C3058] py-3 block">
                        *Photos non contractuelles.
                    </span>
                </div>
            </div>
        </section>
    );
};

export default OfferGift;
