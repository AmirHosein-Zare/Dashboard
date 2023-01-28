import Home from "./pages/Home/Home"
import Users from "./pages/Users/UserList"
import NewUser from "./pages/NewUser/NewUser"
import Products from "./pages/Products/Products"
import Product from "./pages/Product/Product"

let routes = [
    {path:'/', element: <Home />},
    {path:'/users', element: <Users />},
    {path:'/newuser', element: <NewUser />},
    {path:'/products', element: <Products />},
    {path:'/product/:productID', element: <Product />},
]

export default routes