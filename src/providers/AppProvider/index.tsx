import {
    createContext,
    Dispatch,
    DragEvent,
    useCallback,
    useContext,
    useMemo,
    useState,
} from 'react'
import { useReactFlow } from 'reactflow'

import { IMessage } from '@/interfaces'

import { addNode as addNodeUtils, setMoveEffect } from '@/utils/ReactFlow'

type IAppState = {
    messages: IMessage[]
    canvasName: string
    setCanvasName: Dispatch<React.SetStateAction<string>>
    saveCanvas: () => void
    addNode: (event: DragEvent<HTMLElement>, message: IMessage) => void
    removeNode: (nodeId: string) => void
}

const AppContext = createContext<IAppState>({} as IAppState)

export function AppProvider({ children }: { children: JSX.Element }) {
    const { deleteElements } = useReactFlow()

    const [canvasName, setCanvasName] = useState('Gap in Care')

    const messages: IMessage[] = useMemo(
        () => [
            {
                heading: 'USER-08433-Q',
                type: 'messageNR',
                content:
                    'Hello from %{provider_short_name}! We want to hear about your experience with our Call Center. Will you answer a quick 4-question text survey to help us improve the Call Center? Reply YES or NO',
            },
            {
                heading: 'USER-08434-Q',
                type: 'output',
                content:
                    'Hello from %{provider_short_name}! We want to hear about your experience with our Call Center. Will you answer a quick 4-question text survey to help us improve the Call Center? Reply YES or NO',
            },
            {
                heading: 'USER-08435-Q',
                type: 'default',
                content:
                    'Hello from %{provider_short_name}! We want to hear about your experience with our Call Center. Will you answer a quick 4-question text survey to help us improve the Call Center? Reply YES or NO',
            },
        ],
        []
    )

    const saveCanvas = useCallback(() => {
        alert('uahe')
    }, [])

    const addNode = useCallback(
        (event: DragEvent<HTMLElement>, message: IMessage) => {
            addNodeUtils(event, message)
            setMoveEffect(event)
        },
        []
    )

    const removeNode = useCallback((nodeId: string) => {
        deleteElements({ nodes: [{ id: nodeId }] })
    }, [])

    return (
        <AppContext.Provider
            value={{
                messages,
                canvasName,
                setCanvasName,
                addNode,
                removeNode,
                saveCanvas,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export function useApp() {
    const context = useContext(AppContext)

    if (!context) {
        throw new Error('hook must be used within a provider')
    }

    return context
}
