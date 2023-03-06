import { IMessage } from '@/interfaces'
import { memo } from 'react'
import { Handle, NodeProps, Position } from 'reactflow'

import NodesBaseLayout from '@/components/_nodes_/_shared_/NodeBaseLayout'
import NodeFooterResponseButton from '@/components/_nodes_/_shared_/NodeFooterResponseButton'

type IYNNode = NodeProps<IMessage>

const YNNode = ({ ...restProps }: IYNNode) => {
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

export default memo(YNNode)
