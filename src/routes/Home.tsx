import React from 'react'

import Background from '@/components/Background'
import InteractiveControls from '@/components/InteractiveControls'
import SidebarControls from '@/components/SidebarControls'
import Skeleton from '@/components/Skeleton'
import TopBarControls from '@/components/TopBarControls'
import NodeSetting from '@/components/NodeSetting'

import Flow from '@/containers/Flow'

const Home: React.FC = () => {
    return (
        <Skeleton>
            <Flow>
                <Background />
                <InteractiveControls />
                <TopBarControls />
                <SidebarControls />
                <NodeSetting />
            </Flow>
        </Skeleton>
    )
}

export default Home
