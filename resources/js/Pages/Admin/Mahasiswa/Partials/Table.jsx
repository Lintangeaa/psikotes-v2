import ConfirmationModal from "@/Components/Custom/ConfirmationModal";
import CustomButton from "@/Components/CustomButton";
import RedirectButton from "@/Components/RedirectButton";
import { Link, useForm } from "@inertiajs/react";
import React from "react";
import { MdDeleteForever, MdEditSquare, MdRemoveRedEye } from "react-icons/md";

const ActionTable = ({ data }) => {
    const { delete: destroy, processing } = useForm();

    const handleDelete = async () => {
        await ConfirmationModal(destroy, route("mahasiswa.delete", data.id));
    };

    return (
        <div className="flex justify-center space-x-2">
            <CustomButton className="bg-yellow-500 hover:bg-yellow-700">
                <MdRemoveRedEye className="text-lg" />
            </CustomButton>
            <RedirectButton
                href={route("mahasiswa.edit", data.id)}
                className="bg-blue-500 hover:bg-blue-700"
            >
                <MdEditSquare className="text-lg" />
            </RedirectButton>
            <CustomButton
                className="bg-red-500 hover:bg-red-700"
                onClick={handleDelete}
                disabled={processing}
            >
                <MdDeleteForever className="text-lg" />
            </CustomButton>
        </div>
    );
};

// Komponen Baris Tabel untuk Mahasiswa
const TableRowMahasiswa = ({ data, index }) => (
    <tr>
        <td className="p-2 text-center border">{index}</td>
        <td className="p-2 border whitespace-nowrap">
            {data.mahasiswa.fullname}
        </td>
        <td className="p-2 border whitespace-nowrap">{data.mahasiswa.nim}</td>
        <td className="p-2 border whitespace-nowrap">{data.mahasiswa.major}</td>
        <td className="p-2 text-center border whitespace-nowrap">
            {data.mahasiswa.year}
        </td>
        <td className="p-2 border whitespace-nowrap">{data.email}</td>
        <td className="p-2 text-center border whitespace-nowrap">
            {data.mahasiswa.status}
        </td>
        <td className="p-2 border whitespace-nowrap">
            <ActionTable data={data} />
        </td>
    </tr>
);

const TableMahasiswa = ({ datas }) => {
    return (
        <div className="overflow-auto">
            <table className="w-full border-collapse table-auto">
                <thead>
                    <tr>
                        <th className="px-4 py-2 border">No</th>
                        <th className="px-4 py-2 border">Nama</th>
                        <th className="px-4 py-2 border">NIM</th>
                        <th className="px-4 py-2 border">Jurusan</th>
                        <th className="px-4 py-2 border">Angkatan</th>
                        <th className="px-4 py-2 border">Email</th>
                        <th className="px-4 py-2 border">Status</th>
                        <th className="px-4 py-2 border">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {datas.map((data, index) => (
                        <TableRowMahasiswa
                            key={index}
                            data={data}
                            index={index + 1}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableMahasiswa;
