import { createContext } from "react";
import { useState } from "react";

export const SearchContext = createContext({
    searchTerm:"",
    setSearchTerm:()=>{}

});

export const SearchProvider=({children})=>{
    const[searchTerm, setSearchTerm]=useState("");
    const value ={searchTerm,setSearchTerm};

    return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
}