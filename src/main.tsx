import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {createBrowserRouter, createRoutesFromElements,Route,RouterProvider } from  'react-router-dom'
import Root from './Root.tsx'
import Products from './components/Products.tsx'
import Signin from './components/Signin.tsx'
import RequiredAuth from './components/RequiredAuth.tsx'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'
import ProductDetails from './components/ProductDetails.tsx'



const router =createBrowserRouter(
  
  createRoutesFromElements(
    <Route element={<Root/>}>
<Route index element={<App/>}></Route>
<Route path='/Products'>
<Route index  element={<RequiredAuth ><Products/></RequiredAuth>}></Route>
  <Route path=':productId' element={<RequiredAuth ><ProductDetails/></RequiredAuth>}></Route>
</Route>
<Route path='/Signin' element={<Signin/>}></Route>

</Route>
  )
)



ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}><RouterProvider router={router}></RouterProvider></Provider>
  ,
)
