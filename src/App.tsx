import { MutableRefObject, useRef } from 'react'

import Background from '@/components/Background'
import InteractiveControls from '@/components/InteractiveControls'
import SidebarControls from '@/components/SidebarControls'
import SearchMessage from '@/components/SidebarControls/SearchMessage'
import Skeleton from '@/components/Skeleton'

import { MessageListProvider } from '@/providers/MessageList'
import { ReactFlowProvider } from '@/providers/ReactFlow'

import ReactFlow from '@/containers/ReactFlow'
import Messages from '@/containers/Messages'

function App() {
    const skeletonRef = useRef<HTMLElement>(null)

    return (
        <MessageListProvider>
            <ReactFlowProvider>
                <Skeleton ref={skeletonRef}>
                    <ReactFlow
                        skeletonRef={skeletonRef as MutableRefObject<HTMLElement>}
                    >
                        <Background />
                        <InteractiveControls />
                        <SidebarControls>
                            <SearchMessage />
                            <Messages />
                        </SidebarControls>
                    </ReactFlow>
                </Skeleton>
            </ReactFlowProvider>
        </MessageListProvider>
    )
}

export default App
