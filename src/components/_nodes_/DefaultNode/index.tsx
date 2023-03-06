import { IMessage } from '@/interfaces'
import { memo } from 'react'
import { Handle, NodeProps, Position } from 'reactflow'

import NodesBaseLayout from '@/components/_nodes_/_shared_/NodeBaseLayout'

type IDefaultNode = NodeProps<IMessage>

const DefaultNode = ({ ...restProps }: IDefaultNode) => {
    return (
        <NodesBaseLayout
            // {...restProps}
            id={restProps.id}
            selected={restProps.selected}
            heading={restProps.data.heading}
            content={restProps.data.content}
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
