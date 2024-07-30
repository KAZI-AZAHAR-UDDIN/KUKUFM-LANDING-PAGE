import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const fetchData = async (page) => {
    try {
        const response = await axios.get(`${API_URL}&page=${page}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
