import  { useEffect, useState } from 'react'

export const useFetchGeneric = (url) => {

    const [val, setval] = useState({
        dt: null,
        isLoading: true,
        hasError: null,
    });

    const getFetch = async() =>{

        setval({
            ...val,
            isLoading: true,
            hasError: null,
        });
        const resp = await fetch(url); 
        const dt = await resp.json();
       
        setval({
            dt,
            isLoading: false,
            hasError: null,
        });
    }

    useEffect(() => {
        getFetch();
    }, [url])
    
  return {
    dt: val.dt,
    isLoading: val.isLoading,
    hasError: val.hasError,
  } ;
}
