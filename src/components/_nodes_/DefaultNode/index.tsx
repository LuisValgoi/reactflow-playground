import { IMessage } from '@/interfaces'
import { memo } from 'react'
import { Connection, Handle, NodeProps, Position } from 'reactflow'

import NodesBaseLayout from '@/components/_nodes_/_shared_/NodeBaseLayout'

type IDefaultNode = NodeProps<IMessage> & { footer?: JSX.Element }

const DefaultNode = ({ footer, ...restProps }: IDefaultNode) => {
    return (
        <NodesBaseLayout
            // {...restProps}
            id={restProps.id}
            selected={restProps.selected}
            heading={restProps.data.heading}
            content={restProps.data.content}
            hideControls={false}
            footer={footer}
            handle={
                <>
                    <Handle
                        id={`custom-handle-id-${restProps.id}`}
                        className="nodrag react-flow__handle-valid"
                        type="target"
                        position={Position.Top}
                        isConnectable
                        isValidConnection={(connection: Connection) => true}
                    />
                </>
            }
        />
    )
}

export default memo(DefaultNode)
