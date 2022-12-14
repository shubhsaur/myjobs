import React, { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../Context";
import DropDown from "./DropDown";

const Navbar = () => {
	const { loggedIn, authData } = useContext(AuthContext);
	const navigate = useNavigate();
	const handleLogin = () => {
		navigate("/login");
	};
	return (
		<div>
			<nav className="flex justify-between items-center pt-8 pb-4 lg:px-16 px-4">
				<h1 className="font-bold text-2xl select-none">
					My<span className="text-[#00b4d8]">Jobs</span>
				</h1>
				<div className="flex items-center gap-8">
					<Link to="/" className="text-blue-300 font-medium hover:text-[#f0f0f0]">
						Home
					</Link>
					{!loggedIn ? (
						<button className="border-2 border-[#0096c7] rounded-md px-8 py-1" onClick={handleLogin}>
							Login
						</button>
					) : (
						<div className="flex items-center">
							<div className="flex justify-center items-center text-xl text-[#1d3557] font-medium bg-[#90e0ef] rounded-[50%] w-[40px] h-[40px]">
								<h2 className="">{authData.name[0].toUpperCase()}</h2>
							</div>
							<DropDown />
						</div>
					)}
				</div>
			</nav>
			<hr className="h-px lg:mx-16 mx-4 bg-gray-500 border-0 dark:bg-gray-700"></hr>
		</div>
	);
};

export default Navbar;
