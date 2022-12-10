import { createContext, useState } from "react";

export const AuthContext = createContext();

const Context = ({ children }) => {
	const [jobData, setJobData] = useState([]);
	const [loggedIn, setLoggedIn] = useState(false);
	const [token, setToken] = useState("");
	const [page, setPage] = useState(1);
	return (
		<AuthContext.Provider value={{ jobData, setJobData, loggedIn, setLoggedIn, token, setToken, page, setPage }}>
			{children}
		</AuthContext.Provider>
	);
};

export default Context;
