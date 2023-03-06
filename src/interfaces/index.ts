export const enum INodeType {
    ABC = 'ABCNode',
    YN = 'YesNoNode',
    DEFAULT = 'DefaultNode',
}

export const enum IEdgeType {
    DEFAULT = 'DefaultEdge',
}

export type IMessage = {
    heading: string
    content: string
    type: INodeType
}
