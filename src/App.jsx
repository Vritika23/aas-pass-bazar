import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router ,Routes,Route, BrowserRouter, Navigate} from 'react-router-dom'
import VendorSearch from './pages1/VendorsSearch'
import CommunityForums from './pages1/CommunityForumsComponent'
import HeaderMain from './pages/header/HeaderMain'
import HomeMain from './pages/home/HomeMain'
import ProductDiscovery from './pages/product-discovery/ProductDiscoveryMain'
import ProductDetails from './pages/product-discovery/IndividualProduct'
import Footer from './components/Footer'
// import PopularCategories from './pages/popularCategories'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <HeaderMain/>
     <Routes>
        <Route path={"/vendors"} element={<VendorSearch/>}/>
        <Route path={"/forums"} element={<CommunityForums/>}/>
        <Route path={"/home"} element={<HomeMain/>}/>
        <Route path={"/product-discovery"} element={<ProductDiscovery/>}/>
        <Route path={"/product/:id"} element={<ProductDetails/>}/>
        <Route path={"/*"} element={<Navigate to="/home"/>}/>


        {/* <Route path={"/popular-categories"} element={<PopularCategories/>}/> */}
    </Routes>
    <Footer/>
    </Router> 
  )
}

export default App
 