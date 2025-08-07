"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
    FaSearch,
    FaBell,
    FaFileAlt,
    FaBoxOpen,
    FaShippingFast,
    FaTruck,
    FaClock,
    FaMapMarkedAlt,
} from "react-icons/fa";

interface Order {
    id: string;
    customer: string;
    trackingId: string;
    status: string;
    orderDate: string;
    estimatedDelivery: string;
    shippingMethod: string;
}

const DUMMY_ORDERS: Order[] = [
    {
        id: "ORD-1001",
        customer: "Aarav Sharma",
        trackingId: "TRK123456789",
        status: "In Transit",
        orderDate: "2025-07-25",
        estimatedDelivery: "2025-08-07",
        shippingMethod: "Standard (5-10 business days)",
    },
    {
        id: "ORD-1002",
        customer: "Meera Patel",
        trackingId: "TRK987654321",
        status: "Delivered",
        orderDate: "2025-07-10",
        estimatedDelivery: "2025-07-16",
        shippingMethod: "Express (2-3 business days)",
    },
    {
        id: "ORD-1003",
        customer: "Rohan Gupta",
        trackingId: "TRK555666777",
        status: "Pending",
        orderDate: "2025-08-01",
        estimatedDelivery: "2025-08-12",
        shippingMethod: "Standard (5-10 business days)",
    },
];

const statusBadge: Record<string, string> = {
    Pending: "bg-yellow-100 text-yellow-800",
    Shipped: "bg-blue-100 text-blue-800",
    "In Transit": "bg-indigo-100 text-indigo-800",
    Delivered: "bg-green-100 text-green-800",
    Delayed: "bg-red-100 text-red-800",
};

