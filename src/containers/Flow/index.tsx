import React, { DragEvent, memo, MutableRefObject, useCallback } from 'react'
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

import edgeTypes from '@/components/_edges_/types'
import nodeTypes from '@/components/_nodes_/types'
import DefaultLine from '@/components/_edges_/DefaultLine'

import { useApp } from '@/providers/AppProvider'
import { DEFAULT_ZOOM, MAX_ZOOM, MIN_ZOOM } from '@/constants'

const Flow: React.FC<ReactFlowProps> = ({ children, ...rest }) => {
    const { skeletonRef, reactFlowInstance, defaultViewPort, setReactFlowInstance } = useApp()

    const [nodes, setNodes, onNodesChange] = useNodesState<IMessage>([])

    const [edges, setEdges, onEdgesChange] = useEdgesState([])

    const onConnect = useCallback((connection: Connection) => {
        setEdges((eds) =>
            addEdge(
                {
                    ...connection,
                    type: 'DefaultEdge',
                },
                eds
            )
        )
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
            proOptions={{ hideAttribution: true }}
            nodes={nodes}
            edges={edges}
            defaultViewport={defaultViewPort}
            fitViewOptions={{ maxZoom: DEFAULT_ZOOM }}
            maxZoom={MAX_ZOOM}
            minZoom={MIN_ZOOM}
            nodeTypes={nodeTypes}
            edgeTypes={edgeTypes}
            panOnScroll={true}
            zoomOnScroll={false}
            connectionLineComponent={DefaultLine}
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

export default memo(Flow)
