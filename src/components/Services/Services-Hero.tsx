'use client';

type HeroProps = {
    title: string;
    description: string;
    image: string;
};

export default function Hero({ title, description, image }: HeroProps) {
    return (
        <section className="relative mt-30 w-full md:mt-40 lg:mt-50">

            <div className="block px-6 py-8 text-center md:hidden">
                <h3 className="font-lato900 mb-4 text-2xl font-bold">{title}</h3>
                <p className="font-lato400 text-sm text-gray-700">{description}</p>
            </div>

            <div className="h-[500px] w-full">
                <img
                    src={image}
                    alt="Background"
                    className="h-full w-full object-cover"
                />

                <div className="font-lato900 absolute top-[-100] right-[-120] hidden w-[80%] -translate-x-1/2 transform rounded-xl bg-white px-25 py-12 text-center sm:w-[70%] md:block md:w-[50%]">
                    <h3 className="mb-15 text-2xl font-bold">{title}</h3>
                    <p className="font-lato400 text-sm text-gray-700">{description}</p>
                </div>
            </div>
        </section>
    );
}
