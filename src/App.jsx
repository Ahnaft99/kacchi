import Home from "./pages/Home"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Item from "./pages/Item"
import Layout from "./Components/Root/Layout"

const router =createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout/>}>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/Item" element={<Item/>}></Route>
  </Route>
))



function App() {
 

  return (
    <>
   <RouterProvider router={router}/>
    </>
  )
}

export default App
