export const metadata = {
    title: "Terms & Conditions",
    description: "Terms and conditions for using our digital agency services.",
};

export default function Page() {
    return (
        <main className="mx-auto max-w-4xl px-6 py-16">
            <h1 className="mb-6 text-4xl font-bold">Terms & Conditions</h1>

            <p className="mb-6">
                Welcome to <strong className="text-red-500">DevX Alpha</strong>.
                By accessing or using our website, services, or products, you
                agree to be bound by the following Terms and Conditions. If you
                do not agree, please do not use our services.
            </p>

            <section className="mb-8">
                <h2 className="mb-2 text-2xl font-semibold">1. Definitions</h2>
                <p>
                    <strong>“Company”</strong>, “we”, “our” or “us” refers to{" "}
                    <strong>DevX Alpha</strong>. <strong>“Services”</strong>{" "}
                    refers to any digital products, development, design,
                    marketing, or consulting services we provide.{" "}
                    <strong>“Client”</strong> or “you” refers to the individual
                    or entity using our services.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="mb-2 text-2xl font-semibold">
                    2. Use of Services
                </h2>
                <p>
                    You agree to use our services only for lawful purposes and
                    in compliance with all applicable laws and regulations. You
                    must not misuse our website by attempting to hack, disrupt,
                    or harm the platform. We reserve the right to suspend or
                    terminate access if these terms are violated.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="mb-2 text-2xl font-semibold">
                    3. Intellectual Property
                </h2>
                <p>
                    All content, code, graphics, designs, and products developed
                    by us are the property of <strong>DevX Alpha</strong>,
                    unless otherwise agreed in writing. Clients may not copy,
                    reproduce, or distribute our intellectual property without
                    prior written consent.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="mb-2 text-2xl font-semibold">
                    4. Payments & Invoices
                </h2>
                <p>
                    All services are subject to agreed pricing and payment terms
                    as stated in the project contract. 50% of the total payment
                    is due upon signing the service agreement, and the remaining
                    50% is payable upon successful delivery of the service. Late
                    payments may result in suspension of services until dues are
                    cleared.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="mb-2 text-2xl font-semibold">
                    5. Third-Party Services
                </h2>
                <p>
                    Our website or services may include links or integrations
                    with third-party platforms. We are not responsible for the
                    content, terms, or privacy practices of those third parties.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="mb-2 text-2xl font-semibold">
                    6. Limitation of Liability
                </h2>
                <p>
                    We strive to deliver reliable and high-quality services, but
                    we are not liable for indirect damages, loss of profits, or
                    consequential losses arising from the use of our services
                    beyond what is explicitly agreed. Our maximum liability
                    shall not exceed the total amount paid by the client for the
                    specific service.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="mb-2 text-2xl font-semibold">7. Termination</h2>
                <p>
                    We may suspend or terminate services at any time if there is
                    a breach of these Terms & Conditions or misuse of our
                    platform. Clients may terminate projects by giving written
                    notice as per the agreed contract.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="mb-2 text-2xl font-semibold">
                    8. Governing Law
                </h2>
                <p>
                    These Terms shall be governed and interpreted in accordance
                    with the laws of <strong>Uttar Pradesh,India</strong>. Any
                    disputes shall be resolved under the jurisdiction of the
                    courts in <strong>Mirzapur</strong>.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="mb-2 text-2xl font-semibold">
                    9. Changes to Terms
                </h2>
                <p>
                    We reserve the right to update or modify these Terms &
                    Conditions at any time. Updates will be reflected on this
                    page with a new “Last Updated” date.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="mb-2 text-2xl font-semibold">10. Contact</h2>
                <p>
                    If you have any questions regarding these terms, please
                    contact us at: <br />
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
