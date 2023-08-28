
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route

} from "react-router-dom";


import Navbar from './components/header/Navbar';
import Footer from './components/footer/Footer';
import HomePage from './pages/homepage/HomePage';
import CategoryPage from './pages/catagorypage/CategoryPage';
import DetailsPage from './pages/detailspage/DetailsPage';
import SearchResult from './pages/searchresult/SearchResultPage';
import PageNotFound from './pages/404/PageNotFound';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/Product/:id' element={<DetailsPage />} />
        <Route path='/Category/:id' element={<CategoryPage />} />
        <Route path='/search/:query' element={<SearchResult />} />
        <Route path='*' element={<PageNotFound />} />

      </Routes>

      <Footer />
      
    </Router>
  );
}

export default App;
