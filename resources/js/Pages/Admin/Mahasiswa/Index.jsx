import AuthenticatedAdminLayout from "@/Layouts/AuthenticatedAdminLayout";
import React from "react";
import { Head } from "@inertiajs/react";
import { GrDocumentUser } from "react-icons/gr";
import { SiTestcafe } from "react-icons/si";
import { FaUserGraduate } from "react-icons/fa6";

const Mahasiswa = ({ auth, mahasiswa }) => {
    console.log(mahasiswa);
    return (
        <AuthenticatedAdminLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    List Mahasiswa
                </h2>
            }
        >
            <div className="rounded bg-white/80 shadow-lg p-5">
                <div className="flex justify-center font-semibold">
                    Summary RMIB Platform
                </div>
                <section className="p-2 flex justify-between">
                    <div className="container">
                        <h1>Daftar Mahasiswa</h1>

                        <table>
                            <thead>
                                <tr>
                                    <th>Nama</th>
                                    <th>NIM</th>
                                </tr>
                            </thead>
                            <tbody>
                                {mahasiswa.map((mhs, index) => (
                                    <tr key={index}>
                                        <td>{mhs.name}</td>
                                        <td>{mhs.nim}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </AuthenticatedAdminLayout>
    );
};

export default Mahasiswa;
