import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from '@/routes/Home'
import ErrorPage from '@/routes/ErrorPage'
import Detail from '@/routes/Detail'

const RoutesProvider: React.FC = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home />,
            errorElement: <ErrorPage />,
        },
        {
            path: '/:canvasId',
            element: <Detail />,
            errorElement: <ErrorPage />,
        },
    ])

    return <RouterProvider router={router} />
}

export default RoutesProvider
