import { toast } from "react-toastify";

export const successToast = (message: string, autoCloseTime: number) => {
    toast.success(message, {
        position: "top-right",
        autoClose: autoCloseTime,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        toastId: 1,
    });
}

export const errorToast = (error: string, autoCloseTime: number) => {
    toast.error(error, {
        position: "top-right",
        autoClose: autoCloseTime,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        toastId: 1,
    });   
}
