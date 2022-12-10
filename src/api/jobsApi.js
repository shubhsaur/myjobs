// import axios from "axios";

// const BASE_URL = "https://jobs-api.squareboat.info/api/v1";

// export const userLogin = async (email, password, api_token) => {
// 	const response = await axios.post(`${BASE_URL}/auth/login`, {
//         email: email,
//         password: password,
//     });
//     api_token = response.data.data.token;
// };

// export const getAllJobs = async(api_token, data, page, setJobData) => {
//     const response = await axios.get(`${BASE_URL}/recruiters/jobs?page=${page}`, {
//         headers: { Authorization: `${api_token}` },
//     });

//     data = response.data.data;
//     setJobData(data);
// }
