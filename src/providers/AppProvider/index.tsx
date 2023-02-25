import {
    createContext,
    Dispatch,
    DragEvent,
    RefObject,
    SetStateAction,
    useCallback,
    useContext,
    useMemo,
    useRef,
    useState,
} from 'react'
import { ReactFlowInstance, useReactFlow } from 'reactflow'

import { IMessage } from '@/interfaces'

import { addNode as addNodeUtils, setMoveEffect } from '@/utils/ReactFlow'
import { snakeCase } from 'lodash'

type IAppState = {
    skeletonRef: RefObject<HTMLElement>
    messages: IMessage[]
    canvasName: string
    reactFlowInstance: ReactFlowInstance<any, any> | undefined
    saveCanvas: () => void
    addNode: (event: DragEvent<HTMLElement>, message: IMessage) => void
    removeNode: (nodeId: string) => void
    setCanvasName: Dispatch<SetStateAction<string>>
    setReactFlowInstance: Dispatch<ReactFlowInstance>
}

const AppContext = createContext<IAppState>({} as IAppState)

export function AppProvider({ children }: { children: JSX.Element }) {
    const skeletonRef = useRef<HTMLElement>(null)

    const { deleteElements } = useReactFlow()

    const [rfInstance, setRfInstance] = useState<ReactFlowInstance>()

    const [canvasName, setCanvasName] = useState('Gap in Care')

    const saveCanvas = useCallback(() => {
        const canvasNameKey = snakeCase(canvasName)
        const canvasObject = rfInstance?.toObject()
        console.log(canvasNameKey, canvasObject)
        // TODO: Complete
        // localStorage.setItem(key, value)
    }, [rfInstance, canvasName])

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

    return (
        <AppContext.Provider
            value={{
                skeletonRef,
                messages,
                canvasName,
                reactFlowInstance: rfInstance,
                setCanvasName,
                addNode,
                removeNode,
                saveCanvas,
                setReactFlowInstance: setRfInstance,
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
