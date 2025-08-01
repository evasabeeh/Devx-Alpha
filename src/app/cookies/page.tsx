export const metadata = {
    title: "Cookies Policy",
    description: "Explanation of cookies used on our website.",
};

export default function Page() {
    return (
        <main className="mx-auto max-w-4xl px-6 py-16">
            <h1 className="mb-6 text-4xl font-bold">Cookies Policy</h1>

            <p className="mb-6">
                This Cookies Policy explains how <strong>DevX Alpha</strong>{" "}
                uses cookies and similar tracking technologies on our website.
                By using the site, you consent to the use of cookies as
                described below.
            </p>

            <section className="mb-8">
                <h2 className="mb-2 text-2xl font-semibold">
                    1. What Are Cookies?
                </h2>
                <p>
                    Cookies are small text files placed on your device when you
                    visit a website. They help the site remember your
                    preferences and improve your experience.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="mb-2 text-2xl font-semibold">
                    2. Types of Cookies We Use
                </h2>
                <ul className="list-disc pl-6">
                    <li>
                        <strong>Essential Cookies:</strong> Required for the
                        basic functioning of the website (e.g., session
                        management).
                    </li>
                    <li>
                        <strong>Analytics Cookies:</strong> Help us understand
                        how users interact with the site so we can improve it.
                    </li>
                    <li>
                        <strong>Marketing Cookies:</strong> Used to deliver
                        relevant ads and measure campaign performance.
                    </li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="mb-2 text-2xl font-semibold">
                    3. Consent & Control
                </h2>
                <p>
                    On your first visit, you will see a cookie banner where you
                    can accept or decline non-essential cookies. You can also
                    manage preferences by clearing cookies from your browser
                    settings.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="mb-2 text-2xl font-semibold">
                    4. Third-Party Cookies
                </h2>
                <p>
                    Some cookies may be set by third-party services integrated
                    on our site (e.g., analytics providers). We do not control
                    their behavior; check their respective policies for more
                    information.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="mb-2 text-2xl font-semibold">5. Updates</h2>
                <p>
                    We may update this Cookies Policy from time to time. Any
                    changes will be posted here with a new “Last updated” date.
                </p>
            </section>

            <p className="mt-12 text-sm">Last updated: August 1, 2025</p>
        </main>
    );
}
