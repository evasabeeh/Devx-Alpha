"use client";

import { useUser } from "@/lib/redux";
import { FaSignOutAlt, FaUser } from "react-icons/fa";

export default function AdminHeader() {
    const { user, logout } = useUser();

    const handleLogout = async () => {
        await logout("/");
    };

    return (
        <header className="border-b bg-white shadow-sm">
            <div className="flex items-center justify-between px-6 py-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">
                        Admin Panel
                    </h1>
                    <p className="text-sm text-gray-600">
                        Manage your application
                    </p>
                </div>

                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <FaUser className="text-gray-400" />
                        <span className="text-sm text-gray-700">
                            {user?.name || user?.email}
                        </span>
                        <span className="rounded bg-blue-100 px-2 py-1 text-xs text-blue-800">
                            Admin
                        </span>
                    </div>

                    <button
                        onClick={handleLogout}
                        className="flex items-center space-x-2 rounded-md px-3 py-2 text-sm text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900"
                    >
                        <FaSignOutAlt />
                        <span>Logout</span>
                    </button>
                </div>
            </div>
        </header>
    );
}
