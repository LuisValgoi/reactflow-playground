import React, { DragEvent } from 'react'

import MessageBaseNode from '@/components/Node/MessageBaseNode'

import { useMessageList } from '@/providers/MessageList'
import { useReactFlow } from '@/providers/ReactFlow'

import styles from './index.module.scss'

const Messages: React.FC = () => {
    const { messages } = useMessageList()
    const { addMessage } = useReactFlow()

    return (
        <ul className={styles.list}>
            {messages.map((message) => (
                <MessageBaseNode
                    as="li"
                    draggable
                    key={message.heading}
                    heading={message.heading}
                    content={message.content}
                    onDragStart={(event: DragEvent<HTMLLIElement>) =>
                        addMessage(event, message)
                    }
                />
            ))}
        </ul>
    )
}

export default Messages
