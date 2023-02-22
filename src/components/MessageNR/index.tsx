import { IMessage } from '@/providers/MessageList'
import React, { memo } from 'react'
import { Node, Position } from 'reactflow'

import MessageBase from '@/components/MessageBase'
import MessageResponse from '@/components/MessageResponseButton'

import styles from './index.module.scss'

const MessageNR: React.FC<Node<IMessage>> = ({ ...restProps }) => {
    return (
        <MessageBase
            heading={restProps.data.heading}
            content={restProps.data.content}
            hideControls={false}
        >
            <div className={styles.footer}>
                <MessageResponse
                    handleId="a"
                    handlePosition={Position.Bottom}
                    handleType="source"
                >
                    No Response
                </MessageResponse>
                <MessageResponse
                    handleId="b"
                    handlePosition={Position.Bottom}
                    handleType="source"
                >
                    A
                </MessageResponse>
                <MessageResponse
                    handleId="c"
                    handlePosition={Position.Bottom}
                    handleType="source"
                >
                    B
                </MessageResponse>
            </div>
        </MessageBase>
    )
}

export default memo(MessageNR)