export default function DeliveryPage() {
    const [trackInput, setTrackInput] = useState<string>("");
    const [found, setFound] = useState<Order | null>(null);
    const [error, setError] = useState<string>("");

    const handleTrack = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");
        const result = DUMMY_ORDERS.find(
            (o) =>
                o.trackingId.toLowerCase() === trackInput.trim().toLowerCase()
        );
        if (result) {
            setFound(result);
        } else {
            setFound(null);
            setError("No shipment found with that tracking ID.");
        }
    };

    return (
        <div className="min-h-screen bg-white px-6 py-14 md:px-10">
            <div className="mx-auto max-w-7xl space-y-16">
                {/* Hero Section */}
                <section className="flex flex-col items-center gap-10 md:flex-row">
                    <div className="order-2 md:order-1 md:w-1/2">
                        <Image
                            src="/delivery.jpg"
                            alt="Delivery tracking"
                            width={600}
                            height={800}
                            className="rounded-xl shadow-xl"
                        />
                    </div>

                    <div className="order-1 space-y-6 md:order-2 md:w-1/2">
                        <h1 className="text-primary text-4xl">
                            How Delivery Tracking Works
                        </h1>
                        <p className="text-lg leading-relaxed text-gray-600">
                            DevX Alpha provides transparent and real-time
                            tracking so you&apos;re always in the loop. Monitor
                            your order every step of the way – from confirmation
                            to doorstep delivery – with instant updates and
                            seamless visibility.
                        </p>

                        <div className="space-y-4 text-gray-800">
                            {[
                                {
                                    icon: FaSearch,
                                    title: "Track",
                                    text: "Real-time access to your order status using your tracking ID.",
                                },
                                {
                                    icon: FaClock,
                                    title: "Timeline",
                                    text: "Get accurate estimated delivery dates for better planning.",
                                },
                                {
                                    icon: FaTruck,
                                    title: "Shipping Modes",
                                    text: "Choose from Standard, Express or International shipping.",
                                },
                                {
                                    icon: FaBell,
                                    title: "Live Updates",
                                    text: "Stay updated via email and SMS alerts for every milestone.",
                                },
                                {
                                    icon: FaFileAlt,
                                    title: "Shipping Policy",
                                    text: "Understand our delivery terms, speeds, and guarantees.",
                                },
                            ].map((item, index) => (
                                <div
                                    className="flex items-start gap-4"
                                    key={index}
                                >
                                    <item.icon className="text-primary mt-1 text-xl" />
                                    <p>
                                        <span className="font-semibold">
                                            {item.title}:
                                        </span>{" "}
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Grid: Policy & Tracker */}
                <section className="grid gap-10 md:grid-cols-2">
                    <div className="rounded-xl bg-gray-50 p-6 shadow-md md:p-8">
                        <h2 className="mb-4 flex items-center gap-2 text-2xl font-semibold">
                            <FaShippingFast className="text-primary" /> Shipping
                            Policy
                        </h2>
                        <ul className="space-y-3 text-sm text-gray-700">
                            <li>
                                <FaTruck className="text-primary mr-2 inline" />{" "}
                                Free shipping above ₹1,499 within India.
                            </li>
                            <li>
                                <FaClock className="text-primary mr-2 inline" />{" "}
                                Standard: 5–10 business days.
                            </li>
                            <li>
                                <FaTruck className="text-primary mr-2 inline" />{" "}
                                Express: 2–3 days (extra charges apply).
                            </li>
                            <li>
                                <FaMapMarkedAlt className="text-primary mr-2 inline" />{" "}
                                International: 8–15 days, calculated at
                                checkout.
                            </li>
                            <li>
                                <FaBoxOpen className="text-primary mr-2 inline" />{" "}
                                Orders ship within 24 hrs if in stock.
                            </li>
                            <li>
                                <FaSearch className="text-primary mr-2 inline" />{" "}
                                Fully trackable shipments with a tracking ID.
                            </li>
                        </ul>
                    </div>

                    <div className="rounded-xl bg-gray-50 p-6 shadow-md md:p-8">
                        <h2 className="mb-4 text-2xl font-semibold">
                            Track Your Order
                        </h2>
                        <form
                            onSubmit={handleTrack}
                            className="flex flex-col gap-4"
                        >
                            <input
                                value={trackInput}
                                onChange={(e) => setTrackInput(e.target.value)}
                                placeholder="Enter Tracking ID (e.g. TRK123456789)"
                                className="rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-red-500 focus:outline-none"
                                required
                            />
                            <button
                                type="submit"
                                className="bg-primary rounded-md py-2 text-white transition hover:bg-red-800"
                            >
                                Track Shipment
                            </button>
                            {error && (
                                <p className="text-primary text-sm">{error}</p>
                            )}
                        </form>

                        {found && (
                            <div className="mt-6 space-y-2 rounded-lg border bg-white p-4 text-sm">
                                <p>
                                    <strong>Order:</strong> {found.id}
                                </p>
                                <p>
                                    <strong>Customer:</strong> {found.customer}
                                </p>
                                <p>
                                    <strong>Shipping Method:</strong>{" "}
                                    {found.shippingMethod}
                                </p>
                                <p>
                                    <strong>Order Date:</strong>{" "}
                                    {new Date(
                                        found.orderDate
                                    ).toLocaleDateString()}
                                </p>
                                <p>
                                    <strong>Estimated Delivery:</strong>{" "}
                                    {new Date(
                                        found.estimatedDelivery
                                    ).toLocaleDateString()}
                                </p>
                                <p>
                                    <strong>Status:</strong>{" "}
                                    <span
                                        className={`inline-block rounded-full px-2 py-1 text-xs font-medium ${statusBadge[found.status]}`}
                                    >
                                        {found.status}
                                    </span>
                                </p>
                            </div>
                        )}
                    </div>
                </section>

                {/* Recent Deliveries Table */}
                <section className="rounded-xl bg-gray-50 p-6 shadow-md md:p-8">
                    <h2 className="mb-4 text-2xl font-semibold">
                        Recent Deliveries
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full border-collapse text-left text-sm">
                            <thead className="bg-gray-100 text-gray-700">
                                <tr>
                                    <th className="px-4 py-2">Order ID</th>
                                    <th className="px-4 py-2">Customer</th>
                                    <th className="px-4 py-2">Tracking ID</th>
                                    <th className="px-4 py-2">Method</th>
                                    <th className="px-4 py-2">ETA</th>
                                    <th className="px-4 py-2">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {DUMMY_ORDERS.map((order) => (
                                    <tr
                                        key={order.id}
                                        className="hover:bg-white"
                                    >
                                        <td className="px-4 py-2">
                                            {order.id}
                                        </td>
                                        <td className="px-4 py-2">
                                            {order.customer}
                                        </td>
                                        <td className="px-4 py-2">
                                            {order.trackingId}
                                        </td>
                                        <td className="px-4 py-2">
                                            {order.shippingMethod}
                                        </td>
                                        <td className="px-4 py-2">
                                            {new Date(
                                                order.estimatedDelivery
                                            ).toLocaleDateString()}
                                        </td>
                                        <td className="px-4 py-2">
                                            <span
                                                className={`rounded-full px-2 py-1 text-xs font-semibold ${statusBadge[order.status]}`}
                                            >
                                                {order.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                <p className="mt-10 text-center text-xs text-gray-400">
                    * This is a demo delivery page. Replace dummy data with live
                    backend APIs for production.
                </p>
            </div>
        </div>
    );
}
