import { useEffect, useState } from "react";
import DownloadButton from "./DownloadButton";
import Logo from "./Logo";
import Menu from "./Menu";

const Header = () => {
    const [isSticky, setIsSticky] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 100);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <>
            <section
                className={`w-full h-24  fixed flex justify-center items-center z-50 ${
                    isSticky ? "bg-white drop-shadow-2xl" : "bg-transparent"
                }`}
            >
                <div
                    className={` bg-white h-full  flex justify-between items-center px-5  z-[99999] duration-500 transition-all ease-in-out ${
                        isSticky
                            ? "top-0 left-0 right-0 flex justify-center gap-20 z-[1000] bg-white"
                            : "rounded-bl-3xl left-24 rounded-br-3xl max-w-screen-xl w-full mx-auto"
                    }`}
                >
                    <Logo />
                    <Menu />
                    <DownloadButton
                        title="Je télécharge &nbsp<b>mon badge gratuit</b>"
                        className="h-12"
                        linkHref={"https://app.imagina.com/gift--cse/443285"}
                    />
                </div>
            </section>
        </>
    );
};

export default Header;
