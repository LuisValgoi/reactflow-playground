import React, { useState } from 'react'
import Reactflow from '@/providers/Reactflow'
import Background from '@/components/Background'
import Controls from '@/components/Controls'

function App() {
    return (
        <Reactflow>
            <Background />
            <Controls />
        </Reactflow>
    )
}

export default App
