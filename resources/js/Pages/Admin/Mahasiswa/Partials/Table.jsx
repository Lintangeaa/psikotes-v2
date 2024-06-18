import CustomButton from "@/Components/CustomButton";
import { Link } from "@inertiajs/react";
import React from "react";
import { MdDeleteForever, MdEditSquare, MdRemoveRedEye } from "react-icons/md";
// Komponen Baris Tabel untuk Mahasiswa
const TableRowMahasiswa = ({ data, index }) => (
    <tr>
        <td className="border text-center p-2">{index}</td>
        <td className="border whitespace-nowrap p-2">
            {data.mahasiswa.fullname}
        </td>
        <td className="border whitespace-nowrap p-2">{data.mahasiswa.nim}</td>
        <td className="border whitespace-nowrap p-2">{data.mahasiswa.major}</td>
        <td className="border whitespace-nowrap p-2 text-center">
            {data.mahasiswa.year}
        </td>
        <td className="border whitespace-nowrap p-2">{data.email}</td>
        <td className="border whitespace-nowrap p-2 text-center">
            {data.mahasiswa.status}
        </td>
        <td className="border whitespace-nowrap p-2">
            <ActionTable />
        </td>
    </tr>
);

// Komponen Aksi pada Tabel Mahasiswa
const ActionTable = () => (
    <div className="flex justify-center space-x-2">
        <CustomButton className="bg-yellow-500 hover:bg-yellow-700">
            <MdRemoveRedEye className="text-lg" />
        </CustomButton>
        <CustomButton className="bg-blue-500 hover:bg-blue-700">
            <Link href={route("mahasiswa.create")}>
                <MdEditSquare className="text-lg" />
            </Link>
        </CustomButton>
        <CustomButton className="bg-red-500 hover:bg-red-700">
            <MdDeleteForever className="text-lg" />
        </CustomButton>
    </div>
);

const TableMahasiswa = ({ datas }) => {
    return (
        <div className="overflow-auto">
            <table className="table-auto w-full border-collapse">
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
