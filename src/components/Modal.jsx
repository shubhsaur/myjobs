import React, { useContext } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { AiOutlineClose } from "react-icons/ai";
import { AuthContext } from "../Context";
import applicant from "../assets/applicant.png";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 650,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
	overflowY: "scroll",
};

const ApplicantModal = ({ open, handleClose }) => {
	const { applicantData } = useContext(AuthContext);
	return (
		<div>
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={open}>
					<Box sx={style}>
						<div>
							<div className="flex justify-between items-center">
								<h2 className="text-xl text-[#1d3557] font-bold">Applicants for this job</h2>
								<span className="cursor-pointer" onClick={handleClose}>
									<AiOutlineClose />
								</span>
							</div>
							<hr className="h-px mt-2 bg-gray-500 border-0 dark:bg-gray-700"></hr>
							<p className="mt-4 text-sm">Total {applicantData.length} applications</p>
							{applicantData.length === 0 ? (
								<div className="bg-gray-200 flex flex-col items-center justify-center gap-4 py-24 rounded-md">
									<img className="w-[8em]" src={applicant} alt="applicant logo" />
									<h2 className="text-gray-800">No applications available!</h2>
								</div>
							) : (
								<div className="bg-gray-200 flex flex-wrap justify-center gap-4 p-4 rounded-md">
									{applicantData &&
										applicantData.map((data) => (
											<div className="bg-white border-2 border-gray-500">
												<div className="flex gap-4 w-[250px] p-2">
													<div className="flex justify-center items-center text-xl text-[#1d3557] font-medium bg-[#90e0ef] rounded-[50%] w-[40px] h-[40px]">
														<h2 className="">{data.name[0].toUpperCase()}</h2>
													</div>
													<div>
														<h2 className="text-[#1d3557] font-medium">{data.name}</h2>
														<p className="text-gray-600 text-[0.7rem]">{data.email}</p>
													</div>
												</div>
												<div className="p-2">
													<h2 className="text-[0.8rem] font-bold text-[#1d3557]">Skills</h2>
													<p className="text-[0.7rem] font-medium text-gray-800 break-words">{data.skills}</p>
												</div>
											</div>
										))}
								</div>
							)}
						</div>
					</Box>
				</Fade>
			</Modal>
		</div>
	);
};

export default ApplicantModal;
