"use client";

import { useState, useMemo } from "react";
import { FaSearch } from "react-icons/fa";

import Image from "next/image";
type Customer = {
    id: string;
    name: string;
    email: string;
    company: string;
    role: string;
    joined: string;
    status: "Active" | "Inactive" | "Pending";
    avatarUrl?: string; // optional image
    companyLogoUrl?: string;
};

const DUMMY_CUSTOMERS: Customer[] = [
    {
        id: "1",
        name: "Aarav Sharma",
        email: "aarav@devxalpha.com",
        company: "DevX Alpha",
        role: "Product Manager",
        joined: "2024-03-12",
        status: "Active",
        avatarUrl: "",
        companyLogoUrl: "",
    },
    {
        id: "2",
        name: "Meera Patel",
        email: "meera@clientco.io",
        company: "ClientCo",
        role: "Frontend Lead",
        joined: "2024-01-05",
        status: "Pending",
    },
    {
        id: "3",
        name: "Rohan Gupta",
        email: "rohan@startuphub.com",
        company: "StartupHub",
        role: "CTO",
        joined: "2023-11-20",
        status: "Active",
    },
    {
        id: "4",
        name: "Sakshi Verma",
        email: "sakshi@techwave.org",
        company: "TechWave",
        role: "UX Designer",
        joined: "2024-06-02",
        status: "Inactive",
    },
];

const statusClasses: Record<string, string> = {
    Active: "bg-green-100 text-green-800",
    Inactive: "bg-gray-100 text-gray-800",
    Pending: "bg-yellow-100 text-yellow-800",
};

function formatDate(d: string) {
    return new Date(d).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });
}

function Avatar({ name, src }: { name: string; src?: string }) {
    if (src) {
        return (
            <Image
                width={500}
                height={500}
                src={src}
                alt={name}
                className="h-10 w-10 rounded-full border object-cover"
                loading="lazy"
            />
        );
    }
    const initials = name
        .split(" ")
        .map((n) => n[0])
        .slice(0, 2)
        .join("")
        .toUpperCase();
    return (
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-sm font-semibold text-gray-700">
            {initials}
        </div>
    );
}

