import { useEffect, useState } from "react";
import DownloadButton from "./DownloadButton";
import Logo from "./Logo";
import Menu from "./Menu";
import { AlignJustify, MenuIcon } from "lucide-react";
import { Sidebar } from "./MobileMenu";

const Header = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);
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
                className={`w-full h-16 md:h-24 fixed flex md:justify-center justify-between items-center z-50  ${
                    isSticky ? "bg-white drop-shadow-2xl" : "bg-transparent"
                }`}
            >
                <div
                    className={` bg-white w-full h-full flex justify-between items-center px-5  z-[99] duration-500 transition-all ease-in-out ${
                        isSticky
                            ? "top-0 left-0 right-0 flex md:justify-center gap-20 z-[1000] bg-white"
                            : "rounded-bl-3xl rounded-br-3xl md:max-w-screen-xl w-full md:mx-auto"
                    }`}
                >
                    <Logo />
                    <Menu />
                    <DownloadButton
                        title="Je télécharge &nbsp<b>mon badge gratuit</b>"
                        className="h-12 sm:hidden"
                        linkHref={"https://app.imagina.com/gift--cse/443285"}
                    />
                    <button
                        className="md:hidden block"
                        onClick={() => setSidebarOpen(true)}
                    >
                        <AlignJustify className=" w-10 h-10" strokeWidth={1} />
                    </button>
                </div>
                {/* Overlay */}
                {sidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black/40 z-40"
                        onClick={() => setSidebarOpen(false)}
                    />
                )}
            </section>
            <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        </>
    );
};

export default Header;
