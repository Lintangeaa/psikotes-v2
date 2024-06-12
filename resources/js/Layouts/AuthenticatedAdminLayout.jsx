import React, { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/react";

export default function AuthenticatedAdminLayout({ user, header, children }) {
    const [showSidebar, setShowSidebar] = useState(false);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    return (
        <div className="flex h-screen bg-gray-100">
            <div
                className={`flex-shrink-0 ${
                    showSidebar ? "block" : "hidden"
                } bg-white w-64 border-r overflow-y-auto`}
            >
                <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
                    <Link href="/">
                        <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                    </Link>
                    <button
                        onClick={toggleSidebar}
                        className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                    >
                        <svg
                            className="h-6 w-6"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            {showSidebar ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>
                <div className="p-5 flex flex-col pe-20">
                    <NavLink
                        href={route("dashboard.admin")}
                        active={route().current("dashboard.admin")}
                    >
                        Dashboard
                    </NavLink>
                    <NavLink
                        href={route("admin.mahasiswa")}
                        active={route().current("admin.mahasiswa")}
                    >
                        Mahasiswa
                    </NavLink>
                </div>
            </div>

            <div className="flex flex-col w-0 flex-1 overflow-hidden">
                <div className="flex items-center justify-between bg-white border-b border-gray-100 h-16 px-4 sm:px-6 lg:px-8">
                    <div className="flex">
                        <button
                            onClick={toggleSidebar}
                            className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                        >
                            <svg
                                className="h-6 w-6"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                {showSidebar ? (
                                    <></>
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="flex-1 overflow-y-auto">
                    {header && (
                        <header className="bg-white shadow">
                            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                                {header}
                            </div>
                        </header>
                    )}
                    <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none p-10">
                        {children}
                    </main>
                </div>
            </div>
        </div>
    );
}
