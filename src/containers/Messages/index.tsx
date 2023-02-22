import React, { DragEvent } from 'react'

import MessageBase from '@/components/MessageBase'

import { useMessageList } from '@/providers/MessageList'
import { useReactFlow } from '@/providers/ReactFlow'

import styles from './index.module.scss'

const Messages: React.FC = () => {
    const { messages } = useMessageList()
    const { addMessage } = useReactFlow()

    return (
        <ul className={styles.list}>
            {messages.map((message) => (
                <MessageBase
                    as="li"
                    draggable
                    onDragStart={(event: DragEvent<HTMLLIElement>) =>
                        addMessage(event, message.type)
                    }
                    key={message.title}
                    heading={message.title}
                    content={message.content}
                />
            ))}
        </ul>
    )
}

export default Messages
