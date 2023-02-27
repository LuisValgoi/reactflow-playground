import { ReactFlowProvider } from 'reactflow'

import Background from '@/components/Background'
import InteractiveControls from '@/components/InteractiveControls'
import SidebarControls from '@/components/SidebarControls'
import Skeleton from '@/components/Skeleton'
import TopBarControls from '@/components/TopBarControls'

import { AppProvider } from '@/providers/AppProvider'
import ThemeProvider from '@/providers/ThemeProvider'

import ReactFlowContainer from '@/containers/ReactFlowContainer'

function App() {
    return (
        <ThemeProvider>
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
        </ThemeProvider>
    )
}

export default App
