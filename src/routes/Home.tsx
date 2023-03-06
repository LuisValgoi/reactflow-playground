import React from 'react'

import Background from '@/components/Background'
import InteractiveControls from '@/components/InteractiveControls'
import SidebarControls from '@/components/SidebarControls'
import Skeleton from '@/components/Skeleton'
import TopBarControls from '@/components/TopBarControls'

import Flow from '@/containers/Flow'

import { AppProvider } from '@/providers/AppProvider'

const Home: React.FC = () => {
    return (
        <AppProvider>
            <Skeleton>
                <Flow>
                    <Background />
                    <InteractiveControls />
                    <TopBarControls />
                    <SidebarControls />
                </Flow>
            </Skeleton>
        </AppProvider>
    )
}

export default Home
