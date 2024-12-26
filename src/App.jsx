import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Recipie_name_type from './Components/Recipie_name_type'
import Nav_bar from './Components/Nav_bar'
import Recipie_page from './Components/Recipie_page'
import './Recipie_page.css'

function App() {

  return (
    <>
    <Nav_bar/>
    {/* <Recipie_name_type/> */}
    <Recipie_page />
    </>
  )
}

export default App
