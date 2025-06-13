import { MenuSite } from "../../data/data";
const Menu = () => {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        } else {
            console.warn(`Section with ID ${sectionId} not found.`);
        }
    };
    return (
        <div className="flex gap-12">
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
