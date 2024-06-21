import React from "react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import SearchableSelect from "@/Components/Custom/Search";
import CustomDatePicker from "@/Components/Custom/DatePicker";
import SearchableInput from "@/Components/Custom/Search";
import RadioButton from "@/Components/Custom/RadioButton";
import RedirectButton from "@/Components/RedirectButton";
import { FaArrowLeft } from "react-icons/fa6";

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
            <RedirectButton
                href={route("admin.mahasiswa")}
                className="bg-blue-500"
            >
                <FaArrowLeft />
            </RedirectButton>

            <h1>Formulir {isEdit ? "Edit" : "Tambah"} Mahasiswa</h1>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                <div>
                    <InputLabel htmlFor="name" value="Username" />
                    <TextInput
                        id="name"
                        className="block w-full mt-1"
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
                        className="block w-full mt-1"
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
                        className="block w-full mt-1"
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
                        className="block w-full mt-1"
                        value={data.nim}
                        onChange={(e) => setData("nim", e.target.value)}
                        required={!isEdit}
                        autoComplete="username"
                    />
                    <InputError className="mt-2" message={errors.nim} />
                </div>

                <div>
                    <InputLabel htmlFor="phone" value="Nomor HP" />
                    <TextInput
                        id="nim"
                        type="number"
                        className="block w-full mt-1"
                        value={data.phone}
                        onChange={(e) => setData("phone", e.target.value)}
                        required={!isEdit}
                        autoComplete="username"
                    />
                    <InputError className="mt-2" message={errors.phone} />
                </div>

                <div>
                    <InputLabel htmlFor="address" value="Alamat" />
                    <TextInput
                        id="address"
                        type="text"
                        className="block w-full mt-1"
                        value={data.address}
                        onChange={(e) => setData("address", e.target.value)}
                        required={!isEdit}
                        autoComplete="username"
                    />
                    <InputError className="mt-2" message={errors.address} />
                </div>

                <div>
                    <InputLabel htmlFor="major" value="Program Studi" />
                    <SearchableInput
                        placeholder="Select a Prodi"
                        fetchUrl="/prodi/search"
                        initialValue={{ label: data.major, value: data.major }}
                        onChange={(selectedOption) =>
                            setData(
                                "major",
                                selectedOption ? selectedOption.value : ""
                            )
                        }
                    />
                    <InputError className="mt-2" message={errors.major} />
                </div>

                <div>
                    <InputLabel htmlFor="gender" value="Jenis Kelamin" />
                    <RadioButton
                        id="gender"
                        name="radioOption"
                        options={[
                            { label: "Laki-Laki", value: "Laki-Laki" },
                            { label: "Perempuan", value: "Perempuan" },
                        ]}
                        initialSelectedValue={data.gender}
                        onChange={(value) => setData("gender", value)}
                    />
                    {errors.radioOption && (
                        <div className="text-red-600">{errors.radioOption}</div>
                    )}
                </div>

                <div>
                    <InputLabel htmlFor="year" value="Tahun Masuk" />
                    <CustomDatePicker
                        type="year"
                        selected={data.year ? new Date(data.year, 0, 1) : null}
                        onChange={(date) => setData("year", date)}
                        placeholderText="Pilih Tahun"
                    />
                    <InputError className="mt-2" message={errors.year} />
                </div>
            </div>

            <div className="flex items-center gap-4">
                <PrimaryButton disabled={processing}>
                    {isEdit ? "SIMPAN" : "SUBMIT"}
                </PrimaryButton>
            </div>
        </form>
    );
};

export default FormMahasiswa;
