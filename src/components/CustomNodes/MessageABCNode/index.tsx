import { IMessage } from '@/interfaces'
import React, { memo } from 'react'
import { Handle, Node, Position } from 'reactflow'

import MessageBaseNode from '@/components/MessageBaseNodeLayout'
import MessageFooterResponseButton from '@/components/CustomNodeControls/MessageFooterResponseButton'

type IMessageABCNode = Node<IMessage>

const MessageABCNode: React.FC<IMessageABCNode> = ({ ...restProps }) => {
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
                        handleId="a"
                        handlePosition={Position.Bottom}
                        handleType="source"
                    >
                        A
                    </MessageFooterResponseButton>
                    <MessageFooterResponseButton
                        handleId="b"
                        handlePosition={Position.Bottom}
                        handleType="source"
                    >
                        B
                    </MessageFooterResponseButton>
                    <MessageFooterResponseButton
                        handleId="c"
                        handlePosition={Position.Bottom}
                        handleType="source"
                    >
                        C
                    </MessageFooterResponseButton>
                </>
            }
        />
    )
}

export default memo(MessageABCNode)
