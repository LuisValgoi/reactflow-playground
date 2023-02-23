import { createContext, DragEvent, useContext } from 'react'

import { ReactFlowProvider as ReactFlowProviderOriginal } from 'reactflow'

import { addNode, setMoveEffect } from '@/utils/ReactFlow'
import { IMessage } from '@/interfaces'

type ReactFlowState = {
    addMessage: (event: DragEvent<HTMLElement>, message: IMessage) => void
}

const ReactFlowContext = createContext<ReactFlowState>({} as ReactFlowState)

export function ReactFlowProvider({ children }: { children: JSX.Element }) {
    const addMessage = (event: DragEvent<HTMLElement>, message: IMessage) => {
        addNode(event, message)
        setMoveEffect(event)
    }

    return (
        <ReactFlowProviderOriginal>
            <ReactFlowContext.Provider value={{ addMessage }}>
                {children}
            </ReactFlowContext.Provider>
        </ReactFlowProviderOriginal>
    )
}

export function useReactFlow() {
    const context = useContext(ReactFlowContext)

    if (!context) {
        throw new Error('hook must be used within a provider')
    }

    const { addMessage } = context
    return { addMessage }
}
