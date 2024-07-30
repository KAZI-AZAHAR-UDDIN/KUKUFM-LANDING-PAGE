import axios from 'axios';

const API_URL = 'https://d31ntp24xvh0tq.cloudfront.net/api/v2.1/home/all/?preferred_langs=hindi&page=1&lang=english';

export const fetchData = async (page) => {
    try {
        const response = await axios.get(`${API_URL}&page=${page}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
