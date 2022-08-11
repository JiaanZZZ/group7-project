import { createContext } from "react";
import { useState } from "react";

export const SearchContext = createContext({
    searchTerm:"summer",
    setSearchTerm:()=>{},
    searchArticles:[],
    setSearchArticles:()=>{}


});

export const SearchProvider=({children})=>{
    const[searchTerm, setSearchTerm]=useState("summer");
    const [searchArticles, setSearchArticles] = useState([]);
    const value ={searchTerm,setSearchTerm,searchArticles,setSearchArticles};

    return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
}