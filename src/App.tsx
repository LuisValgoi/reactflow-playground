import { ReactFlowProvider } from 'reactflow'

import ThemeProvider from '@/providers/ThemeProvider'
import RoutesProvider from '@/providers/RoutesProvider'

function App() {
    return (
        <ThemeProvider>
            <ReactFlowProvider>
                <RoutesProvider />
            </ReactFlowProvider>
        </ThemeProvider>
    )
}

export default App
