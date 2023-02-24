import { createContext, DragEvent, useCallback, useContext } from 'react'
import {
    ReactFlowInstance,
    ReactFlowProvider as ReactFlowProviderOriginal,
    useReactFlow as useReactFlowOriginal,
} from 'reactflow'

import { IMessage } from '@/interfaces'

import { addNode as addNodeUtils, setMoveEffect } from '@/utils/ReactFlow'

type ReactFlowState = {
    addNode: (event: DragEvent<HTMLElement>, message: IMessage) => void
    removeNode: (nodeId: string) => void
} & ReactFlowInstance<any, any>

const ReactFlowContext = createContext<ReactFlowState>({} as ReactFlowState)

export function ReactFlowProvider({ children }: { children: JSX.Element }) {
    return (
        <ReactFlowProviderOriginal>
            <ReactFlowProviderCustom>{children}</ReactFlowProviderCustom>
        </ReactFlowProviderOriginal>
    )
}

function ReactFlowProviderCustom({ children }: { children: JSX.Element }) {
    const { ...rest } = useReactFlowOriginal()

    const addNode = useCallback(
        (event: DragEvent<HTMLElement>, message: IMessage) => {
            addNodeUtils(event, message)
            setMoveEffect(event)
        },
        []
    )

    const removeNode = useCallback((nodeId: string) => {
        rest.deleteElements({ nodes: [{ id: nodeId }] })
    }, [])

    return (
        <ReactFlowContext.Provider
            value={{ ...rest, addNode, removeNode }}
        >
            {children}
        </ReactFlowContext.Provider>
    )
}

export function useReactFlow() {
    const context = useContext(ReactFlowContext)

    if (!context) {
        throw new Error('hook must be used within a provider')
    }

    const { addNode, removeNode, ...rest } = context
    return { addNode, removeNode, ...rest }
}
