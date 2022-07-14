import axios from 'axios';
import { useEffect } from 'react';
import { createContext } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const DataContext = createContext();

/**
 * The DataContextProvider function is a React component that uses the useState hook to set the initial
 * state of the data variable to an empty array, and the useEffect hook to fetch data from the API and
 * set the state of the data variable to the response data.
 * @returns An object with a property of data that is an array of objects.
 */
const DataContextProvider = ({children}) => {
  const [data, setData] = useState();
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState();

  let thisId = useLocation().pathname.split("user/")[1]
  
  useEffect(() => {
    const fetchData = async () => {   
      await axios
        .get(`https://calm-gorge-80201.herokuapp.com/user/${thisId}`)
        .then((res) => setData(res.data.data))
        .catch((error) => {
          console.error(error)
          setError(error)
        })
    };
    fetchData();
  },[thisId])
   
  return(
    <DataContext.Provider value={{data}} >
      {children}
    </DataContext.Provider>
  )
}

export {DataContext, DataContextProvider}

