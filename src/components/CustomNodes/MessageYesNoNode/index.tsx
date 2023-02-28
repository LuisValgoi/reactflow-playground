import { IMessage } from '@/interfaces'
import React, { memo } from 'react'
import { Handle, Node, Position } from 'reactflow'

import MessageBaseNode from '@/components/MessageBaseNodeLayout'
import MessageFooterResponseButton from '@/components/CustomNodeControls/MessageFooterResponseButton'

type IMessageNRNode = Node<IMessage>

const MessageNRNode: React.FC<IMessageNRNode> = ({ ...restProps }) => {
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
            footer={
                <>
                    <MessageFooterResponseButton
                        handleId="yes"
                        handlePosition={Position.Bottom}
                        handleType="source"
                    >
                        Yes
                    </MessageFooterResponseButton>
                    <MessageFooterResponseButton
                        handleId="no"
                        handlePosition={Position.Bottom}
                        handleType="source"
                    >
                        No
                    </MessageFooterResponseButton>
                </>
            }
        />
    )
}

export default memo(MessageNRNode)
