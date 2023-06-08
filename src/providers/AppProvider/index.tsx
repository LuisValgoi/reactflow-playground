import {
    createContext,
    Dispatch,
    RefObject,
    SetStateAction,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react'
import { ReactFlowJsonObject, useReactFlow, Viewport } from 'reactflow'
import { snakeCase } from 'lodash'
import { useNavigate, useParams } from 'react-router-dom'
import moment from 'moment'

import {
    FlowInstance,
    IElementNode,
    INavBar,
    INodeData,
    INodeType,
} from '@/interfaces'

import { DEFAULT_ZOOM } from '@/constants'

type IAppState = {
    skeletonRef: RefObject<HTMLElement>
    messages: INodeData[]
    canvasName: string
    defaultViewPort: Viewport
    reactFlowInstance: FlowInstance
    editingNode: IElementNode | undefined
    navBarSelected: INavBar
    isSelectionSelected: boolean
    saveCanvas: () => void
    updateNode: (nodeId: string, updatedNodeData: INodeData) => void
    removeNode: (nodeId: string) => void
    removeEdge: (edgeId: string) => void
    setCanvasName: Dispatch<SetStateAction<string>>
    setEditingNode: Dispatch<React.SetStateAction<IElementNode | undefined>>
    setNavBarSelected: Dispatch<SetStateAction<INavBar>>
    setIsSelectionSelected: Dispatch<SetStateAction<boolean>>
}

const AppContext = createContext<IAppState>({} as IAppState)

export function AppProvider({ children }: { children: JSX.Element }) {
    const skeletonRef = useRef<HTMLElement>(null)

    const { canvasId } = useParams<{ canvasId: string }>()

    const reactFlowInstance = useReactFlow()

    const initialCanvasName = useAppInitialName(canvasId)

    const [canvasName, setCanvasName] = useState(initialCanvasName)

    const [isSelectionSelected, setIsSelectionSelected] = useState(false)

    const [editingNode, setEditingNode] = useState<IElementNode>()

    const [navBarSelected, setNavBarSelected] = useState(INavBar.EDIT)

    const navigate = useNavigate()

    const defaultViewPort = useAppViewport(canvasId)

    const messages = useAppMessages()

    const saveCanvas = useCallback(() => {
        const canvasNameKey = snakeCase(canvasName)
        const canvasObject = reactFlowInstance?.toObject()
        localStorage.setItem(canvasNameKey, JSON.stringify(canvasObject))
        navigate(`/${canvasNameKey}`)
    }, [reactFlowInstance, canvasName])

    const updateNode = useCallback(
        (nodeId: string, data: INodeData) => {
            reactFlowInstance.setNodes((nodes) => {
                const idx = nodes.findIndex((nd) => nd.id === nodeId)
                nodes[idx].data = data
                nodes[idx].type = data.type
                return nodes
            })
        },
        [reactFlowInstance]
    )

    const removeNode = useCallback(
        (nodeId: string) => {
            reactFlowInstance.deleteElements({ nodes: [{ id: nodeId }] })
        },
        [reactFlowInstance]
    )

    const removeEdge = useCallback(
        (edgeId: string) => {
            reactFlowInstance.deleteElements({ edges: [{ id: edgeId }] })
        },
        [reactFlowInstance]
    )

    return (
        <AppContext.Provider
            value={{
                skeletonRef,
                messages,
                canvasName,
                reactFlowInstance,
                defaultViewPort,
                editingNode,
                navBarSelected,
                isSelectionSelected,
                setCanvasName,
                updateNode,
                removeNode,
                removeEdge,
                saveCanvas,
                setEditingNode,
                setNavBarSelected,
                setIsSelectionSelected,
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

function useAppInitialName(canvasId: string | undefined) {
    return useMemo(() => canvasId || `${new Date().getTime()}`, [canvasId])
}

function useAppCanvasData(canvasId: string | undefined) {
    const canvasName = useAppInitialName(canvasId)
    const canvasNameKey = snakeCase(canvasName)
    const canvasObjectRaw = localStorage.getItem(canvasNameKey)
    if (!canvasObjectRaw) {
        return undefined
    }

    return JSON.parse(canvasObjectRaw) as ReactFlowJsonObject
}

function useAppViewport(canvasId: string | undefined) {
    const canvasViewport = useAppCanvasData(canvasId)?.viewport

    const defaultViewPort = useMemo(() => {
        if (!canvasViewport) {
            return {
                x: DEFAULT_ZOOM,
                y: DEFAULT_ZOOM,
                zoom: DEFAULT_ZOOM,
            } as Viewport
        }
        return canvasViewport
    }, [canvasId])

    return defaultViewPort
}

function useAppMessages() {
    const messages: INodeData[] = useMemo(
        () => [
            {
                heading: 'USER-08433-Q',
                type: INodeType.ABC,
                scheduleDate: moment().add(1, 'days').toDate(),
                content:
                    '1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tristique efficitur est, eget tristique risus laoreet quis',
            },
            {
                heading: 'USER-08434-Q',
                type: INodeType.YN,
                scheduleDate: moment().add(2, 'days').toDate(),
                content:
                    '2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tristique efficitur est, eget tristique risus laoreet quis',
            },
            {
                heading: 'USER-08435-Q',
                type: INodeType.DEFAULT,
                scheduleDate: moment().add(3, 'days').toDate(),
                content:
                    '3Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tristique efficitur est, eget tristique risus laoreet quis',
            },
            {
                heading: 'USER-08436-Q',
                type: INodeType.DEFAULT,
                scheduleDate: moment().add(4, 'days').toDate(),
                content:
                    '4Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tristique efficitur est, eget tristique risus laoreet quis',
            },
            {
                heading: 'USER-08437-Q',
                type: INodeType.DEFAULT,
                scheduleDate: moment().add(5, 'days').toDate(),
                content:
                    '5Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tristique efficitur est, eget tristique risus laoreet quis',
            },
        ],
        []
    )

    return messages
}

export function useAppLoadDetailData(canvasId: string | undefined) {
    const { setViewport, setNodes, setEdges } = useReactFlow()

    useEffect(() => {
        const canvasDataRaw = localStorage.getItem(canvasId!)
        if (!canvasDataRaw) {
            return
        }

        const canvasData = JSON.parse(canvasDataRaw!) as ReactFlowJsonObject

        const { x = 0, y = 0, zoom = 1 } = canvasData.viewport
        setNodes(canvasData.nodes || [])
        setEdges(canvasData.edges || [])
        setViewport({ x, y, zoom })
    }, [])
}
