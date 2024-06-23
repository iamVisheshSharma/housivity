import axios from "axios";

export async function fetchProducts(params) {
	try {
    const formattedParams = {
      ...params,
      projectType: JSON.stringify(params.projectType) 
    };
    const response = await axios.get(`https://api.housivity.com/api/v1/property`, {
      params: formattedParams
    });
    return response;
	} catch (error) {
		console.error('Error Fetching Products:', error.response ? error.response.data : error.message); 
		throw error;
	}
}