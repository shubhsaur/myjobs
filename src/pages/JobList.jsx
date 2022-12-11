import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { AuthContext } from "../Context";
import { AiFillHome } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import axios from "axios";
import ApplicantModal from "../components/Modal";
import notes from "../assets/notes.png";
import Button from "../components/Button";

const BASE_URL = "https://jobs-api.squareboat.info/api/v1";


const JobList = () => {
	const [open, setOpen] = useState(false);

	const { email, password, loggedIn, jobData, setJobData, page, setPage, setLoggedIn, setApplicantData } =
		useContext(AuthContext);
	useEffect(() => {
		handleChange();
	}, [page]);

	const handleOpen = async (id) => {
		setOpen(true);
		let api_token;
		let data;
		const response = await axios.post(`${BASE_URL}/auth/login`, {
			email: email,
			password: password,
		});
		api_token = response.data.data.token;

		const fetchApplicantData = async () => {
			const response = await axios.get(`${BASE_URL}/recruiters/jobs/${id}/candidates`, {
				headers: { Authorization: `${api_token}` },
			});
			data = response.data.data;
			console.log(data);
			setApplicantData(data);
		};
		fetchApplicantData();
	};
	const handleClose = () => setOpen(false);

	const handleChange = (event, value) => {
		setPage(value);
		const authorize = async () => {
			let api_token;
			let data;
			const response = await axios.post(`${BASE_URL}/auth/login`, {
				email: email,
				password: password,
			});
			api_token = response.data.data.token;
			setLoggedIn(true);

			const fetchData = async () => {
				const response = await axios.get(`${BASE_URL}/recruiters/jobs?page=${page}`, {
					headers: { Authorization: `${api_token}` },
				});
				data = response.data.data;
				setJobData(data);
			};
			fetchData();
		};
		authorize();
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
			{jobData.data.length === 0 ? (
				<div className="flex flex-col items-center justify-center gap-4 pt-8 h-[50vh]">
					<img className="w-[8em] relative left-4" src={notes} alt="" />
					<h2 className="text-gray-500">Your posted jobs will show here!</h2>
					<Button>Post a Job</Button>
				</div>
			) : (
				<div>
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
							<Pagination count={10} page={page} onChange={handleChange} size="large" />
						</Stack>
					</div>
				</div>
			)}
		</div>
	);
};

export default JobList;
