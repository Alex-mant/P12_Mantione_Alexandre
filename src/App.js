import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header/Index';
import Home from './pages/Home';
import Error404 from './pages/404';
import {DataContextProvider} from './services/DataContext';


/**
 * The App function returns a Router component that contains a Header component, a ScrollToTop
 * component that contains a DataContextProvider component that contains a Routes component that
 * contains a Route component that contains a Home component.
 * @returns The return statement is returning the Router component.
 */

const App = () => {
  return (
    <Router>
      <Header/>
      <DataContextProvider>
        <Routes>
          <Route exact path='/sportSee/home' element= {<Home />}/>
          <Route path ="*" element={<Error404/>}/> 
        </Routes>
      </DataContextProvider> 
    </Router>
  )
}

export default App