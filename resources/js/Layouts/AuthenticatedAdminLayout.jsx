import React, { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/Sidebar/NavLink";
import { Link } from "@inertiajs/react";
import { FaUserGraduate } from "react-icons/fa6";
import { RiDashboardFill } from "react-icons/ri";

export default function AuthenticatedAdminLayout({ user, header, children }) {
    const [showSidebar, setShowSidebar] = useState(true);

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
                        <ApplicationLogo className="block w-auto text-gray-800 fill-current h-9" />
                    </Link>
                    <button
                        onClick={toggleSidebar}
                        className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                    >
                        <svg
                            className="w-6 h-6"
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
                <div className="flex flex-col p-5 space-y-2 pe-20">
                    <NavLink
                        href={route("dashboard.admin")}
                        active={route().current("dashboard.admin")}
                    >
                        <RiDashboardFill />
                        <p>Dashboard</p>
                    </NavLink>
                    <NavLink
                        href={route("admin.mahasiswa")}
                        active={
                            route().current("admin.mahasiswa") ||
                            route().current("mahasiswa.create") ||
                            route().current("mahasiswa.edit")
                        }
                    >
                        <FaUserGraduate />
                        <p>Mahasiswa</p>
                    </NavLink>
                </div>
            </div>

            <div className="flex flex-col flex-1 w-0 overflow-hidden">
                <div className="flex items-center justify-between h-16 px-4 bg-white border-b border-gray-100 sm:px-6 lg:px-8">
                    <div className="flex">
                        <button
                            onClick={toggleSidebar}
                            className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                        >
                            <svg
                                className="w-6 h-6"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                {showSidebar ? null : (
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
                <div className="overflow-y-auto">
                    {header && (
                        <header className="flex items-center justify-between px-4 bg-white shadow sm:px-6 lg:px-8">
                            <div className="py-6 max-w-7xl">{header}</div>
                            <div className="relative ms-3">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-gray-700 focus:outline-none"
                                            >
                                                {user.name}

                                                <svg
                                                    className="ms-2 -me-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link
                                            href={route("profile.edit")}
                                        >
                                            Profile
                                        </Dropdown.Link>
                                        <Dropdown.Link
                                            href={route("logout")}
                                            method="post"
                                            as="button"
                                        >
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </header>
                    )}
                    <main className="relative z-0 flex-1 p-10 overflow-y-auto focus:outline-none">
                        {children}
                    </main>
                </div>
            </div>
        </div>
    );
}
