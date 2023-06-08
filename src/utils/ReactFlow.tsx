import { DragEvent, MutableRefObject, RefObject } from 'react'
import { addEdge, Connection, Edge, Node, ReactFlowInstance } from 'reactflow'

import { FlowInstance, IElementNode, INodeData } from '@/interfaces'

const reactFlowKey = 'application/reactflow'

const reactFlowPaneKey = 'react-flow__pane'

const getDataFromLS = (event: DragEvent<HTMLElement>) => {
    return JSON.parse(event.dataTransfer.getData(reactFlowKey)) as INodeData
}

const getNodeUID = () => {
    return Math.floor(Math.random() * 100)
}

const getNodePosition = (
    instance: ReactFlowInstance<any, any>,
    bounds: DOMRect,
    event: DragEvent<HTMLElement>
) => {
    return instance.project({
        x: event.clientX - bounds.left,
        y: event.clientY - bounds.top,
    })
}

const getNodeData = (
    instance: ReactFlowInstance<any, any>,
    bounds: DOMRect,
    event: DragEvent<HTMLElement>
) => {
    const data = getDataFromLS(event)
    return {
        id: getNodeUID().toString(),
        type: data.type,
        position: getNodePosition(instance, bounds, event),
        data: {
            heading: data.heading,
            content: data.content,
            scheduleDate: data.scheduleDate,
            type: data.type,
        } as INodeData,
    } as IElementNode
}

const isNodeInPane = (event: DragEvent<HTMLElement> | any) => {
    return event.target.classList.contains(reactFlowPaneKey)
}

export const getNode = (
    event: DragEvent<HTMLElement>,
    ref: MutableRefObject<HTMLElement>,
    instance: ReactFlowInstance<any, any>
) => {
    const bounds = ref.current.getBoundingClientRect()
    const node = getNodeData(instance, bounds, event)

    return node
}

export const getNodesForConnection = (nodes: Node<INodeData>[]) => {
    return nodes.map((node) => ({ ...node, selected: false }))
}

export const getNodesForDropping = (
    event: DragEvent<HTMLElement>,
    skeletonRef: RefObject<HTMLElement>,
    instance: FlowInstance,
    nodes: IElementNode[]
) => {
    const ref = skeletonRef as MutableRefObject<HTMLElement>
    const newNode = getNode(event, ref, instance)
    return nodes.concat(newNode)
}

export const getEdgesForConnection = (
    edges: Edge<any>[],
    connection: Connection | any
) => {
    const existingEdge = edges.find((e) => e.target === connection.target)
    const mutatedEdges = {
        ...connection,
        data: {
            label: !!existingEdge
                ? existingEdge.data.label
                : connection.data.label,
        },
    }
    return addEdge(mutatedEdges, edges)
}

export const getEdgesForEdition = (
    edges: Edge<any>[],
    label: string,
    edgeId: string
) => {
    const targetEdge = edges.find((edge) => edge.id === edgeId)

    const sameTargetEdges = edges.filter(
        (edge) => edge.target === targetEdge?.target
    )

    const mutatedEdges = sameTargetEdges.map((edge) => ({
        ...edge,
        data: { ...edge.data, label },
    }))

    const diffEdges = edges.filter(
        (edge) => !mutatedEdges.map((edge) => edge.id).includes(edge.id)
    )

    const uniqueEdges = diffEdges.concat(mutatedEdges)
    return uniqueEdges
}

export const populateDataTransfer = (
    event: DragEvent<HTMLElement>,
    nodeData: INodeData
) => {
    event.dataTransfer.setData(reactFlowKey, JSON.stringify(nodeData))
}

export const isDropOperationValid = (
    event: DragEvent<HTMLElement>,
    instance: FlowInstance
) => {
    return isNodeInPane(event) && instance
}
