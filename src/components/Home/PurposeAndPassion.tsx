import Image from "next/image";

export default function PurposeAndPassion() {
    return (
        <div className="mb-10 flex-none items-center gap-5 px-4 md:flex md:px-20">
            <div className="font-montserrat400 mb-10 w-full md:mb-0 md:w-1/2">
                <p className="tag mb-10">about us</p>
                <h2 className="font-lato900 text-2xl font-bold">
                    Our Purpose & Passion
                </h2>
                <br />
                <p>
                    At Devx Alpha, we don’t just offer products—we craft
                    experiences. Whether it's through our thoughtfully designed
                    [products/services], attention to detail, or commitment to
                    quality, everything we do is rooted in creativity, care, and
                    connection. We aim to inspire, serve, and exceed
                    expectations by understanding your needs and turning ideas
                    into impactful results.
                </p>
                <br />
                <p>
                    With a focus on authenticity and innovation, we continuously
                    evolve to bring fresh ideas to life while staying true to
                    our core values. Every step—from concept to creation—is
                    guided by a deep passion for excellence and a desire to make
                    a meaningful difference in the lives of our customers. Your
                    trust drives us, and your satisfaction is our ultimate
                    reward.
                </p>
            </div>
            <div className="w-full md:w-1/2">
                <Image
                    src={"/purpose.jpg"}
                    alt="passion"
                    width={500}
                    height={100}
                    className="w-full"
                />
            </div>
        </div>
    );
}
