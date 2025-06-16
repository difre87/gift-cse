import DownloadButton from "./DownloadButton";
import Title from "./Title";

const Vip = () => {
    return (
        <section
            className="w-full bg-transparent py-20 relative"
            id="programme"
        >
            <div className="w-full md:h-[640px] h-[200px] bg-transparent relative md:-mt-72 -mt-32 md:z-30">
                <div className="w-full md:h-[440px] h-[100px] bg-[url('/resources/assets/images/green-curve.png')] bg-no-repeat bg-cover relative -top-14 overflow-hidden"></div>
                <div className="md:w-[1300px] w-full md:h-[300px] bg-[url('/resources/assets/images/blue-curve.svg')] bg-cover bg-no-repeat absolute top-24 -left-5"></div>
            </div>
            <div className="md:w-36 md:h-36 w-24 h-24 absolute md:top-[13%] -top-[10%] md:left-[40%] right-0 z-50">
                <img
                    src="./images/badge.svg"
                    alt="vip"
                    className="w-full h-full object-contain"
                />
            </div>
            <div className="max-w-screen-xl mx-auto w-full -mt-42 z-50">
                <div className="w-full grid md:grid-cols-2 grid-cols-1">
                    <div className="w-full md:hidden relative gap-x-2 flex grid-cols-2">
                        <div className=" h-[280px] rounded-full overflow-hidden relative group">
                            <img
                                src="./images/food.jpg"
                                alt="gift&cse"
                                className="w-full h-full object-cover rounded-full hover:scale-110 transition-transform duration-500 ease-in-out"
                            />
                        </div>
                        <div className=" h-[280px] rounded-full overflow-hidden relative">
                            <img
                                src="./images/burger.jpg"
                                alt="gift&cse"
                                className="w-full h-full object-cover rounded-full hover:scale-110 transition-transform duration-500 ease-in-out"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center py-4">
                        <Title
                            title="Parce que vous êtes <br/> <span class='text-[#F8AD47]'>VIP toute la journée</span>"
                            className="md:text-4xl text-2xl md:pb-10 py-5"
                        />
                        <ul className="list-disc md:pl-5 pl-15 text-[#2C3058] md:text-lg text-sm md:px-0 ">
                            <li>Petit-déjeuner offert à l’arrivée ☕</li>
                            <li>Brunch de 11:00 à 15:00 🍽️</li>
                            <li>Pause sucrée à 16:00 🍩</li>
                            <li>Boissons à volonté toute la journée 🥤</li>
                        </ul>
                    </div>
                    <div className="md:hidden px-5">
                        <DownloadButton
                            title="Je télécharge &nbsp<b>mon badge gratuit</b>"
                            className="md:w-80 h-12 md:mt-20 mt-10 !flex text-sm !px-8"
                            linkHref={
                                "https://app.imagina.com/gift--cse/443285"
                            }
                        />
                    </div>

                    <div className="w-full md:flex relative gap-x-20 hidden">
                        <div className="w-64 h-[430px] rounded-full overflow-hidden relative top-32 group">
                            <img
                                src="./images/food.jpg"
                                alt="gift&cse"
                                className="w-full h-full object-cover rounded-full hover:scale-110 transition-transform duration-500 ease-in-out"
                            />
                        </div>
                        <div className="w-64 h-[430px] rounded-full overflow-hidden relative -top-20 ">
                            <img
                                src="./images/burger.jpg"
                                alt="gift&cse"
                                className="w-full h-full object-cover rounded-full hover:scale-110 transition-transform duration-500 ease-in-out"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Vip;
