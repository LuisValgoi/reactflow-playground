import React, { useState } from 'react'
import Background from '@/components/Background'
import InteractiveControls from '@/components/InteractiveControls'
import SidebarControls from '@/components/SidebarControls'
import SearchMessage from '@/components/SidebarControls/SearchMessage'

import { MessageListProvider } from '@/providers/MessageList'
import Reactflow from '@/providers/Reactflow'

import Messages from '@/containers/Messages'

function App() {
    return (
        <MessageListProvider>
            <Reactflow>
                <Background />
                <InteractiveControls />
                <SidebarControls>
                    <SearchMessage />
                    <Messages />
                </SidebarControls>
            </Reactflow>
        </MessageListProvider>
    )
}

export default App
