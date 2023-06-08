import { INodeData } from '@/interfaces'
import { memo } from 'react'
import { Handle, NodeProps, Position } from 'reactflow'

import NodeBaseLayoutInCanvas from '@/components/_nodes_/_shared_/NodeBaseLayoutInCanvas'

type IDefaultNode = NodeProps<INodeData> & { footer?: JSX.Element }

const DefaultNode = ({ footer, ...restProps }: IDefaultNode) => {
    return (
        <NodeBaseLayoutInCanvas
            footer={footer}
            handle={
                <>
                    <Handle
                        id={restProps.id}
                        className="nodrag react-flow__handle-valid"
                        type="target"
                        position={Position.Top}
                        isConnectable
                    />
                </>
            }
            {...restProps}
        />
    )
}

export default memo(DefaultNode)
