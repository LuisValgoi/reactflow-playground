import React, { DragEvent, useCallback } from 'react'

import MessageBaseNode from '@/components/Node/MessageBaseNode'

import { IMessage } from '@/interfaces'
import { useMessageList } from '@/providers/MessageList'
import { useReactFlow } from '@/providers/ReactFlow'

import styles from './index.module.scss'

const Messages: React.FC = () => {
    const { messages } = useMessageList()
    const { addMessage } = useReactFlow()

    const handleOnDragStart = useCallback(
        (event: DragEvent<HTMLLIElement>, message: IMessage) => {
            addMessage(event, message)
        },
        []
    )

    return (
        <ul className={styles.list}>
            {messages.map((message) => (
                <MessageBaseNode
                    id={message.heading}
                    as="li"
                    draggable
                    key={message.heading}
                    heading={message.heading}
                    content={message.content}
                    onDragStart={(event: DragEvent<HTMLLIElement>) =>
                        handleOnDragStart(event, message)
                    }
                />
            ))}
        </ul>
    )
}

export default Messages
