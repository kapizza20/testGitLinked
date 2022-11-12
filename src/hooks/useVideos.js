import { useState, useEffect } from "react";
import youtube from "../apis/youtube";

const useVideos=(defaultSearchTerm)=>{
    const [videos,setVideos]=useState([]);

    useEffect(()=>{
        console.log('USAO SAM U TERM SUBMIT');
        search(defaultSearchTerm);
    },[]);

    const search = async (term) => {
        console.log('USAO SAM U TERM SUBMIT')
        const response = await youtube.get('/search', {
            params: {
                q: term,
            }
        });
        setVideos(response.data.items);
    };

    return [videos, search];
}

export default useVideos;