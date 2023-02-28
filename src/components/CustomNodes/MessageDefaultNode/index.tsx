import { IMessage } from '@/interfaces'
import React, { memo } from 'react'
import { Handle, Node, Position } from 'reactflow'

import MessageBaseNode from '@/components/MessageBaseNodeLayout'

type IMessageDefaultNode = Node<IMessage>

const MessageDefaultNode: React.FC<IMessageDefaultNode> = ({ ...restProps }) => {
    return (
        <MessageBaseNode
            id={restProps.id}
            heading={restProps.data.heading}
            content={restProps.data.content}
            selected={restProps.selected}
            hideControls={false}
            handle={
                <>
                    <Handle
                        type="target"
                        position={Position.Top}
                        isConnectable
                    />
                </>
            }
        />
    )
}

export default memo(MessageDefaultNode)
