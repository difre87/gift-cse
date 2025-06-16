interface DownloadButtonProps {
    className?: string;
    title: string;
    linkHref?: string;
}
const DownloadButton = ({
    className,
    title,
    linkHref,
}: DownloadButtonProps) => {
    return (
        <a
            href={linkHref}
            className={`hidden rounded-lg text-white md:flex justify-center items-center text-md text-center bg-[#F8AD47] py-2 px-10 cursor-pointer transition-all duration-500 ease-in-out roboto-regular hover:bg-[#2C3058] ${className}`}
            dangerouslySetInnerHTML={{ __html: title }}
            target="_blank"
        />
    );
};

export default DownloadButton;
