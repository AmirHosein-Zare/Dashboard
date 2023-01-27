import React from 'react'
import routes from './routes'
import { useRoutes } from 'react-router-dom'
import Topbar from './components/TopBar/Topbar'

export default function App() {
    
    let router = useRoutes(routes)
    
    return (
        <>
            <Topbar />
            {router}
        </>
    )
}
