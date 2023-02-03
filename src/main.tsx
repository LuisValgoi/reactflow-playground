import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Skeleton from './components/Skeleton'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Skeleton>
            <App />
        </Skeleton>
    </React.StrictMode>
)
