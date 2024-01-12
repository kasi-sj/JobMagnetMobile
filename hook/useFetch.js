import { useState , useEffect } from 'react';
import  axios from 'axios';
// import { RAPID_API_KEY } from '../.env';

// const RAPID_API_KEY = process.env.RAPID_API_KEY;
const useFetch = (endpoint,query) => {
    const [data , setData] = useState([]);
    const [isLoading , setIsLoading] = useState(false);
    const [error , setError] = useState(false)
    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: {
            ...query
        },
        headers: {
            'X-RapidAPI-Key': '09c93ee04fmsh3364c4bdb438044p1b8f8ajsnaa4d70d512b1',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
          }
    };

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await axios.request(options);
            setData(response.data.data);
            // console.log(response.data.data);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            console.log(error);
            alert('Something went wrong, please try again later')
            setIsLoading(false);
        } finally{
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    },[])

    const refetch = async () => {
        setIsLoading(true);
        await fetchData();
        setIsLoading(false);
    }

    return { data , isLoading , error , refetch }
}

export default useFetch;