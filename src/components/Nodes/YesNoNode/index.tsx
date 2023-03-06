import { IMessage } from '@/interfaces'
import React, { memo } from 'react'
import { Handle, Node, Position } from 'reactflow'

import NodesLayoutBase from '@/components/NodesLayout/Base'
import NodeFooterResponseButton from '@/components/NodesControls/NodeFooterResponseButton'

type IMessageNRNode = Node<IMessage>

const MessageNRNode: React.FC<IMessageNRNode> = ({ ...restProps }) => {
    return (
        <NodesLayoutBase
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
                    <NodeFooterResponseButton
                        handleId="yes"
                        handlePosition={Position.Bottom}
                        handleType="source"
                    >
                        Yes
                    </NodeFooterResponseButton>
                    <NodeFooterResponseButton
                        handleId="no"
                        handlePosition={Position.Bottom}
                        handleType="source"
                    >
                        No
                    </NodeFooterResponseButton>
                </>
            }
        />
    )
}

export default memo(MessageNRNode)
