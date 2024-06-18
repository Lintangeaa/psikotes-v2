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
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    List Mahasiswa
                </h2>
            }
        >
            <Head title="Mahasiswa" />
            <div className="rounded bg-white/80 shadow-lg p-5">
                <div className="flex justify-center font-semibold">
                    Daftar Mahasiswa di RMIB Platform
                </div>

                <section className="p-2 w-full">
                    <div className="mb-5">
                        <RedirectButton href={route("mahasiswa.create")}>
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
