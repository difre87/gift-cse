import { X } from "lucide-react";
import { MenuSite } from "../../data/data";
import { scrollToSection } from "../types/type";
import Logo from "./Logo";
import DownloadButton from "./DownloadButton";

export const Sidebar = ({
    open,
    onClose,
}: {
    open: boolean;
    onClose: () => void;
}) => (
    <div
        className={`fixed top-0 left-0 h-[450px] w-full rounded-b-3xl bg-white shadow-lg z-[999] transform transition-transform duration-300 ease-in-out
        ${open ? "translate-y-0" : "-translate-y-full"}`}
    >
        <div className="flex justify-between items-center p-4 ">
            <Logo />
            <button onClick={onClose}>
                <X className="w-8 h-8" />
            </button>
        </div>
        <div className="flex flex-col gap-4 px-5 items-start">
            {MenuSite.map((menu) => (
                <button
                    key={menu.id}
                    onClick={(e) => {
                        scrollToSection(`${menu.section}`);
                        onClose();
                    }}
                    className=" text-[#2C3058]  py-2 cursor-pointer transition-all duration-500 ease-in-out roboto-regular hover:text-[#47A185] hover:scale-105 active:scale-95"
                >
                    {menu.title}
                </button>
            ))}
            <DownloadButton
                title="Je télécharge &nbsp<b>mon badge gratuit</b>"
                className="h-12 !flex text-sm !px-8 mt-4"
                linkHref={"https://app.imagina.com/gift--cse/443285"}
            />
        </div>
    </div>
);
