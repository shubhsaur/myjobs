import axios from "axios";

const BASE_URL = "https://jobs-api.squareboat.info/api/v1";

export const getRecruiterJobs = async (token, page, setJobData, setTotalPage) => {
	let data;
	const response = await axios.get(`${BASE_URL}/recruiters/jobs?page=${page}`, {
		headers: { Authorization: `${token}` },
	});
	data = response.data;
	setJobData(data);
	setTotalPage(data.data.metadata.count);
};

export const getApplicantsByJobId = async (id, token, setApplicantData) => {
	const response = await axios.get(`${BASE_URL}/recruiters/jobs/${id}/candidates`, {
		headers: { Authorization: `${token}` },
	});
	setApplicantData(response.data.data);
};
