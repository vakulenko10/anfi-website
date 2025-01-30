import './App.css'
import Products from './components/myComponents/Products'
import { Login } from './components/pages/Login/Login'
import { Button } from './components/ui/button'
import Counter from './Counter'
import RenderHeader, { RenderRoutes } from './structure/RenderNavigation'
function App() {

  return (
    <>
    <RenderHeader />
    <RenderRoutes />
     {/* <Counter/> */}
     {/* <Products/> */}
     {/* <Login/> */}
    </>
  )
}

export default App
