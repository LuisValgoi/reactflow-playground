import { Edge, Node, ReactFlowInstance } from 'reactflow'

export const enum INodeType {
    ABC = 'ABCNode',
    YN = 'YesNoNode',
    DEFAULT = 'DefaultNode',
}

export const enum INavBar {
    EDIT = 'edit',
    SCHEDULE = 'schedule',
}

export const enum IEdgeType {
    DEFAULT = 'DefaultEdge',
}

type INodeDataCommon = {
    heading: string
    content: string
    type: INodeType
    scheduleDate: Date
}

type INodeDataABC = INodeDataCommon & {}

type INodeDataYN = INodeDataCommon & {}

type INodeDataDefault = INodeDataCommon & {}

export type INodeData = INodeDataABC | INodeDataYN | INodeDataDefault

export type IElementNode = Node<INodeDataCommon>

export type IEdgeData = Edge & {}

export type FlowInstance = ReactFlowInstance<INodeData, IEdgeData>
