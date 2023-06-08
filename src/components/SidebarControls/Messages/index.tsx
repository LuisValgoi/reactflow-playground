import React, { DragEvent, useCallback } from 'react'

import { INodeData } from '@/interfaces'

import NodesBaseLayout from '@/components/_nodes_/_shared_/NodeBaseLayout'

import { populateDataTransfer } from '@/utils/ReactFlow'

import styles from './index.module.scss'

type IMessages = {
    data: INodeData[]
}

const Messages: React.FC<IMessages> = ({ data }) => {
    const handleOnDragStart = useCallback(
        (event: DragEvent<HTMLDivElement>, message: INodeData) => {
            populateDataTransfer(event, message)
        },
        []
    )

    return (
        <ul className={styles.list}>
            {data.map((message) => (
                <NodesBaseLayout
                    draggable
                    data={message}
                    key={message.heading}
                    id={message.heading}
                    onDragStart={(event: DragEvent<HTMLDivElement>) =>
                        handleOnDragStart(event, message)
                    }
                />
            ))}
        </ul>
    )
}

export default Messages
