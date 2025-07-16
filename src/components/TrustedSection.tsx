import Image from 'next/image';

export default function TrustedSection() {
    const illustrations = [
        {
            src: '/illustrations/camera.png',
            alt: 'camera illustration',
            tagline: 'Camera',
        },
        {
            src: '/illustrations/cloudly.png',
            alt: 'cloudly illustration',
            tagline: 'Cloudly',
        },
        {
            src: '/illustrations/financely.png',
            alt: 'financely illustration',
            tagline: 'Financely',
        },
        {
            src: '/illustrations/techlify.png',
            alt: 'techlify illustration',
            tagline: 'Techlify',
        },
    ];
    return (
        <div className="my-10 px-4 md:px-40">
            <h2 className="pb-10 text-center">Trusted By 100+ Clients</h2>
            <div className="flex flex-wrap justify-between">
                {illustrations.map((illustration, index) => (
                    <div key={index} className="flex items-center">
                        <Image
                            key={illustration.src}
                            src={illustration.src}
                            alt={illustration.alt}
                            width={40}
                            height={40}
                            className="inline"
                        />
                        <span className="font-dmSans400 text-faded-text ml-2 text-3xl font-bold">
                            {illustration.tagline}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
