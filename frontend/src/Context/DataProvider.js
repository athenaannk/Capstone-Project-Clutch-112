import { createContext, useState } from "react";

const DataProvider = props => {
    // declare state variables here
    // we can then set up as a global context accessible by all children
    const [bookmark, setBookmark] = useState({});
    const value = {bookmark, setBookmark}
    return(
        <DataContext.Provider value={value} >
            {props.children}
        </DataContext.Provider>
    )
}

export default DataProvider;
export const DataContext = createContext();