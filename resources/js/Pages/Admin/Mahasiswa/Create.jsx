import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import AuthenticatedAdminLayout from "@/Layouts/AuthenticatedAdminLayout";
import FormMahasiswa from "./Partials/Form";

const CreateMahasiswa = ({ auth }) => {
    const { data, setData, post, errors, processing, recentlySuccessful } =
        useForm({
            name: "",
            email: "",
            fullname: "",
            nim: "",
            major: "S1 Sistem Informasi",
            year: new Date().getFullYear(),
            status: "",
        });

    const submit = (e) => {
        e.preventDefault();
        post(route("mahasiswa.store"));
    };
    return (
        <AuthenticatedAdminLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-black leading-tight">
                    Tambah Mahasiswa
                </h2>
            }
        >
            <Head title="Tambah Mahasiswa" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <FormMahasiswa
                            setData={setData}
                            data={data}
                            errors={errors}
                            processing={processing}
                            submit={submit}
                        />
                    </div>
                </div>
            </div>
        </AuthenticatedAdminLayout>
    );
};

export default CreateMahasiswa;
