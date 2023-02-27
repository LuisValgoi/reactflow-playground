import React from 'react'

import Background from '@/components/Background'
import InteractiveControls from '@/components/InteractiveControls'
import SidebarControls from '@/components/SidebarControls'
import Skeleton from '@/components/Skeleton'
import TopBarControls from '@/components/TopBarControls'

import ReactFlowCustom from '@/containers/ReactFlowCustom'

import { AppProvider } from '@/providers/AppProvider'

const Home: React.FC = () => {
    return (
        <AppProvider>
            <Skeleton>
                <ReactFlowCustom>
                    <Background />
                    <InteractiveControls />
                    <TopBarControls />
                    <SidebarControls />
                </ReactFlowCustom>
            </Skeleton>
        </AppProvider>
    )
}

export default Home
