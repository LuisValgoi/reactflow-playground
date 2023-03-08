import React, { DragEvent, useCallback } from 'react'

import { IMessage } from '@/interfaces'

import NodesBaseLayout from '@/components/_nodes_/_shared_/NodeBaseLayout'

import { useApp } from '@/providers/AppProvider'

import styles from './index.module.scss'

type IMessages = {
    data: IMessage[]
}

const Messages: React.FC<IMessages> = ({ data }) => {
    const { addNode } = useApp()

    const handleOnDragStart = useCallback(
        (event: DragEvent<HTMLLIElement>, message: IMessage) => {
            addNode(event, message)
        },
        []
    )

    return (
        <ul className={styles.list}>
            {data.map((message) => (
                <NodesBaseLayout
                    id={message.heading}
                    as="li"
                    draggable
                    isOnCanvas={false}
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
