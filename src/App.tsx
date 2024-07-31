import { RouterProvider, createBrowserRouter } from "react-router-dom"

import { GlobalStyle } from "./styles"
import Home from "./pages/Home"
import About from "./pages/About"


const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/about',
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
