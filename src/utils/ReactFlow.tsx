import { DragEvent, MutableRefObject } from 'react'
import { Node, ReactFlowInstance, useReactFlow } from 'reactflow'

const key = 'application/reactflow'

const getNodeType = (event: DragEvent<HTMLElement>) =>
    event.dataTransfer.getData(key)

const getNodeUID = () => Math.floor(Math.random() * 100)

const isDroppedElementInvalid = (type: string) =>
    typeof type === 'undefined' || !type

const getNodeBounds = (ref: MutableRefObject<HTMLElement>) =>
    ref.current.getBoundingClientRect()

const getNodePosition = (
    instance: ReactFlowInstance<any, any>,
    bounds: DOMRect,
    event: DragEvent<HTMLElement>
) =>
    instance.project({
        x: event.clientX - bounds.left,
        y: event.clientY - bounds.top,
    })

const getNodeStructure = (
    instance: ReactFlowInstance<any, any>,
    bounds: DOMRect,
    event: DragEvent<HTMLElement>
) => ({
    id: getNodeUID().toString(),
    type: getNodeType(event),
    position: getNodePosition(instance, bounds, event),
    data: { label: `${getNodeType(event)} node` },
})

export const getNode = (
    event: DragEvent<HTMLElement>,
    ref: MutableRefObject<HTMLElement>,
    instance: ReactFlowInstance<any, any>
): Node<{ label: string }, string> | undefined => {
    const type = getNodeType(event)
    if (isDroppedElementInvalid(type)) {
        return undefined
    }

    const bounds = getNodeBounds(ref)
    const node = getNodeStructure(instance, bounds, event)

    return node
}

export const setMoveEffect = (event: DragEvent<HTMLElement>) =>
    (event.dataTransfer.dropEffect = 'move')

export const addNode = (event: DragEvent<HTMLElement>, nodeType: string) =>
    event.dataTransfer.setData(key, nodeType)