export default function CustomerPublicPage() {
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState<string>("");

    const filtered = useMemo(() => {
        return DUMMY_CUSTOMERS.filter((c) => {
            const matchesSearch =
                c.name.toLowerCase().includes(search.toLowerCase()) ||
                c.email.toLowerCase().includes(search.toLowerCase()) ||
                c.company.toLowerCase().includes(search.toLowerCase()) ||
                c.role.toLowerCase().includes(search.toLowerCase());
            const matchesStatus = statusFilter
                ? c.status === statusFilter
                : true;
            return matchesSearch && matchesStatus;
        });
    }, [search, statusFilter]);

    return (
        <div className="min-h-screen bg-gray-50 px-4 py-12">
            <div className="mx-auto max-w-7xl space-y-8">
                <h1 className="text-primary text-4xl font-extrabold tracking-tight">
                    Our Customers
                </h1>
                <p className="mt-2 max-w-xl text-lg text-black">
                    Real or dummy, these are the people and companies we work
                    with. You can replace this with live data from your backend
                    or CRM.
                </p>
                {/* Hero / Header */}
                <div
                    className="relative flex flex-col items-center gap-6 overflow-hidden rounded-2xl text-white shadow-lg md:flex-row"
                    style={{
                        backgroundImage: `url('/customer.jpg')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        minHeight: "450px", // Default height
                    }}
                ></div>

                {/* Controls */}
                <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                    <div className="flex flex-1 flex-wrap gap-2">
                        <div className="relative min-w-[220px] flex-1">
                            <input
                                aria-label="Search customers"
                                type="text"
                                placeholder="Search by name, email, company, role"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="focus:ring-primary w-full rounded-lg border border-gray-200 py-2 pr-4 pl-10 shadow-sm focus:ring-2 focus:outline-none"
                            />
                            <FaSearch className="absolute top-2.5 left-3 h-5 w-5 text-gray-400" />
                        </div>
                        <div>
                            <select
                                aria-label="Filter by status"
                                value={statusFilter}
                                onChange={(e) =>
                                    setStatusFilter(e.target.value)
                                }
                                className="rounded-lg border border-gray-200 bg-white px-4 py-2 shadow-sm focus:outline-none"
                            >
                                <option value="">All Status</option>
                                <option value="Active">Active</option>
                                <option value="Pending">Pending</option>
                                <option value="Inactive">Inactive</option>
                            </select>
                        </div>
                    </div>
                    <div className="text-sm text-gray-500">
                        Showing {filtered.length} of {DUMMY_CUSTOMERS.length}{" "}
                        customers
                    </div>
                </div>

                {/* Desktop table */}
                <div className="hidden overflow-hidden rounded-2xl bg-white shadow md:block">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-4 text-left text-xs font-medium tracking-wide uppercase">
                                    Name
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-medium tracking-wide uppercase">
                                    Email
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-medium tracking-wide uppercase">
                                    Company
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-medium tracking-wide uppercase">
                                    Role
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-medium tracking-wide uppercase">
                                    Joined
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-medium tracking-wide uppercase">
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {filtered.map((c) => (
                                <tr
                                    key={c.id}
                                    className="transition-colors duration-150 hover:bg-gray-50"
                                >
                                    <td className="flex items-center gap-3 px-6 py-4">
                                        <Avatar
                                            name={c.name}
                                            src={c.avatarUrl || undefined}
                                        />
                                        <div className="space-y-1">
                                            <div className="font-medium">
                                                {c.name}
                                            </div>
                                            <div className="text-xs text-gray-500">
                                                {c.role}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <a
                                            href={`mailto:${c.email}`}
                                            className="text-sm text-indigo-600 hover:underline"
                                        >
                                            {c.email}
                                        </a>
                                    </td>
                                    <td className="flex items-center gap-2 px-6 py-4">
                                        <div className="flex-shrink-0">
                                            <div className="flex h-8 w-8 items-center justify-center rounded bg-gray-100 text-xs font-semibold">
                                                {c.company
                                                    .split(" ")
                                                    .map((w) => w[0])
                                                    .slice(0, 2)
                                                    .join("")
                                                    .toUpperCase()}
                                            </div>
                                        </div>
                                        <div className="text-sm">
                                            {c.company}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm">
                                        {c.role}
                                    </td>
                                    <td className="px-6 py-4 text-sm">
                                        {formatDate(c.joined)}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span
                                            className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${statusClasses[c.status]}`}
                                        >
                                            {c.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                            {filtered.length === 0 && (
                                <tr>
                                    <td
                                        colSpan={6}
                                        className="px-6 py-12 text-center text-sm text-gray-500"
                                    >
                                        <div className="space-y-2">
                                            <div className="font-medium">
                                                No matching customers.
                                            </div>
                                            <div>
                                                Try clearing filters or
                                                adjusting search terms.
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Mobile cards */}
                <div className="grid grid-cols-1 gap-4 md:hidden">
                    {filtered.map((c) => (
                        <div
                            key={c.id}
                            className="flex flex-col gap-3 rounded-2xl bg-white p-4 shadow-sm transition hover:shadow-md"
                        >
                            <div className="flex items-start justify-between gap-3">
                                <div className="flex items-center gap-3">
                                    <Avatar
                                        name={c.name}
                                        src={c.avatarUrl || undefined}
                                    />
                                    <div>
                                        <div className="font-semibold">
                                            {c.name}
                                        </div>
                                        <div className="text-xs text-gray-500">
                                            {c.role}
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <span
                                        className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${statusClasses[c.status]}`}
                                    >
                                        {c.status}
                                    </span>
                                </div>
                            </div>
                            <div className="text-sm">
                                <div>
                                    <strong>Company:</strong> {c.company}
                                </div>
                                <div>
                                    <strong>Email:</strong>{" "}
                                    <a
                                        href={`mailto:${c.email}`}
                                        className="text-indigo-600 hover:underline"
                                    >
                                        {c.email}
                                    </a>
                                </div>
                                <div>
                                    <strong>Joined:</strong>{" "}
                                    {formatDate(c.joined)}
                                </div>
                            </div>
                        </div>
                    ))}
                    {filtered.length === 0 && (
                        <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
                            <div className="mb-2 text-lg font-medium">
                                No customers to display
                            </div>
                            <div className="text-sm text-gray-500">
                                Add some customers from the backend or adjust
                                filters/search.
                            </div>
                        </div>
                    )}
                </div>

                <div className="text-center text-sm text-gray-500">
                    This is dummy data. Replace with your real backend API and
                    add pagination, sorting, and authentication as needed.
                </div>
            </div>
        </div>
    );
}
