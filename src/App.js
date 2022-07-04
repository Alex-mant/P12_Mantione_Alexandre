import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop';
import Header from './components/Header/Index';
import Home from './pages/Home';
import DataContextProvider from './context/DataContext';

const App = () => {
  return (
    <Router>
      < Header />
      <ScrollToTop>
        <DataContextProvider>
          <Routes>
            <Route exact path='/sportSee/home' element= {<Home />}/>  
          </Routes>
        </DataContextProvider> 
      </ScrollToTop>
    </Router>
  )
}

export default App