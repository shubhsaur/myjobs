import { createContext, useState } from "react";

export const AuthContext = createContext();

const Context = ({ children }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [authData, setAuthData] = useState([]);
	const [jobData, setJobData] = useState([]);
	const [applicantData, setApplicantData] = useState([]);
	const [loggedIn, setLoggedIn] = useState(false);
	const [token, setToken] = useState("");
	const [page, setPage] = useState(1);
	return (
		<AuthContext.Provider
			value={{
				email,
				setEmail,
				password,
				setPassword,
				jobData,
				setJobData,
				loggedIn,
				setLoggedIn,
				token,
				setToken,
				page,
				setPage,
				applicantData,
				setApplicantData,
				authData,
				setAuthData,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default Context;
