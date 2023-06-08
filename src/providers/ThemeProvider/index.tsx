import React, { PropsWithChildren } from 'react'

import '@/styles/index.css'

import 'react-tooltip/dist/react-tooltip.css'

import 'reactflow/dist/style.css'

import 'react-datepicker/dist/react-datepicker.css'

const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
    return <>{children}</>
}

export default ThemeProvider
