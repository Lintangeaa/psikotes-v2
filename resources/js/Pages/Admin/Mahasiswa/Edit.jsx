import React, { useEffect } from "react";
import { Head, useForm } from "@inertiajs/react";
import AuthenticatedAdminLayout from "@/Layouts/AuthenticatedAdminLayout";
import FormMahasiswa from "./Partials/Form";
import Alert from "@/Components/Custom/Alert";

const EditMahassiwa = ({ user, auth, session }) => {
    const initialFormState = {
        id: user.id,
        name: user.name,
        email: user.email,
        fullname: user.mahasiswa.fullname,
        nim: user.mahasiswa.nim,
        major: user.mahasiswa.major,
        year: user.mahasiswa.year,
        status: user.mahasiswa.status,
        phone: user.mahasiswa.phone,
        address: user.mahasiswa.address,
        gender: user.mahasiswa.gender,
    };

    const { data, setData, put, errors, processing, reset } =
        useForm(initialFormState);

    const submit = (e) => {
        e.preventDefault();
        put(route("mahasiswa.update", data.id));
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
                    Edit Mahasiswa
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
                            isEdit={true}
                        />
                    </div>
                </div>
            </div>
        </AuthenticatedAdminLayout>
    );
};

export default EditMahassiwa;
