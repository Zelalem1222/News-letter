import React , {useContext , useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TopNews } from './components/top-news';
import { Navbar } from './components/Navbar';
import { Search } from './components/search';
import { ArticleDetail } from './components/article-detail';
import './App.css';


function App() {
  const [country, setCountry] = useState('');

  return (
    <>
    <Navbar countryCode={setCountry}/>
    <div className="App">
      <Router>
      
        <Routes>
          <Route path="/" element={<TopNews country={country}/>} />
          <Route path="/search" element={<Search />} />
          <Route path="/article/:title" element={<ArticleDetail />} />
        </Routes>
      </Router>
      </div>
      </>
  );
}

export default App;
