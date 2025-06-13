import DownloadButton from "./DownloadButton";
import Logo from "./Logo";
import Menu from "./Menu";

const Header = () => {
    return (
        <div className="max-w-screen-xl w-full mx-auto bg-white h-24 rounded-bl-3xl rounded-br-3xl flex justify-between items-center px-5 drop-shadow-2xl relative z-50">
            <Logo />
            <Menu />
            <DownloadButton
                title="Je télécharge <b>mon badge gratuit</b>"
                className="h-12"
                linkHref={"https://app.imagina.com/gift--cse/443285"}
            />
        </div>
    );
};

export default Header;
