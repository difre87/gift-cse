import { MenuSite } from "../../data/data";
import { scrollToSection } from "../types/type";
const Menu = () => {
    return (
        <div className="md:flex gap-12 hidden">
            {MenuSite.map((menu) => (
                <button
                    key={menu.id}
                    onClick={(e) => scrollToSection(`${menu.section}`)}
                    className=" text-[#2C3058] cursor-pointer transition-all duration-500 ease-in-out roboto-regular hover:text-[#47A185] hover:scale-105 active:scale-95"
                >
                    {menu.title}
                </button>
            ))}
        </div>
    );
};

export default Menu;
