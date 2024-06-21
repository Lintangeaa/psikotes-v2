import Swal from "sweetalert2";

const Alert = {
    success: (message) => {
        Swal.fire({
            icon: "success",
            title: message,
            timer: 2000,
            showConfirmButton: false,
        });
    },
    error: (message) => {
        Swal.fire({
            icon: "error",
            title: message,
        });
    },
};

export default Alert;
