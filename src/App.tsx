import { useRef } from 'react'
import { ReactFlowProvider } from 'reactflow'

import Background from '@/components/Background'
import InteractiveControls from '@/components/InteractiveControls'
import SidebarControls from '@/components/SidebarControls'
import Skeleton from '@/components/Skeleton'
import TopBarControls from '@/components/TopBarControls'

import { AppProvider } from '@/providers/AppProvider'

import ReactFlowContainer from '@/containers/ReactFlowContainer'

function App() {
    const skeletonRef = useRef<HTMLElement>(null)

    return (
        <ReactFlowProvider>
            <AppProvider>
                <Skeleton ref={skeletonRef}>
                    <ReactFlowContainer skeletonRef={skeletonRef}>
                        <Background />
                        <InteractiveControls />
                        <TopBarControls />
                        <SidebarControls></SidebarControls>
                    </ReactFlowContainer>
                </Skeleton>
            </AppProvider>
        </ReactFlowProvider>
    )
}

export default App
