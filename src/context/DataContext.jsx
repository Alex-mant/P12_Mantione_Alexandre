import axios from 'axios';
import { useEffect } from 'react';
import { createContext } from 'react';
import { useState } from 'react';

export const DataContext = createContext();

/**
 * The DataContextProvider function is a React component that uses the useState hook to set the initial
 * state of the data variable to an empty array, and the useEffect hook to fetch data from the API and
 * set the state of the data variable to the response data.
 * @returns An object with a property of data that is an array of objects.
 */
const DataContextProvider = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://calm-gorge-80201.herokuapp.com/user/12").then((res) => setData(res.data))
  }, [])
  
  return(
    <DataContext.Provider value={{data}} >
      {props.children}
    </DataContext.Provider>
  )
}

export default DataContextProvider;

