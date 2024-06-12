import AuthenticatedAdminLayout from "@/Layouts/AuthenticatedAdminLayout";
import React from "react";
import { Head } from "@inertiajs/react";
import { GrDocumentUser } from "react-icons/gr";

const Dashboard = ({ auth }) => {
    return (
        <AuthenticatedAdminLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <div className="rounded bg-white/80 shadow-lg p-5">
                <div className="flex justify-center font-semibold">
                    Summary RMIB Platform
                </div>
                <section className="p-2 flex justify-between">
                    <div className="w-56 bg-cyan-200 rounded shadow-md p-2">
                        <div className="flex flex-col items-center space-y-2">
                            <GrDocumentUser className="text-4xl text-cyan-800" />
                            <p className="font-semibold">Total Mahasiswa</p>
                        </div>
                    </div>
                    <div className="w-56 bg-yellow-200">a</div>
                    <div className="w-56 bg-yellow-200">a</div>
                </section>
            </div>
        </AuthenticatedAdminLayout>
    );
};

export default Dashboard;
