import React, { useEffect, useState } from 'react'
import axios from "axios"

 const useFetch = (url) => {
    const [data, setData]=useState([]);
    const [loading,setLoading]=useState(false);
    const [error, setError] =useState("");
    useEffect(()=>{
       const fetchData =async()=>{ 
        setLoading(true);
        try{
            const response = await axios.get(url)
            setData(response.data)
        }catch(err){
            setError(err)
        }
        setLoading(false);
       }
       fetchData()
    },[url])
    return {data,loading, error}
}

export default useFetch

