import Title from "./Title";

const Vip = () => {
    return (
        <section
            className="w-full bg-transparent py-20 relative z-10"
            id="programme"
        >
            <div className="w-full h-[640px] bg-transparent relative -mt-72 z-30">
                <div className="w-full h-[440px] bg-[url('/resources/assets/images/green-curve.png')] bg-no-repeat bg-cover relative -top-14 overflow-hidden"></div>
                <div className="w-[1300px] h-[300px] bg-[url('/resources/assets/images/blue-curve.svg')] bg-cover bg-no-repeat absolute top-24 -left-5"></div>
            </div>
            <div className="w-36 h-36 absolute top-[13%] left-[40%] z-50">
                <img
                    src="./images/badge.svg"
                    alt="vip"
                    className="w-full h-full object-contain"
                />
            </div>
            <div className="max-w-screen-xl mx-auto w-full -mt-42">
                <div className="w-full grid grid-cols-2">
                    <div className="flex flex-col">
                        <Title
                            title="Parce que vous êtes <br/> <span class='text-[#F8AD47]'>VIP toute la journée</span>"
                            className="text-4xl pb-10"
                        />
                        <ul className="list-disc pl-5 text-[#2C3058] text-lg">
                            <li>Petit-déjeuner offert à l’arrivée ☕</li>
                            <li>Brunch de 11:00 à 15:00 🍽️</li>
                            <li>Pause sucrée à 16:00 🍩</li>
                            <li>Boissons à volonté toute la journée 🥤</li>
                        </ul>
                    </div>
                    <div className="w-full flex relative gap-x-20">
                        <div className="w-64 h-[430px] rounded-full overflow-hidden relative top-32 z-30 group">
                            <img
                                src="./images/food.jpg"
                                alt="gift&cse"
                                className="w-full h-full object-cover rounded-full hover:scale-110 transition-transform duration-500 ease-in-out"
                            />
                        </div>
                        <div className="w-64 h-[430px] rounded-full overflow-hidden relative -top-32 z-30">
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
