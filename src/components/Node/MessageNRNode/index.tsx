import { IMessage } from '@/interfaces'
import React, { memo } from 'react'
import { Node, Position } from 'reactflow'

import MessageBaseNode from '@/components/Node/MessageBaseNode'
import MessageFooterResponseButton from '@/components/NodeControl/MessageFooterResponseButton'

import styles from './index.module.scss'

type IMessageNRNode = Node<IMessage>

const MessageNRNode: React.FC<IMessageNRNode> = ({ ...restProps }) => {
    return (
        <MessageBaseNode
            heading={restProps.data.heading}
            content={restProps.data.content}
            selected={restProps.selected}
            hideControls={false}
        >
            <div className={styles.footer}>
                <MessageFooterResponseButton
                    handleId="a"
                    handlePosition={Position.Bottom}
                    handleType="source"
                >
                    No Response
                </MessageFooterResponseButton>
                <MessageFooterResponseButton
                    handleId="b"
                    handlePosition={Position.Bottom}
                    handleType="source"
                >
                    A
                </MessageFooterResponseButton>
                <MessageFooterResponseButton
                    handleId="c"
                    handlePosition={Position.Bottom}
                    handleType="source"
                >
                    B
                </MessageFooterResponseButton>
            </div>
        </MessageBaseNode>
    )
}

export default memo(MessageNRNode)
