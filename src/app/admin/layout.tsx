import { requireAdmin } from "@/lib/admin";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminHeader from "@/components/admin/AdminHeader";

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // This will redirect if user is not admin
    await requireAdmin();

    return (
        <div className="min-h-screen bg-gray-100">
            <AdminHeader />
            <div className="flex">
                <AdminSidebar />
                <main className="flex-1 p-6">{children}</main>
            </div>
        </div>
    );
}
