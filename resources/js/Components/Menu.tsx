import { MenuSite } from "../../data/data";
const Menu = () => {
    return (
        <div className="flex gap-12">
            {MenuSite.map((menu) => (
                <a
                    href="#"
                    key={menu.id}
                    className=" text-[#2C3058] transition-all duration-500 ease-in-out roboto-regular"
                >
                    {menu.title}
                </a>
            ))}
        </div>
    );
};

export default Menu;
