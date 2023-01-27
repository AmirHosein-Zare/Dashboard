import Home from "./pages/home/Home"
import UserList from "./pages/Users/UserList"

let routes = [
    {path:'/', element: <Home />},
    {path:'/users', element: <UserList />},
    {path:'/newuser', element: <NewUSer />},
]

export default routes