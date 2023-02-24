import React, { DragEvent, useCallback } from 'react'

import { IMessage } from '@/interfaces'

import MessageBaseNode from '@/components/Node/MessageBaseNode'

import { useApp } from '@/providers/AppProvider'
import { useReactFlow } from '@/providers/ReactFlow'

import styles from './index.module.scss'

const Messages: React.FC = () => {
    const { messages } = useApp()
    const { addNode } = useReactFlow()

    const handleOnDragStart = useCallback(
        (event: DragEvent<HTMLLIElement>, message: IMessage) => {
            addNode(event, message)
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
