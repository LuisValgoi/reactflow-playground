import { ReactFlowProvider } from 'reactflow'

import Background from '@/components/Background'
import InteractiveControls from '@/components/InteractiveControls'
import SidebarControls from '@/components/SidebarControls'
import Skeleton from '@/components/Skeleton'
import TopBarControls from '@/components/TopBarControls'

import { AppProvider } from '@/providers/AppProvider'

import ReactFlowContainer from '@/containers/ReactFlowContainer'

import './App.css';

function App() {
    return (
        <ReactFlowProvider>
            <AppProvider>
                <Skeleton>
                    <ReactFlowContainer>
                        <Background />
                        <InteractiveControls />
                        <TopBarControls />
                        <SidebarControls />
                    </ReactFlowContainer>
                </Skeleton>
            </AppProvider>
        </ReactFlowProvider>
    )
}

export default App
