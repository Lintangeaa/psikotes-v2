import React from "react";
import Alert from "./Alert";
import Swal from "sweetalert2";

const ConfirmationModal = async (destroy, route) => {
    return Swal.fire({
        title: "Apakah anda yakin",
        text: "Data yang dihapus tidak bisa dikembalikan",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya",
    }).then((result) => {
        if (result.isConfirmed) {
            destroy(route, {
                preserveScroll: true,
                onSuccess: () => {
                    Alert.success("Mahasiswa berhasil dihapus");
                },
                onError: () => {
                    Alert.error("Terjadi Eror");
                },
            });
        }
    });
};

export default ConfirmationModal;
