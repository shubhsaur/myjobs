import React from "react";
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate();
	const handleLogin = () => {
        navigate('/login')
    };
	return (
		<div>
			<nav className="flex justify-between items-center pt-8 pb-4 px-16">
				<h1 className="font-bold text-2xl">
					My<span className="text-[#00b4d8]">Jobs</span>
				</h1>
				<div className="flex justify-center items-center gap-8">
                <Link to='/' className="text-blue-300 font-medium hover:text-[#f0f0f0]">Home</Link>
                <button className="border-2 border-[#0096c7] rounded-md px-8 py-1" onClick={handleLogin}>
					Login
				</button>
                </div>
			</nav>
			<hr className="h-px mx-16 bg-gray-500 border-0 dark:bg-gray-700"></hr>
		</div>
	);
};

export default Navbar;
