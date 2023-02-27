export type IMessageType = 'input' | 'output' | 'default' | 'messageNR'

export type IMessage = {
    heading: string
    content: string
    type: IMessageType
}
