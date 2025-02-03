import { useDispatch } from 'react-redux'
import './App.css'
import Cart from './components/myComponents/Cart'
import Products from './components/myComponents/Products'
import { Login } from './components/pages/Login/Login'
import { Button } from './components/ui/button'
import Counter from './Counter'
import RenderHeader, { RenderRoutes } from './structure/RenderNavigation'
import Cookies from 'js-cookie'
import { useEffect } from 'react'
import { autoLoginUser } from './store/slices/AuthSlice'
import { AppDispatch } from './store'

function App() {
  
  return (
    <>
    <RenderHeader />
    <RenderRoutes />
    <Cart/>
     {/* <Counter/> */}
     {/* <Products/> */}
     {/* <Login/> */}
    </>
  )
}

export default App
