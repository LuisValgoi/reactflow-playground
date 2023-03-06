import { IMessage } from '@/interfaces'
import React, { memo } from 'react'
import { Handle, Node, Position } from 'reactflow'

import NodesLayoutBase from '@/components/NodesLayout/Base'

type IDefaultNode = Node<IMessage>

const DefaultNode: React.FC<IDefaultNode> = ({ ...restProps }) => {
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
        />
    )
}

export default memo(DefaultNode)
