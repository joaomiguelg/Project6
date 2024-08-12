import { RouterProvider, createBrowserRouter } from "react-router-dom"


import { GlobalStyle } from "./styles"
import Home from "./pages/Home"
import About from "./pages/Restaurante"
import { Provider } from "react-redux"
import { store } from "./store"


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
    <Provider store={store}>
      <GlobalStyle />
      <RouterProvider router={routes} />
    </Provider>
    </>
  )
}

export default App
