import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { AuthContext } from "../Context";
import { AiFillHome } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const JobList = () => {
	const { loggedIn, jobData, page, setPage, token } = useContext(AuthContext);
	
  // useEffect(() => {
  //   getAllJobs(token, )
  // }, [page])

  const handleChange = (event, value) => {
    setPage(value);
  };

	return (
		<div className="bg-[#f1faee]">
			{loggedIn && (
				<div>
					<header className="bg-[#1d3557] text-white h-[50vh]">
						<Navbar />
						<div className="py-8 px-32">
							<span className="flex items-center gap-1 mb-8">
								<AiFillHome />
								<Link to="/" className="text-sm">
									Home
								</Link>
							</span>
							<h2 className="font-medium text-2xl">Jobs posted by you</h2>
						</div>
					</header>
				</div>
			)}
			<div className="flex flex-wrap justify-center gap-4">
				{jobData.data.map((job) => {
					return (
						<div
							key={job.id}
							className="flex flex-col w-[20%] bg-white text-ellipsis p-4 rounded-md relative top-[-8em] shadow-md"
						>
							<h2 className="text-[#1d3557] text-xl font-medium break-words">{job.title}</h2>
							<p className="text-gray-500 text-sm font-medium break-words mt-4">{job.description}</p>
							<div className="flex items-center justify-between flex-wrap mt-12">
								<span className="flex text-sm items-center">
									<MdLocationOn />
									{job.location}
								</span>
								<button className="text-sm border-none outline-none bg-[#ade8f4] p-2 rounded-md font-medium text-[#1d3557] hover:bg-[#0a89a3] hover:text-white transition-all duration-100">
									View Applications
								</button>
							</div>
						</div>
					);
				})}
			</div>

			<Stack spacing={2}>
				<Pagination count={20} page={page} onChange={handleChange} />
			</Stack>
		</div>
	);
};

export default JobList;
