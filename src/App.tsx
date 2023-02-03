import React, { useState } from 'react'
import Reactflow from '@/providers/Reactflow'
import Background from '@/components/Background'
import InteractiveControls from '@/components/InteractiveControls'
import SidebarControls from './components/SidebarControls'

function App() {
    return (
        <Reactflow>
            <Background />
            <InteractiveControls />
            <SidebarControls />
        </Reactflow>
    )
}

export default App
