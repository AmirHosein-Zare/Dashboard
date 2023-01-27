import React from 'react'
import routes from './routes'
import { useRoutes } from 'react-router-dom'

export default function App() {
    
    let router = useRoutes(routes)
    
    return (
        <>
            {router}
        </>
    )
}
