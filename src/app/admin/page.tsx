import { prisma } from "@/lib/prisma";
import {
    FaUsers,
    FaBriefcase,
    FaBlog,
    FaEnvelope,
    FaFileAlt,
} from "react-icons/fa";

async function getStats() {
    const [
        userCount,
        teamCount,
        jobCount,
        blogCount,
        contactCount,
        applicationCount,
    ] = await Promise.all([
        prisma.user.count(),
        prisma.teamMember.count(),
        prisma.job.count(),
        prisma.blogPost.count(),
        prisma.contactSubmission.count(),
        prisma.jobApplication.count(),
    ]);

    return {
        users: userCount,
        team: teamCount,
        jobs: jobCount,
        blogs: blogCount,
        contacts: contactCount,
        applications: applicationCount,
    };
}

export default async function AdminDashboard() {
    const stats = await getStats();

    const statCards = [
        {
            title: "Total Users",
            value: stats.users,
            icon: FaUsers,
            color: "bg-blue-500",
        },
        {
            title: "Team Members",
            value: stats.team,
            icon: FaUsers,
            color: "bg-green-500",
        },
        {
            title: "Job Postings",
            value: stats.jobs,
            icon: FaBriefcase,
            color: "bg-purple-500",
        },
        {
            title: "Applications",
            value: stats.applications,
            icon: FaFileAlt,
            color: "bg-indigo-500",
        },
        {
            title: "Blog Posts",
            value: stats.blogs,
            icon: FaBlog,
            color: "bg-orange-500",
        },
        {
            title: "Contact Submissions",
            value: stats.contacts,
            icon: FaEnvelope,
            color: "bg-red-500",
        },
    ];

    return (
        <div>
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                <p className="text-gray-600">Overview of your application</p>
            </div>

            <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                {statCards.map((card) => {
                    const Icon = card.icon;
                    return (
                        <div
                            key={card.title}
                            className="rounded-lg border bg-white p-6 shadow-sm"
                        >
                            <div className="flex items-center">
                                <div className={`${card.color} rounded-lg p-3`}>
                                    <Icon className="h-6 w-6 text-white" />
                                </div>
                                <div className="ml-4">
                                    <p className="text-sm font-medium text-gray-600">
                                        {card.title}
                                    </p>
                                    <p className="text-2xl font-bold text-gray-900">
                                        {card.value}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div className="rounded-lg border bg-white p-6 shadow-sm">
                    <h2 className="mb-4 text-lg font-semibold text-gray-900">
                        Quick Actions
                    </h2>
                    <div className="space-y-3">
                        <a
                            href="/admin/team"
                            className="block rounded-lg border p-3 transition-colors hover:bg-gray-50"
                        >
                            <div className="font-medium">Manage Team</div>
                            <div className="text-sm text-gray-600">
                                Add or edit team members
                            </div>
                        </a>
                        <a
                            href="/admin/jobs"
                            className="block rounded-lg border p-3 transition-colors hover:bg-gray-50"
                        >
                            <div className="font-medium">Post New Job</div>
                            <div className="text-sm text-gray-600">
                                Create new job listings
                            </div>
                        </a>
                        <a
                            href="/admin/blog"
                            className="block rounded-lg border p-3 transition-colors hover:bg-gray-50"
                        >
                            <div className="font-medium">Write Blog Post</div>
                            <div className="text-sm text-gray-600">
                                Create new blog content
                            </div>
                        </a>
                    </div>
                </div>

                <div className="rounded-lg border bg-white p-6 shadow-sm">
                    <h2 className="mb-4 text-lg font-semibold text-gray-900">
                        Recent Activity
                    </h2>
                    <div className="space-y-3">
                        <div className="text-sm text-gray-600">
                            No recent activity to display
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
