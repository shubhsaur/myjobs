import { toast } from "react-toastify";

export const formValidationToaster = (err) => {
	toast.error(`${err.request.status}: ${err.request.statusText}`, {
		containerId: "formValidation",
		position: "top-right",
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: "colored",
	});
};

export const loginToaster = () =>
	toast.success("Login Successful!", {
		containerId: "login",
		position: "top-right",
		autoClose: 2000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: "light",
	});

export const logoutToaster = () =>
	toast.info("Logged Out!", {
		containerId: "logout",
		position: "top-right",
		autoClose: 2000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: "light",
	});
