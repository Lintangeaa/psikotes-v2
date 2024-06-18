import AuthenticatedAdminLayout from "@/Layouts/AuthenticatedAdminLayout";
import React from "react";
import { Head } from "@inertiajs/react";
import { GrDocumentUser } from "react-icons/gr";
import { SiTestcafe } from "react-icons/si";
import { FaUserGraduate } from "react-icons/fa6";

const Dashboard = ({ auth, totalMahasiswa, totalAlumni }) => {
    return (
        <AuthenticatedAdminLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard Admin" />
            <div className="rounded bg-white/80 shadow-lg p-5">
                <div className="flex justify-center font-semibold">
                    Summary RMIB Platform
                </div>
                <section className="p-2 flex  md:flex-row flex-col md:justify-between items-center  space-y-5 md:space-y-0">
                    <div className="w-56 bg-cyan-200 rounded shadow-md p-2">
                        <div className="flex flex-col items-center space-y-2 p-4">
                            <GrDocumentUser className="text-4xl text-cyan-800" />
                            <p className="font-semibold text-cyan-800">
                                Total Mahasiswa
                            </p>
                            <p>{totalMahasiswa}</p>
                        </div>
                    </div>

                    <div className="w-56 bg-red-200 rounded shadow-md p-2">
                        <div className="flex flex-col items-center space-y-2 p-4">
                            <FaUserGraduate className="text-4xl text-red-800" />
                            <p className="font-semibold text-red-800">
                                Total Alumnus
                            </p>
                            <p>{totalAlumni ?? 0}</p>
                        </div>
                    </div>
                    <div className="w-56 bg-green-200 rounded shadow-md p-2">
                        <div className="flex flex-col items-center space-y-2 p-4">
                            <SiTestcafe className="text-4xl text-green-800" />
                            <p className="font-semibold text-green-800">
                                Total Sudah Test
                            </p>
                            <p>120</p>
                        </div>
                    </div>
                </section>
            </div>
        </AuthenticatedAdminLayout>
    );
};

export default Dashboard;
