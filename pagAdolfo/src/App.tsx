import { useState } from 'react'
import reactLogo from './assets/react.svg'
//import './App.css'
import {
  Routes,
  Route,
} from "react-router-dom";
import  {NavBar}  from "../src/Components/nav/navBar/NavBar";
function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
    <Route >
       <NavBar/>
      <Route />
    </Route>
  </Routes>
  )
}

export default App
