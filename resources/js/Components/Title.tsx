interface TitleProps {
    title: string;
    className?: string;
}
const Title = ({ title, className }: TitleProps) => {
    return (
        <h1
            className={`text-[#2C3058] poppins-semibold ${className}`}
            dangerouslySetInnerHTML={{ __html: title }}
        ></h1>
    );
};

export default Title;
