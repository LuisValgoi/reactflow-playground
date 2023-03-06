import React, {
    DragEvent,
    memo,
    MutableRefObject,
    useCallback,
    useMemo,
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

import { IMessage } from '@/interfaces'

import { getNode, isNodeInPane, setMoveEffect } from '@/utils/ReactFlow'

import ABCNode from '@/components/Nodes/ABCNode'
import YesNoNode from '@/components/Nodes/YesNoNode'
import DefaultNode from '@/components/Nodes/DefaultNode'

import { useApp } from '@/providers/AppProvider'

const HIDE_REACT_FLOW_WATERMARK = true

type IReactFlowCustomProps = ReactFlowProps & {}

const ReactFlowCustom: React.FC<IReactFlowCustomProps> = ({
    children,
    ...rest
}) => {
    const { skeletonRef, reactFlowInstance, setReactFlowInstance } = useApp()

    const [nodes, setNodes, onNodesChange] = useNodesState<IMessage>([])

    const [edges, setEdges, onEdgesChange] = useEdgesState([])

    const nodeTypes = useMemo(() => ({ ABCNode, YesNoNode, DefaultNode }), [])

    const onConnect = useCallback((connection: Connection) => {
        setEdges((eds) => addEdge(connection, eds))
    }, [])

    const onDragOver = useCallback((event: DragEvent<HTMLElement>) => {
        event.preventDefault()
        setMoveEffect(event)
    }, [])

    const onDrop = useCallback(
        (event: DragEvent<HTMLElement>) => {
            if (!isNodeInPane(event as any) || !reactFlowInstance) {
                return
            }

            event.preventDefault()
            const ref = skeletonRef as MutableRefObject<HTMLElement>
            const newNode = getNode(event, ref, reactFlowInstance) as Node
            setNodes((nodes) => nodes.concat(newNode))
        },
        [reactFlowInstance]
    )

    return (
        <ReactFlowOriginal
            proOptions={{ hideAttribution: HIDE_REACT_FLOW_WATERMARK }}
            nodes={nodes}
            edges={edges}
            nodeTypes={nodeTypes as any}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onInit={setReactFlowInstance}
            onDrop={onDrop}
            onDragOver={onDragOver}
            deleteKeyCode={[]}
            {...rest}
        >
            {children}
        </ReactFlowOriginal>
    )
}

export default memo(ReactFlowCustom)
