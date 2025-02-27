import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router ,Routes,Route, BrowserRouter} from 'react-router-dom'
import VendorSearch from './pages/VendorsSearch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
     <Routes>
        <Route path={"/vendors"} element={<VendorSearch/>}/>
    </Routes>
    </Router> 
  )
}

export default App
 