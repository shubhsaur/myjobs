import axios from "axios";

const BASE_URL = 'https://jobs-api.squareboat.info/api/v1/';

export const userLogin = async () => {
    const response = await axios.post(`${BASE_URL}/auth/login`, {
        email: "squareboat@gmail.com",
        password: "squareboat"
      }, );
}

export const getPostedJobs = async () => {
    const response = await axios.get(`${BASE_URL}/recruiters/jobs`);
    console.log(response);
}


