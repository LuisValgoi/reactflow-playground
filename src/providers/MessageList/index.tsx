import { createContext, useContext } from 'react'

export type IMessageType = 'input' | 'output' | 'default' | 'messageNR'

export type IMessage = {
    title: string
    content: string
    type: IMessageType
}

export type IMessageListState = {
    messages: IMessage[]
}

const MessageListContext = createContext<IMessageListState>(
    {} as IMessageListState
)

export function MessageListProvider({ children }: { children: JSX.Element }) {
    const messages: IMessage[] = [
        {
            title: 'USER-08433-Q',
            type: 'messageNR',
            content:
                'Hello from %{provider_short_name}! We want to hear about your experience with our Call Center. Will you answer a quick 4-question text survey to help us improve the Call Center? Reply YES or NO',
        },
        {
            title: 'USER-08434-Q',
            type: 'output',
            content:
                'Hello from %{provider_short_name}! We want to hear about your experience with our Call Center. Will you answer a quick 4-question text survey to help us improve the Call Center? Reply YES or NO',
        },
        {
            title: 'USER-08435-Q',
            type: 'default',
            content:
                'Hello from %{provider_short_name}! We want to hear about your experience with our Call Center. Will you answer a quick 4-question text survey to help us improve the Call Center? Reply YES or NO',
        },
    ]

    return (
        <MessageListContext.Provider value={{ messages }}>
            {children}
        </MessageListContext.Provider>
    )
}

export function useMessageList() {
    const context = useContext(MessageListContext)

    if (!context) {
        throw new Error('hook must be used within a provider')
    }

    const { messages } = context
    return { messages }
}
