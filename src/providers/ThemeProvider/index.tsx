import React, { PropsWithChildren } from 'react'

import '@/styles/index.css'

import 'react-tooltip/dist/react-tooltip.css';

const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
    return <>{children}</>
}

export default ThemeProvider
