import React, {createContext, useContext, useEffect} from "react";

const API = "https://api.tvmaze.com/search/shows?q=all"

const AppContext = createContext();



const AppProvider = ({children})=>{

    const getMovie = async (URL)=>{
        const res = await fetch(URL);
        const data = await res.json();
        console.log(data);
    }
   
    useEffect(()=>{
        getMovie(API);
    },[])

    return <AppContext.Provider value={{API}}>
        {children}
    </AppContext.Provider>
}

export {AppProvider,API};