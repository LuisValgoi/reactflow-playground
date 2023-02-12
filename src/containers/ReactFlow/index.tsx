import React, {
    DragEvent,
    MutableRefObject,
    useCallback,
    useState,
} from 'react'

import {
    addEdge,
    Connection,
    Node,
    ReactFlow as ReactFlowOriginal,
    ReactFlowProps,
    useEdgesState,
    useNodesState,
} from 'reactflow'

import { getNode, setMoveEffect } from '@/utils/ReactFlow'

import 'reactflow/dist/style.css'

const HIDE_REACT_FLOW_WATERMARK = true

const ReactFlow: React.FC<
    ReactFlowProps & { skeletonRef: MutableRefObject<HTMLElement> }
> = ({ children, skeletonRef, ...rest }) => {
    const [nodes, setNodes, onNodesChange] = useNodesState([])
    const [edges, setEdges, onEdgesChange] = useEdgesState([])
    const [instance, setInstance] = useState<any>()

    const onConnect = useCallback((connection: Connection) => {
        setEdges((eds) => addEdge(connection, eds))
    }, [])

    const onDragOver = useCallback((event: DragEvent<HTMLElement>) => {
        event.preventDefault()
        setMoveEffect(event)
    }, [])

    const onDrop = useCallback(
        (event: DragEvent<HTMLElement>) => {
            event.preventDefault()
            const newNode = getNode(event, skeletonRef, instance) as Node
            setNodes((nodes) => nodes.concat(newNode))
        },
        [instance]
    )

    return (
        <ReactFlowOriginal
            proOptions={{ hideAttribution: HIDE_REACT_FLOW_WATERMARK }}
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onInit={setInstance}
            onDrop={onDrop}
            onDragOver={onDragOver}
            {...rest}
        >
            {children}
        </ReactFlowOriginal>
    )
}

export default ReactFlow
