
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

function App() {

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
