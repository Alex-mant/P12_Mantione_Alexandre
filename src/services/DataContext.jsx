/* eslint-disable eqeqeq */
import axios from 'axios';
import { useEffect } from 'react';
import { createContext } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_MAIN_DATA, USER_PERFORMANCE } from '../mock/mockedData';
import UserData from '../model/UserData';

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

  /**
   * It takes a string as an argument, and returns the value of the URL parameter with the same name
   */
  const searchGet = (str) => new URLSearchParams(window.location.search).get(str);
  const userId = searchGet('user');
  const mockedId = searchGet('mockedUser');

  const isMocked = useLocation().search === `?mockedUser=${mockedId}`;
  
  const rootUrl = `http://localhost:3000/user/${userId}`
  
  let endpoints = [
    `/`,
    `/activity`,
    `/performance`,
    `/average-sessions`,  
  ];
  
  useEffect(() => {
    isMocked ? retreiveMockedData(setData, mockedId) :
    Promise
    .all(endpoints.map((endpoint) => axios.get(rootUrl+endpoint)))
    .then( axios.spread(({data:{data:mainData}}, {data:{data:activity}}, {data:{data:performance}}, {data:{data:sessions}}) => {
      setData(new UserData({ mainData, activity, performance, sessions }));
    }))
    .catch((error) => {
      console.error(error)
      setError(error);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[userId, mockedId])
    
  return(
    <DataContext.Provider value={{data}} >
      {children}
    </DataContext.Provider>
  )
}

const retreiveMockedData = (setData, mockedId) => {

 /**
  * It filters an array of objects and returns the object that has an id or userId that matches the
  * mockedId
  */
  const filterData = (array) => array.filter((data) => data.id ? data.id == mockedId : data.userId == mockedId)

  const mainData = filterData(USER_MAIN_DATA)[0];
  const activity = filterData(USER_ACTIVITY)[0];
  const sessions = filterData(USER_AVERAGE_SESSIONS)[0];
  const performance = filterData(USER_PERFORMANCE)[0];
  
  return setData(new UserData({mainData, activity, sessions, performance}));

}

export {DataContext, DataContextProvider};
