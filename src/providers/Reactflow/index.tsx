import { createContext, DragEvent, useCallback, useContext } from 'react'

import {
    ReactFlowProvider as ReactFlowProviderOriginal,
    useReactFlow as useReactFlowOriginal,
} from 'reactflow'

import { addNode, setMoveEffect } from '@/utils/ReactFlow'
import { IMessage } from '@/interfaces'

type ReactFlowState = {
    addMessage: (event: DragEvent<HTMLElement>, message: IMessage) => void
    removeMessage: (nodeId: string) => void
}

const ReactFlowContext = createContext<ReactFlowState>({} as ReactFlowState)

export function ReactFlowProvider({ children }: { children: JSX.Element }) {
    return (
        <ReactFlowProviderOriginal>
            <ReactFlowProviderCustom>{children}</ReactFlowProviderCustom>
        </ReactFlowProviderOriginal>
    )
}

function ReactFlowProviderCustom({ children }: { children: JSX.Element }) {
    const { deleteElements } = useReactFlowOriginal()

    const addMessage = useCallback(
        (event: DragEvent<HTMLElement>, message: IMessage) => {
            addNode(event, message)
            setMoveEffect(event)
        },
        []
    )

    const removeMessage = useCallback((nodeId: string) => {
        deleteElements({ nodes: [{ id: nodeId }] })
    }, [])

    return (
        <ReactFlowContext.Provider value={{ addMessage, removeMessage }}>
            {children}
        </ReactFlowContext.Provider>
    )
}

export function useReactFlow() {
    const context = useContext(ReactFlowContext)

    if (!context) {
        throw new Error('hook must be used within a provider')
    }

    const { addMessage, removeMessage } = context
    return { addMessage, removeMessage }
}
