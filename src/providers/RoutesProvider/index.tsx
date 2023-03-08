import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from '@/routes/Home'
import ErrorPage from '@/routes/ErrorPage'
import Detail from '@/routes/Detail'
import { AppProvider } from '../AppProvider'

const RoutesProvider: React.FC = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: (
                <AppProvider>
                    <Home />
                </AppProvider>
            ),
            errorElement: <ErrorPage />,
        },
        {
            path: '/:canvasId',
            element: (
                <AppProvider>
                    <Detail />
                </AppProvider>
            ),
            errorElement: <ErrorPage />,
        },
    ])

    return <RouterProvider router={router} />
}

export default RoutesProvider
