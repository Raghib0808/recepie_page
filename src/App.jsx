import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Recipie_name_type from './Components/Recipie_name_type'
import Nav_bar from './Components/Nav_bar'
import Recipie_page from './Components/Recipie_page'
import './Recipie_page.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (
 
    
<BrowserRouter>
    <Nav_bar/>
<Routes>
    <Route path="/" element={<Recipie_name_type/>} />
    {/* <Route path="/search/:query" element={<SearchResults />} /> */}
    <Route path="/recipe/:id" element={<Recipie_page />} />
</Routes>
</BrowserRouter>


  )
}

export default App
