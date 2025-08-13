import Link from "next/link";
import { FaExclamationTriangle } from "react-icons/fa";

export default function UnauthorizedPage() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="w-full max-w-md rounded-lg bg-white p-8 text-center shadow-md">
                <div className="mb-6">
                    <FaExclamationTriangle className="mx-auto mb-4 h-16 w-16 text-red-500" />
                    <h1 className="mb-2 text-2xl font-bold text-gray-900">
                        Access Denied
                    </h1>
                    <p className="text-gray-600">
                        You don&apos;t have permission to access this page.
                        Admin privileges are required.
                    </p>
                </div>

                <div className="space-y-3">
                    <Link
                        href="/"
                        className="block w-full rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
                    >
                        Go to Homepage
                    </Link>
                    <Link
                        href="/profile"
                        className="block w-full rounded-md bg-gray-200 px-4 py-2 text-gray-800 transition-colors hover:bg-gray-300"
                    >
                        Go to Profile
                    </Link>
                </div>
            </div>
        </div>
    );
}
