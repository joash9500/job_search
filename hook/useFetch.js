import { useState, useEffect } from "react";
import axios from 'axios'
// import {RAPID_API_KEY} from '@env'
// const rapidApiKey = RAPID_API_KEY;

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // custom query (with object) and custom endpoint to request from job search api
    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: {...query},
        headers: {
            //   'X-RapidAPI-Key': rapidApiKey,
            'X-RapidAPI-Key': 'b9b017baf7msh1a2b13dfbe87bcep1bd9ccjsn4b16ad0f1800',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
    };

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await axios.request(options)
            setData(response.data.data)
            setIsLoading(false)
        } catch (error) {
            setError(error)
            console.log('AN error occured')
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    //custom refetch function to workaround some bugs with requesting from the job search api
    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }

    return {data, isLoading, error, refetch}

}

export default useFetch