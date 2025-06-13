import Activite from "../Components/Activite";
import Contact from "../Components/Contact";
import Exposant from "../Components/Exposant";
import Footer from "../Components/Footer";
import Gift from "../Components/Gift";
import Heroes from "../Components/Heroes";
import OfferGift from "../Components/OfferGift";
import Sep from "../Components/Sep";
import TimeLine from "../Components/TimeLine";
import Vip from "../Components/Vip";

import AppLayout from "../Layout/AppLayout";

const Index = () => {
    return (
        <AppLayout>
            <div className="absolute top-[30%] w-[800px] h-[1600px] right-0 bg-[url('/resources/assets/images/right-side.svg')] bg-cover bg-no-repeat bg-center z-10">

            </div>
            <div className="absolute top-[10%] w-[1000px] h-[1700px] left-0 bg-pos-left bg-[url('/resources/assets/images/left-side.svg')] bg-cover bg-no-repeat bg-center z-50">

            </div>
            <Heroes />

            <Gift />
            <OfferGift />
            <Vip />
            <Activite />
            <Exposant />
            <TimeLine />
            <Contact />
            <Footer />
        </AppLayout>

     );
}

export default Index;
