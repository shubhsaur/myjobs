import React from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";

const Login = () => {
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
						/>
					</div>
					<div class="flex items-center justify-between">
						<Button>Login</Button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
