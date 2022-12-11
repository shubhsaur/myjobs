import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { AuthContext } from "../Context";
import { AiFillHome } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import ApplicantModal from "../components/Modal";
import notes from "../assets/notes.png";
import Button from "../components/Button";
import { getApplicantsByJobId, getRecruiterJobs } from "../api/jobsApi";

const JobList = () => {
	const [open, setOpen] = useState(false);
	const { loggedIn, jobData, setJobData, page, setPage, setLoggedIn, setApplicantData, totalPage, token } =
		useContext(AuthContext);

	useEffect(() => {
		handlePage();
		// eslint-disable-next-line
	}, [setPage, page]);

	const handleOpen = async (id) => {
		setOpen(true);
		getApplicantsByJobId(id, token, setApplicantData);
		
	};
	const handleClose = () => setOpen(false);

	const handlePage = (event, value) => {
		setPage(value);
		setLoggedIn(true);
		getRecruiterJobs(token, page, setJobData);
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
			{jobData.data.data.length === 0 ? (
				<div className="flex flex-col items-center justify-center gap-4 pt-8 h-[50vh]">
					<img className="w-[8em] relative left-4" src={notes} alt="" />
					<h2 className="text-gray-500">Your posted jobs will show here!</h2>
					<Button>Post a Job</Button>
				</div>
			) : (
				<div>
					<div className="flex flex-wrap justify-center gap-4">
						{jobData.data.data.map((job) => {
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
											<p className="break-words">{job.location}</p>
										</span>
										<button
											onClick={() => handleOpen(job.id)}
											className="text-sm border-none outline-none bg-[#ade8f4] p-2 rounded-md font-medium text-[#1d3557] hover:bg-[#0a89a3] hover:text-white transition-all duration-100"
										>
											View Applications
										</button>
										{open && <ApplicantModal open={open} handleClose={handleClose} />}
									</div>
								</div>
							);
						})}
					</div>
					<div className="mb-8 flex justify-center">
						<Stack spacing={1}>
							<Pagination
								count={Math.ceil(totalPage / 20)}
								page={page}
								boundaryCount={2}
								onChange={handlePage}
								size="large"
							/>
						</Stack>
					</div>
				</div>
			)}
		</div>
	);
};

export default JobList;
