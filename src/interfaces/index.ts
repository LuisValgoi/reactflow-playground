export type IMessageType = 'input' | 'output' | 'default' | 'ABCNode' | 'YesNoNode' | 'DefaultNode'

export type IMessage = {
    heading: string
    content: string
    type: IMessageType
}
