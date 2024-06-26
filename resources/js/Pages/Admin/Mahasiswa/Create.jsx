import React, { useEffect } from "react";
import { Head, useForm } from "@inertiajs/react";
import AuthenticatedAdminLayout from "@/Layouts/AuthenticatedAdminLayout";
import FormMahasiswa from "./Partials/Form";
import { FaArrowLeft } from "react-icons/fa";
import Alert from "@/Components/Custom/Alert";
import RedirectButton from "@/Components/RedirectButton";

const initialFormState = {
    name: "",
    email: "",
    fullname: "",
    nim: "",
    prodi: "",
    year: "",
    status: "",
    phone: "",
    address: "",
    gender: "",
};

const CreateMahasiswa = ({ auth, session }) => {
    const { data, setData, post, errors, processing, reset } =
        useForm(initialFormState);

    const submit = (e) => {
        e.preventDefault();
        post(route("mahasiswa.store"), {
            onSuccess: () => {
                reset();
            },
        });
    };

    useEffect(() => {
        if (session.success) {
            Alert.success(session.success);
        }
        if (session.error) {
            Alert.error(session.error);
        }
    }, [session]);

    return (
        <AuthenticatedAdminLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-black">
                    Tambah Mahasiswa
                </h2>
            }
        >
            <Head title="Tambah Mahasiswa" />

            <div className="py-12">
                <div className="mx-auto space-y-6 max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
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
