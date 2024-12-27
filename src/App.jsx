
import './App.css'
import Recipie_name_type from './Components/Recipie_name_type'
import Nav_bar from './Components/Nav_bar'
import Recipie_page from './Components/Recipie_page'
import './Recipie_page.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer'
import './footer.css';
import SearchResults from './Components/SearchResults'
import './SearchResults.css'; 
import './Recipie_page.css'
import { useState,useEffect } from 'react'
import Loader from './Components/Loader'
import './Loader.css'


function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let timer;
    const startTime = Date.now();

    const handleLoaded = () => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(3000 - elapsedTime, 0);

      timer = setTimeout(() => {
        setIsLoading(false);
      }, remainingTime);
    };

    if (document.readyState === 'complete') {
      handleLoaded();
    } else {
      window.addEventListener('load', handleLoaded);
    }

    return () => {
      window.removeEventListener('load', handleLoaded);
      if (timer) clearTimeout(timer);
    };
  }, []);


  if (isLoading) {
    return <Loader />;
  }

  return (
 
    
<BrowserRouter>
    <Nav_bar/>
<Routes>
    <Route path="/" element={<Recipie_name_type/>} />
    <Route path="/search" element={<SearchResults />} />
    <Route path="/recipe/:id" element={<Recipie_page />} />
</Routes>
<Footer />
</BrowserRouter>


  )
}

export default App
