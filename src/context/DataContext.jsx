import axios from 'axios';
import { useEffect } from 'react';
import { createContext } from 'react';
import { useState } from 'react';

export const DataContext = createContext();

const DataContextProvider = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://calm-gorge-80201.herokuapp.com/user/12").then((res) => setData(res.data))
  }, [])

  console.log(data);
  
  return(
    <DataContext.Provider value={{data}} >
      {props.children}
    </DataContext.Provider>
  )
}

export default DataContextProvider;

