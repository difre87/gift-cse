import { Award, Mail, Phone, Send, User, UserRound } from "lucide-react";
import Title from "./Title";
import { useForm, usePage } from "@inertiajs/react";
import { route } from "ziggy-js";

const Contact = () => {
    const { flash } = usePage().props as { flash?: { success?: string } };
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        cse: "",
        phone: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        post(route("contact"), {
            onSuccess: () => {
                reset();
            },
            onError: (errors) => {
                console.error(errors);
            },
            preserveScroll: true,
        });
    };
    return (
        <section
            className="w-full bg-[#2C3058]  py-20 relative md:mt-0 mt-80"
            id="contact"
        >
            <div className="md:max-w-screen-xl md:mx-auto w-full px-3 md:px-0">
                <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
                    <div className="md:col-span-1 flex flex-col justify-between items-center h-full">
                        <div className="flex flex-col justify-center items-center">
                            <Title
                                title="Contactez-nous"
                                className="text-[#F8AD47] md:text-4xl text-2xl pb-5"
                            />
                            <h4 className="roboto-bold md:text-2xl text-sm text-center text-white">
                                Une question ? Besoin d'assistance ?
                            </h4>
                            <h4 className="roboto-regular md:text-[20px] text-[12px] text-white">
                                Remplissez le formulaire ou appelez-nous :
                            </h4>
                        </div>
                        <img
                            src="./images/logo-white.svg"
                            alt="contact"
                            className="md:w-32 md:mt-5 hidden md:block"
                        />
                    </div>
                    <div className="col-span-2 flex flex-col md:px-10">
                        {flash?.success && (
                            <div className="success-message w-full bg-[#47A185] text-white roboto-medium py-3 mb-5 rounded-lg flex justify-center items-center">
                                {flash.success}
                            </div>
                        )}
                        {/* {Object.keys(errors).length > 0 && (
                            <div className="mb-4 text-red-500">
                                {Object.entries(errors).map(([key, value]) => (
                                    <div key={key}>{value}</div>
                                ))}
                            </div>
                        )} */}
                        <form
                            onSubmit={handleSubmit}
                            autoComplete="off"
                            className="flex flex-col gap-5 w-full"
                            method="post"
                        >
                            <input
                                type="hidden"
                                name="_token"
                                value={document
                                    .querySelector('meta[name="csrf-token"]')
                                    ?.getAttribute("content")}
                            />
                            <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-5">
                                <div className="flex flex-col">
                                    <label className="roboto-bold font-lg pb-2 text-white">
                                        Nom/Prénom
                                    </label>
                                    <div className="rounded-lg h-14 bg-[#FFFFFF33] flex items-center">
                                        <UserRound className="text-white w-6 h-6 m-3" />
                                        <input
                                            type="text"
                                            name="name"
                                            value={data.name}
                                            onChange={(e) =>
                                                setData("name", e.target.value)
                                            }
                                            className="h-full flex-1 focus-ring-0  text-white outline-none"
                                        />
                                        {errors.name && (
                                            <div className="text-red-500">
                                                {errors.name}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <label className="roboto-bold font-lg pb-2 text-white">
                                        Nom du CSE
                                    </label>
                                    <div className="rounded-lg h-14 bg-[#FFFFFF33] flex items-center">
                                        <Award className="text-white w-6 h-6 m-3" />
                                        <input
                                            type="text"
                                            name="cse"
                                            value={data.cse}
                                            onChange={(e) =>
                                                setData("cse", e.target.value)
                                            }
                                            className="h-full flex-1 focus-ring-0  text-white outline-none"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-5">
                                <div className="flex flex-col">
                                    <label className="roboto-bold font-lg pb-2 text-white">
                                        Téléphone
                                    </label>
                                    <div className="rounded-lg h-14 bg-[#FFFFFF33] flex items-center">
                                        <Phone className="text-white w-6 h-6 m-3" />
                                        <input
                                            type="text"
                                            name="phone"
                                            value={data.phone}
                                            onChange={(e) =>
                                                setData("phone", e.target.value)
                                            }
                                            className="h-full flex-1 focus-ring-0  text-white outline-none"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <label className="roboto-bold font-lg pb-2 text-white">
                                        Email
                                    </label>
                                    <div className="rounded-lg h-14 bg-[#FFFFFF33] flex items-center">
                                        <Mail className="text-white w-6 h-6 m-3" />
                                        <input
                                            type="text"
                                            name="email"
                                            value={data.email}
                                            onChange={(e) =>
                                                setData("email", e.target.value)
                                            }
                                            className="h-full flex-1 focus-ring-0  text-white outline-none"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="flex flex-col">
                                    <label className="roboto-bold font-lg pb-2 text-white">
                                        Votre message
                                    </label>
                                    <div className="rounded-lg  bg-[#FFFFFF33] h-[200px] flex">
                                        <textarea
                                            name="message"
                                            value={data.message}
                                            onChange={(e) =>
                                                setData(
                                                    "message",
                                                    e.target.value
                                                )
                                            }
                                            className="rounded-lg h-full  md:w-[90%] w-full focus-ring-0 outline-none p-5 text-white"
                                        ></textarea>
                                        <div className="h-full relative w-[10%] hidden md:block">
                                            <button
                                                type="submit"
                                                disabled={processing}
                                                className="w-16 h-16 rounded-full cursor-pointer bg-orange-300 absolute bottom-5 flex justify-center items-center"
                                            >
                                                {processing ? (
                                                    <svg
                                                        className="animate-spin h-10 w-10 mr-2 text-white"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <circle
                                                            className="opacity-25"
                                                            cx="12"
                                                            cy="12"
                                                            r="10"
                                                            stroke="currentColor"
                                                            strokeWidth="4"
                                                        ></circle>
                                                        <path
                                                            className="opacity-75"
                                                            fill="currentColor"
                                                            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                                        ></path>
                                                    </svg>
                                                ) : (
                                                    <Send className="text-white w-6 h-6" />
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="h-full relative w-full md:hidden">
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="w-full h-12 rounded-lg cursor-pointer bg-orange-300 flex justify-center items-center"
                                >
                                    {processing ? (
                                        <svg
                                            className="animate-spin h-10 w-10 mr-2 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            ></circle>
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                            ></path>
                                        </svg>
                                    ) : (
                                        <span className="text-xl roboto-bold text-white">
                                            Envoyer
                                        </span>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
