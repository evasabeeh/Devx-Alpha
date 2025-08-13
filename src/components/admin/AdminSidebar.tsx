"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    FaTachometerAlt,
    FaUsers,
    FaBriefcase,
    FaBlog,
    FaEnvelope,
    FaUserShield,
    FaFileAlt,
} from "react-icons/fa";

const menuItems = [
    {
        href: "/admin",
        label: "Dashboard",
        icon: FaTachometerAlt,
    },
    {
        href: "/admin/users",
        label: "Users",
        icon: FaUserShield,
    },
    {
        href: "/admin/team",
        label: "Team Members",
        icon: FaUsers,
    },
    {
        href: "/admin/jobs",
        label: "Jobs",
        icon: FaBriefcase,
    },
    {
        href: "/admin/applications",
        label: "Applications",
        icon: FaFileAlt,
    },
    {
        href: "/admin/blog",
        label: "Blog Posts",
        icon: FaBlog,
    },
    {
        href: "/admin/contacts",
        label: "Contact Submissions",
        icon: FaEnvelope,
    },
];

export default function AdminSidebar() {
    const pathname = usePathname();

    return (
        <aside className="min-h-screen w-64 border-r bg-white shadow-sm">
            <nav className="p-4">
                <ul className="space-y-2">
                    {menuItems.map((item) => {
                        const isActive = pathname === item.href;
                        const Icon = item.icon;

                        return (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={`flex items-center space-x-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                                        isActive
                                            ? "bg-blue-100 text-blue-700"
                                            : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                                    }`}
                                >
                                    <Icon className="h-5 w-5" />
                                    <span>{item.label}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </aside>
    );
}
