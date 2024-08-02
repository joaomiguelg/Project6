import { RouterProvider, createBrowserRouter } from "react-router-dom"

import { GlobalStyle } from "./styles"
import Home from "./pages/Home"
import About from "./pages/Restaurante"


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


  return (
    <>
      <GlobalStyle />
      <RouterProvider router={routes} />
    </>
  )
}

export default App
