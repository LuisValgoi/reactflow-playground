import { BaseSyntheticEvent, DragEvent, MutableRefObject } from 'react'
import { Node, ReactFlowInstance } from 'reactflow'

import { IMessage } from '@/interfaces'

const reactFlowKey = 'application/reactflow'

const reactFlowPaneKey = 'react-flow__pane'

const getNodeData = (event: DragEvent<HTMLElement>) => {
    return JSON.parse(event.dataTransfer.getData(reactFlowKey)) as IMessage
}

const getNodeUID = () => {
    return Math.floor(Math.random() * 100)
}

const isDroppedElementInvalid = (type: string) => {
    return typeof type === 'undefined' || !type
}

const getNodeBounds = (ref: MutableRefObject<HTMLElement>) => {
    return ref.current.getBoundingClientRect()
}

const getNodePosition = (
    instance: ReactFlowInstance<any, any>,
    bounds: DOMRect,
    event: DragEvent<HTMLElement>
) => {
    return instance.project({
        x: event.clientX - 280 - bounds.left,
        y: event.clientY - bounds.top,
    })
}

const getNodeStructure = (
    instance: ReactFlowInstance<any, any>,
    bounds: DOMRect,
    event: DragEvent<HTMLElement>
) => {
    const data = getNodeData(event)
    return {
        id: getNodeUID().toString(),
        type: data.type,
        position: getNodePosition(instance, bounds, event),
        data: {
            label: `${data.type} testing`,
            heading: data.heading,
            content: data.content,
            type: data.type,
        },
    }
}

export const getNode = (
    event: DragEvent<HTMLElement>,
    ref: MutableRefObject<HTMLElement>,
    instance: ReactFlowInstance<any, any>
): Node<IMessage, string> | undefined => {
    const data = getNodeData(event)
    const type = data.type
    if (isDroppedElementInvalid(type)) {
        return undefined
    }

    const bounds = getNodeBounds(ref)
    const node = getNodeStructure(instance, bounds, event)

    return node
}

export const setMoveEffect = (event: DragEvent<HTMLElement>) => {
    event.dataTransfer.dropEffect = 'move'
}

export const addNode = (event: DragEvent<HTMLElement>, message: IMessage) => {
    event.dataTransfer.setData(reactFlowKey, JSON.stringify(message))
}

export const isNodeInPane = (event: BaseSyntheticEvent<HTMLElement>) => {
    return event.target.classList.contains(reactFlowPaneKey)
}