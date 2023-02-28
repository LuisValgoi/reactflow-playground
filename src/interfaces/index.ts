export type IMessageType = 'input' | 'output' | 'default' | 'MessageABCNode' | 'MessageYesNoNode' | 'MessageDefaultNode'

export type IMessage = {
    heading: string
    content: string
    type: IMessageType
}
