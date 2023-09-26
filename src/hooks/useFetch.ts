import { useEffect, useState } from 'react';
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://modeloproxyapi.interfocus.com.br:4443/'
})

export function useFetch<T = unknown>(url: string){
    const [data, setData] = useState<T | null>(null);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(()=> {
        api.get(url)
        .then( response => {
            setData(response.data)
        })
        .finally(() => {
            setIsFetching(false);
        })
    }, [])

    return { data, isFetching }
}