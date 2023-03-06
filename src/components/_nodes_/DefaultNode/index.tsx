import { IMessage } from '@/interfaces'
import { memo } from 'react'
import { Handle, NodeProps, Position } from 'reactflow'

import NodesLayoutBase from '@/components/NodesLayout/Base'

type IDefaultNode = NodeProps<IMessage>

const DefaultNode = ({ ...restProps }: IDefaultNode) => {
    return (
        <NodesLayoutBase
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
