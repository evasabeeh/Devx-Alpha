import Image from "next/image";

export default function Hero() {
    const client_images = [
        {
            src: "/client_1.jpg",
            name: "Client 1",
        },
        {
            src: "/client_2.jpg",
            name: "Client 1",
        },
        {
            src: "/client_3.jpg",
            name: "Client 1",
        },
    ];
    return (
        <div className="bg-black pt-10 text-white">
            <div className="bg-[url('/red_bg.png')] bg-cover bg-top px-4 pb-10 md:px-20">
                {/* Navbar */}

                {/* Main Content */}
                <div className="mb-10 flex-none items-center gap-10 md:flex">
                    <div className="mb-10 w-full text-center md:mb-0 md:w-1/3 md:text-left">
                        <p className="font-lato900 word mb-10 text-5xl font-bold md:mb-0 md:text-5xl">
                            Maximize your Efficiency with DevX Alpha
                        </p>
                    </div>
                    <div className="w-full md:w-1/3">
                        <Image
                            src={"/star.png"}
                            alt="Star Image"
                            width={500}
                            height={500}
                            className="mx-auto"
                        />
                    </div>
                    <div
                        className={`border-faded-text font-montserrat400 w-full rounded-2xl border-2 px-5 py-10 md:w-1/3`}
                    >
                        Agency that build many amazing products to boost your
                        business to next level.
                    </div>
                </div>

                <div className="flex-none gap-10 md:flex">
                    <div className="bg-primary mb-10 w-full rounded-2xl px-5 py-10 text-white md:mb-0 md:w-2/4">
                        <p className={`font-afacad700 mb-4 text-3xl`}>
                            Global Partners
                        </p>
                        <p className="font-montserrat400">
                            Agency that build many amazing products to boost
                            your business to next level.
                        </p>
                    </div>
                    <div className="mb-10 w-full rounded-2xl bg-white px-5 py-10 text-center text-black md:mb-0 md:w-1/4">
                        <Image
                            width={100}
                            height={100}
                            src="/logo_black.svg"
                            alt="Logo"
                            className="mx-auto"
                        />
                        <p className={"font-afacad700 text-3xl"}>50k</p>
                        <p className="font-montserrat400">
                            286 Contributions in the last year
                        </p>
                    </div>
                    <div className="bg-primary mb-10 w-full rounded-2xl px-5 py-10 text-white md:mb-0 md:w-1/4">
                        <p className="font-afacad700 text-3xl">5000+</p>
                        <p className="font-afacad700 mb-4 text-2xl">
                            Top Clients
                        </p>
                        <div>
                            <ul className="list-none">
                                {client_images.map((client, index) => (
                                    <li key={index} className="inline-block">
                                        <Image
                                            width={50}
                                            height={50}
                                            src={client.src}
                                            alt={client.name}
                                            className="rounded-full border-2 border-white"
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
