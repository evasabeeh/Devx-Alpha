"use client";

import { useState, useMemo } from "react";
import { FaSearch } from "react-icons/fa";

import Head from "next/head";
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
      <img
        src={src}
        alt={name}
        className="h-10 w-10 rounded-full object-cover border"
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
    <div className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-200 text-sm font-semibold text-gray-700">
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
      const matchesStatus = statusFilter ? c.status === statusFilter : true;
      return matchesSearch && matchesStatus;
    });
  }, [search, statusFilter]);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto space-y-8">
        <h1 className="text-4xl font-extrabold tracking-tight  text-red-700">
          Our Customers
        </h1>
        <p className="mt-2 text-lg max-w-xl text-black">
          Real or dummy, these are the people and companies we work with.
          You can replace this with live data from your backend or CRM.
        </p>
        {/* Hero / Header */}
        <div
          className="relative overflow-hidden rounded-2xl text-white flex flex-col md:flex-row items-center gap-6 shadow-lg"
          style={{
            backgroundImage: `url('/customer.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "450px", // Default height
          }}
        >
        </div>



        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="flex gap-2 flex-1 flex-wrap">
            <div className="relative flex-1 min-w-[220px]">
              <input
                aria-label="Search customers"
                type="text"
                placeholder="Search by name, email, company, role"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <FaSearch className="w-5 h-5 absolute left-3 top-2.5 text-gray-400" />
            </div>
            <div>
              <select
                aria-label="Filter by status"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-2 rounded-lg border border-gray-200 shadow-sm bg-white focus:outline-none"
              >
                <option value="">All Status</option>
                <option value="Active">Active</option>
                <option value="Pending">Pending</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
          </div>
          <div className="text-sm text-gray-500">
            Showing {filtered.length} of {DUMMY_CUSTOMERS.length} customers
          </div>
        </div>

        {/* Desktop table */}
        <div className="hidden md:block overflow-hidden bg-white rounded-2xl shadow">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wide">
                  Name
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wide">
                  Email
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wide">
                  Company
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wide">
                  Role
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wide">
                  Joined
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wide">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filtered.map((c) => (
                <tr
                  key={c.id}
                  className="hover:bg-gray-50 transition-colors duration-150"
                >
                  <td className="px-6 py-4 flex items-center gap-3">
                    <Avatar name={c.name} src={c.avatarUrl || undefined} />
                    <div className="space-y-1">
                      <div className="font-medium">{c.name}</div>
                      <div className="text-xs text-gray-500">{c.role}</div>
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
                  <td className="px-6 py-4 flex items-center gap-2">
                    <div className="flex-shrink-0">
                      <div className="h-8 w-8 rounded bg-gray-100 flex items-center justify-center text-xs font-semibold">
                        {c.company
                          .split(" ")
                          .map((w) => w[0])
                          .slice(0, 2)
                          .join("")
                          .toUpperCase()}
                      </div>
                    </div>
                    <div className="text-sm">{c.company}</div>
                  </td>
                  <td className="px-6 py-4 text-sm">{c.role}</td>
                  <td className="px-6 py-4 text-sm">{formatDate(c.joined)}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${statusClasses[c.status]}`}
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
                      <div className="font-medium">No matching customers.</div>
                      <div>Try clearing filters or adjusting search terms.</div>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden grid grid-cols-1 gap-4">
          {filtered.map((c) => (
            <div
              key={c.id}
              className="bg-white rounded-2xl shadow-sm p-4 flex flex-col gap-3 hover:shadow-md transition"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <Avatar name={c.name} src={c.avatarUrl || undefined} />
                  <div>
                    <div className="font-semibold">{c.name}</div>
                    <div className="text-xs text-gray-500">{c.role}</div>
                  </div>
                </div>
                <div>
                  <span
                    className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${statusClasses[c.status]}`}
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
                  <strong>Joined:</strong> {formatDate(c.joined)}
                </div>
              </div>
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="bg-white rounded-2xl shadow-sm p-6 text-center">
              <div className="text-lg font-medium mb-2">
                No customers to display
              </div>
              <div className="text-sm text-gray-500">
                Add some customers from the backend or adjust filters/search.
              </div>
            </div>
          )}
        </div>

        <div className="text-sm text-gray-500 text-center">
          This is dummy data. Replace with your real backend API and add
          pagination, sorting, and authentication as needed.
        </div>
      </div>
    </div>
  );
}



