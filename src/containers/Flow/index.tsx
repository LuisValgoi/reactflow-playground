import React, { DragEvent, memo, useCallback } from 'react'
import {
    Connection,
    ReactFlow,
    ReactFlowProps,
    SelectionMode,
    useEdgesState,
    useNodesState,
} from 'reactflow'

import { INodeData } from '@/interfaces'

import { DEFAULT_ZOOM, MAX_ZOOM, MIN_ZOOM } from '@/constants'

import {
    getEdgesForConnection,
    getNodesForConnection,
    isDropOperationValid,
    getNodesForDropping,
} from '@/utils/ReactFlow'

import { useApp } from '@/providers/AppProvider'

import edgeLines from '@/components/_edges_/edgeLines'
import edgeTypes from '@/components/_edges_/edgeTypes'
import edgeInfos from '@/components/_edges_/edgeInfos'
import nodeTypes from '@/components/_nodes_/nodeTypes'

const Flow: React.FC<ReactFlowProps> = ({ children, ...rest }) => {
    const {
        skeletonRef,
        reactFlowInstance,
        defaultViewPort,
        isSelectionSelected,
    } = useApp()

    const [nodes, setNodes, onNodesChange] = useNodesState<INodeData>([])

    const [edges, setEdges, onEdgesChange] = useEdgesState([])

    const onConnect = useCallback((connection: Connection) => {
        setNodes((nodes) => getNodesForConnection(nodes))
        setEdges((edges) => getEdgesForConnection(edges, connection))
    }, [])

    const onDragOver = useCallback((event: DragEvent<HTMLElement>) => {
        event.preventDefault()
    }, [])

    const onDrop = useCallback(
        (event: DragEvent<HTMLElement>) => {
            if (!isDropOperationValid(event, reactFlowInstance)) {
                return
            }

            event.preventDefault()
            setNodes((nodes) =>
                getNodesForDropping(
                    event,
                    skeletonRef,
                    reactFlowInstance,
                    nodes
                )
            )
        },
        [reactFlowInstance]
    )

    return (
        <ReactFlow
            deleteKeyCode={[]} // foi
            proOptions={{ hideAttribution: true }} // foi
            nodes={nodes}
            edges={edges}
            defaultViewport={defaultViewPort} // foi
            fitViewOptions={{ maxZoom: DEFAULT_ZOOM }} // foi
            maxZoom={MAX_ZOOM} // foi
            minZoom={MIN_ZOOM} // foi
            nodeTypes={nodeTypes}
            edgeTypes={edgeTypes}
            defaultEdgeOptions={edgeInfos}
            connectionLineComponent={edgeLines}
            panOnScroll={true}
            panOnDrag={isSelectionSelected ? [1, 2] : undefined} // foi
            zoomOnScroll={false} // foi
            selectionOnDrag // foi
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onDrop={onDrop}
            onDragOver={onDragOver}
            {...rest}
        >
            {children}
        </ReactFlow>
    )
}

export default memo(Flow)
