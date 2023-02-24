import { createContext, useContext } from 'react'

import { IMessage, IAppState } from '@/interfaces'

const AppContext = createContext<IAppState>({} as IAppState)

export function AppProvider({ children }: { children: JSX.Element }) {
    const messages: IMessage[] = [
        {
            heading: 'USER-08433-Q',
            type: 'messageNR',
            content:
                'Hello from %{provider_short_name}! We want to hear about your experience with our Call Center. Will you answer a quick 4-question text survey to help us improve the Call Center? Reply YES or NO',
        },
        {
            heading: 'USER-08434-Q',
            type: 'output',
            content:
                'Hello from %{provider_short_name}! We want to hear about your experience with our Call Center. Will you answer a quick 4-question text survey to help us improve the Call Center? Reply YES or NO',
        },
        {
            heading: 'USER-08435-Q',
            type: 'default',
            content:
                'Hello from %{provider_short_name}! We want to hear about your experience with our Call Center. Will you answer a quick 4-question text survey to help us improve the Call Center? Reply YES or NO',
        },
    ]

    return (
        <AppContext.Provider value={{ messages }}>
            {children}
        </AppContext.Provider>
    )
}

export function useApp() {
    const context = useContext(AppContext)

    if (!context) {
        throw new Error('hook must be used within a provider')
    }

    const { messages } = context
    return { messages }
}
