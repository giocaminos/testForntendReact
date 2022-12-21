import  { useEffect, useState } from 'react'

export const useFetch = (url) => {

    const [countrys, setcountrys] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    });

    const getFetch = async() =>{

        setcountrys({
            ...countrys,
            isLoading: true,
            hasError: null,
        });
        const resp = await fetch(url); 
        const {zones} = await resp.json();
       
        setcountrys({
            data: zones,
            isLoading: false,
            hasError: null,
        });
    }

    useEffect(() => {
        getFetch();
    }, [url])
    
  return {
    data: countrys.data,
    isLoading: countrys.isLoading,
    hasError: countrys.hasError,
  } ;
}
