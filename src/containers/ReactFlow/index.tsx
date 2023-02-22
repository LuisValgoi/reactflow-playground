import React, {
    DragEvent,
    memo,
    MutableRefObject,
    useCallback,
    useMemo,
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

import { getNode, isNodeInPane, setMoveEffect } from '@/utils/ReactFlow'

import MessageNR from '@/components/MessageNR'

import 'reactflow/dist/style.css'
import { IMessage } from '@/providers/MessageList'

const HIDE_REACT_FLOW_WATERMARK = true

const ReactFlow: React.FC<
    ReactFlowProps & { skeletonRef: MutableRefObject<HTMLElement> }
> = ({ children, skeletonRef, ...rest }) => {
    const [nodes, setNodes, onNodesChange] = useNodesState<IMessage>([])
    const [edges, setEdges, onEdgesChange] = useEdgesState([])
    const [instance, setInstance] = useState<any>()
    const nodeTypes = useMemo(() => ({ messageNR: MessageNR as any }), [])

    const onConnect = useCallback((connection: Connection) => {
        setEdges((eds) => addEdge(connection, eds))
    }, [])

    const onDragOver = useCallback((event: DragEvent<HTMLElement>) => {
        event.preventDefault()
        setMoveEffect(event)
    }, [])

    const onDrop = useCallback(
        (event: DragEvent<HTMLElement>) => {
            if (!isNodeInPane(event as any)) {
                return
            }

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
            nodeTypes={nodeTypes}
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

export default memo(ReactFlow)
