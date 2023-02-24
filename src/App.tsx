import { MutableRefObject, useRef } from 'react'

import Background from '@/components/Background'
import InteractiveControls from '@/components/InteractiveControls'
import SidebarControls from '@/components/SidebarControls'
import Skeleton from '@/components/Skeleton'
import TopBarControls from '@/components/TopBarControls'

import { AppProvider } from '@/providers/AppProvider'
import { ReactFlowProvider } from '@/providers/ReactFlow'

import ReactFlow from '@/containers/ReactFlow'

function App() {
    const skeletonRef = useRef<HTMLElement>(null)

    return (
        <AppProvider>
            <ReactFlowProvider>
                <Skeleton ref={skeletonRef}>
                    <ReactFlow
                        skeletonRef={
                            skeletonRef as MutableRefObject<HTMLElement>
                        }
                    >
                        <Background />
                        <InteractiveControls />
                        <TopBarControls />
                        <SidebarControls>
                        </SidebarControls>
                    </ReactFlow>
                </Skeleton>
            </ReactFlowProvider>
        </AppProvider>
    )
}

export default App
