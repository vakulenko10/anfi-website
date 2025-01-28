import './App.css'
import Products from './components/myComponents/Products'
import { Login } from './components/pages/Login'
import { Button } from './components/ui/button'
import Counter from './Counter'
function App() {

  return (
    <>
     <Counter/>
     <Products/>
     <Login/>
    </>
  )
}

export default App
