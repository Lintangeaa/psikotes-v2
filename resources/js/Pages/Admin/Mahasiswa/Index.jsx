import AuthenticatedAdminLayout from "@/Layouts/AuthenticatedAdminLayout";
import React from "react";
import { Head } from "@inertiajs/react";
import TableMahasiswa from "./Partials/Table";
import RedirectButton from "@/Components/RedirectButton";

const Mahasiswa = ({ auth, mahasiswas }) => {
    console.log(mahasiswas);
    return (
        <AuthenticatedAdminLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    List Mahasiswa
                </h2>
            }
        >
            <Head title="Mahasiswa" />
            <div className="p-5 rounded shadow-lg bg-white/80">
                <div className="flex justify-center font-semibold">
                    Daftar Mahasiswa di RMIB Platform
                </div>

                <section className="w-full p-2">
                    <div className="mb-5">
                        <RedirectButton
                            href={route("mahasiswa.create")}
                            className="bg-blue-500 hover:bg-blue-700"
                        >
                            Tambah
                        </RedirectButton>
                    </div>
                    <TableMahasiswa datas={mahasiswas} />
                </section>
            </div>
        </AuthenticatedAdminLayout>
    );
};

export default Mahasiswa;
