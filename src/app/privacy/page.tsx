export const metadata = {
    title: "Privacy Policy",
    description: "How we collect, use, and protect your personal data.",
};

export default function Page() {
    return (
        <main className="mx-auto max-w-4xl px-6 py-16">
            <h1 className="mb-6 text-4xl font-bold">Privacy Policy</h1>

            <p className="mb-6">
                <strong className="text-red-600">DevX Alpha</strong> (“we”,
                “our”, or “us”) is committed to protecting your privacy. This
                policy explains how we collect, use, and safeguard your
                information when you visit our website or use our services.
            </p>

            <section className="mb-8">
                <h2 className="mb-2 text-2xl font-semibold">
                    1. Information We Collect
                </h2>
                <p>We may collect the following types of information:</p>
                <ul className="list-disc pl-6">
                    <li>
                        Personal information you provide directly (name, email,
                        contact details).
                    </li>
                    <li>
                        Usage data (pages visited, time spent, interaction
                        patterns).
                    </li>
                    <li>
                        Cookies and tracking technologies (see Cookies Policy).
                    </li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="mb-2 text-2xl font-semibold">
                    2. How We Use Your Information
                </h2>
                <p>We use the information to:</p>
                <ul className="list-disc pl-6">
                    <li>Provide and maintain our services.</li>
                    <li>
                        Communicate with you about projects, updates, or
                        support.
                    </li>
                    <li>Improve user experience and analyze trends.</li>
                    <li>Comply with legal obligations.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="mb-2 text-2xl font-semibold">
                    3. Cookies & Tracking
                </h2>
                <p>
                    We use cookies and similar tracking technologies to enhance
                    your browsing experience. For detailed information, please
                    refer to our{" "}
                    <a href="/cookies" className="underline">
                        Cookies Policy
                    </a>
                    .
                </p>
            </section>

            <section className="mb-8">
                <h2 className="mb-2 text-2xl font-semibold">4. Data Sharing</h2>
                <p>
                    We do not sell your personal data. We may share information
                    with trusted third-party service providers who assist in
                    delivering our services (e.g., analytics, hosting), provided
                    they agree to keep it confidential.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="mb-2 text-2xl font-semibold">
                    5. Data Security
                </h2>
                <p>
                    We implement reasonable measures to protect your data from
                    unauthorized access, alteration, or disclosure. However, no
                    method of transmission over the internet is 100% secure.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="mb-2 text-2xl font-semibold">6. Your Rights</h2>
                <p>
                    Depending on your jurisdiction, you may have rights to
                    access, correct, or delete your personal information. To
                    exercise these rights, contact us using the details below.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="mb-2 text-2xl font-semibold">
                    7. Changes to This Policy
                </h2>
                <p>
                    We may update this Privacy Policy periodically. Changes will
                    be posted here with an updated “Last Updated” date.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="mb-2 text-2xl font-semibold">8. Contact Us</h2>
                <p>
                    If you have questions about this policy, reach out at:{" "}
                    <br />
                    <strong>Email:</strong>{" "}
                    <a href="mailto:admin@devxalpha.com" className="underline">
                        admin@devxalpha.com
                    </a>{" "}
                    <br />
                </p>
            </section>

            <p className="mt-12 text-sm">Last updated: August 1, 2025</p>
        </main>
    );
}
