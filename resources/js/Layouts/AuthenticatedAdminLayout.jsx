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
                        <RiDashboardFill />
                        <p>Dashboard</p>
                    </NavLink>
                    <NavLink
                        href={route("admin.mahasiswa")}
                        active={
                            route().current("admin.mahasiswa") ||
                            route().current("mahasiswa.create")
                        }
                    >
                        <FaUserGraduate />
                        <p>Mahasiswa</p>
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
                <div className="overflow-y-auto">
                    {header && (
                        <header className="bg-white shadow flex items-center justify-between px-4 sm:px-6 lg:px-8">
                            <div className="max-w-7xl  py-6">{header}</div>
                            <div className="ms-3 relative">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
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
                    <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none p-10">
                        {children}
                    </main>
                </div>
            </div>
        </div>
    );
}
