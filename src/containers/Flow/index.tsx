import React, { DragEvent, memo, MutableRefObject, useCallback } from 'react'
import {
    addEdge,
    Connection,
    Edge,
    Node,
    ReactFlow as ReactFlowOriginal,
    ReactFlowProps,
    useEdgesState,
    useNodesState,
} from 'reactflow'

import { IEdgeType, IMessage } from '@/interfaces'

import { DEFAULT_ZOOM, MAX_ZOOM, MIN_ZOOM } from '@/constants'

import { getNode, isNodeInPane, setMoveEffect } from '@/utils/ReactFlow'

import { useApp } from '@/providers/AppProvider'

import edgeTypes from '@/components/_edges_/types'
import nodeTypes from '@/components/_nodes_/types'
import DefaultLine from '@/components/_lines_/DefaultLine'

const Flow: React.FC<ReactFlowProps> = ({ children, ...rest }) => {
    const {
        skeletonRef,
        reactFlowInstance,
        defaultViewPort,
        setReactFlowInstance,
    } = useApp()

    const [nodes, setNodes, onNodesChange] = useNodesState<IMessage>([])

    const [edges, setEdges, onEdgesChange] = useEdgesState([])

    const onConnect = useCallback((connection: Connection) => {
        setEdges((existingEdges) => {
            const newEdge = { ...connection, type: IEdgeType.DEFAULT } as Edge
            return addEdge(newEdge, existingEdges)
        })
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
            // deleteKeyCode={[]}
            proOptions={{ hideAttribution: true }}
            nodes={nodes}
            edges={edges}
            defaultViewport={defaultViewPort}
            fitViewOptions={{ maxZoom: DEFAULT_ZOOM }}
            maxZoom={MAX_ZOOM}
            minZoom={MIN_ZOOM}
            nodeTypes={nodeTypes}
            edgeTypes={edgeTypes}
            connectionLineComponent={DefaultLine}
            panOnScroll={true}
            zoomOnScroll={false}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onInit={setReactFlowInstance}
            onDrop={onDrop}
            onDragOver={onDragOver}
            {...rest}
        >
            {children}
        </ReactFlowOriginal>
    )
}

export default memo(Flow)
