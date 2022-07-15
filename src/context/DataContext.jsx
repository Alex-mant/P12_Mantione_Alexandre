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

  let endpoints = [
    `https://calm-gorge-80201.herokuapp.com/user/${thisId}`,
    `https://calm-gorge-80201.herokuapp.com/user/${thisId}/activity`,
    `https://calm-gorge-80201.herokuapp.com/user/${thisId}/performance`,
    `https://calm-gorge-80201.herokuapp.com/user/${thisId}/average-sessions`,  
  ];
  
  // in array for each object get each data object
  useEffect(() => {
    Promise
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then( axios.spread(({data:{data:mainData}}, {data:{data:activity}}, {data:{data:performance}}, {data:{data:sessions}}) => {
        setData({ mainData, activity, performance, sessions });
      }))
      .catch((error) => {
        console.error(error)
        setError(error);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[thisId])
   
  return(
    <DataContext.Provider value={{data}} >
      {children}
    </DataContext.Provider>
  )
}

export {DataContext, DataContextProvider};
