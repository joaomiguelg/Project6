import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { GlobalStyle } from "./styles"
import Home from "./pages/Home"
import About from "./pages/Restaurante"
import { Provider} from "react-redux"
import { store } from "./store"
import Cart from "./components/Cart"
import Shipping from "./components/Shipping"
import Payment from "./components/Payment"
import { useState } from "react"
import Confirm from "./components/Confirm"


const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/restaurante/:id',
    element: <About />
  }
])


function App() {

  const [ openShipping, setOpenShipping] = useState<boolean>(false)
  const [ openPayment, setOpenPayment] = useState<boolean>(false)
  


  
 

  const closeShipping = () => {
    setOpenShipping(false)
    setOpenPayment(true)
  }

  const backToCart = () => {
    setOpenShipping(false)

  }

  const backToEnd = () => {
    setOpenPayment(false)
    setOpenShipping(true)
  }

  const closePayment = () => {
    setOpenPayment(false)
  }
  return (
  
    <Provider store={store}>
      <GlobalStyle />
      <RouterProvider router={routes} />
      <Cart openShipping={() => setOpenShipping(true)} />
      {openShipping && <Shipping closeShipping={closeShipping} backToCart={backToCart} />}
      {openPayment && <Payment backToEnd={backToEnd}  /> }
      <Confirm closePayment={closePayment}  />
    </Provider>
    
  )
}

export default App
