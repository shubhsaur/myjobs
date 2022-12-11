import React, { useContext } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context";
import { getRecruiterJobs } from "../api/jobsApi";

const Login = () => {
	const { email, setEmail, password, setPassword, setJobData, setLoggedIn, page, setToken, setAuthData, setTotalPage } =
		useContext(AuthContext);
	const navigate = useNavigate();

	const loginToaster = () =>
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

	const authenticateUser = async () => {
		let api_token;
		const response = await axios.post(
			`https://jobs-api.squareboat.info/api/v1/auth/login`,
			{
				email: email,
				password: password,
			},
			{
				headers: { "Content-Type": "application/json" },
			}
		);
		api_token = response.data.data.token;
		setAuthData(response.data.data);
		setLoggedIn(true);
		setToken(api_token);
		
		const fetchData = async () => {
			getRecruiterJobs(api_token, page, setJobData, setTotalPage);
			loginToaster();
			navigate("/dashboard");
		};
		fetchData();
	};

	return (
		<div className="bg-[#f1faee] h-[100vh]">
			<header className="bg-[#1d3557] text-white h-[50vh]">
				<Navbar />
			</header>
			<div className="flex justify-center relative top-[-20%]">
				<form className="bg-white shadow-md rounded px-16 lg:px-24 pt-6 pb-8 mb-4">
					<h2 className="text-[#1d3557] font-medium text-2xl mb-4">Login</h2>
					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
							Email Address
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="email"
							type="email"
							name="email"
							placeholder="Enter your email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className="mb-6">
						<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
							Password
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
							id="password"
							type="password"
							name="password"
							placeholder="Enter your password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<div className="flex items-center justify-between">
						<Button
							onClick={authenticateUser}
						>
							Login
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
