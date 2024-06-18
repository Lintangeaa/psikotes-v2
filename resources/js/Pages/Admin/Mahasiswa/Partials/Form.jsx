import React from "react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import Dropdown from "@/Components/Dropdown";

const FormMahasiswa = ({
    data,
    setData,
    submit,
    errors,
    processing,
    isEdit = false,
}) => {
    return (
        <form onSubmit={submit} className="mt-6 space-y-6 p-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                    <InputLabel htmlFor="name" value="Username" />
                    <TextInput
                        id="name"
                        className="mt-1 block w-full"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        required={!isEdit}
                        isFocused
                        autoComplete="name"
                    />
                    <InputError className="mt-2" message={errors.name} />
                </div>

                <div>
                    <InputLabel htmlFor="email" value="Email" />
                    <TextInput
                        id="email"
                        type="email"
                        className="mt-1 block w-full"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        required={!isEdit}
                        autoComplete="username"
                    />
                    <InputError className="mt-2" message={errors.email} />
                </div>

                <div>
                    <InputLabel htmlFor="fullname" value="Nama Lengkap" />
                    <TextInput
                        id="fullname"
                        type="text"
                        className="mt-1 block w-full"
                        value={data.fullname}
                        onChange={(e) => setData("fullname", e.target.value)}
                        required={!isEdit}
                        autoComplete="username"
                    />
                    <InputError className="mt-2" message={errors.fullname} />
                </div>

                <div>
                    <InputLabel htmlFor="nim" value="Nomor Induk Mahasiswa" />
                    <TextInput
                        id="nim"
                        type="number"
                        className="mt-1 block w-full"
                        value={data.nim}
                        onChange={(e) => setData("nim", e.target.value)}
                        required={!isEdit}
                        autoComplete="username"
                    />
                    <InputError className="mt-2" message={errors.nim} />
                </div>

                <div>
                    <InputLabel htmlFor="major" value="Jurusan" />
                    <Dropdown>
                        <Dropdown.Trigger>
                            <button
                                type="button"
                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md border-zinc-300 focus:outline-none transition ease-in-out duration-150"
                            >
                                {data.major}
                            </button>
                        </Dropdown.Trigger>

                        <Dropdown.Content>
                            <button
                                onClick={() => setData("major", "Siswa")}
                                type="button"
                                className="w-full"
                            >
                                Siswa
                            </button>
                        </Dropdown.Content>
                    </Dropdown>
                    <InputError className="mt-2" message={errors.major} />
                </div>
            </div>

            <div className="flex items-center gap-4">
                <PrimaryButton disabled={processing}>
                    {isEdit ? "SAVE" : "CREATE"}
                </PrimaryButton>
            </div>
        </form>
    );
};

export default FormMahasiswa;
