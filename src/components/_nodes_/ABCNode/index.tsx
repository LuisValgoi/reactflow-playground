import { IMessage } from '@/interfaces'
import { memo } from 'react'
import { Handle, NodeProps, Position } from 'reactflow'

import NodesBaseLayout from '@/components/_nodes_/_shared_/NodeBaseLayout'
import NodeFooterResponseButton from '@/components/_nodes_/_shared_/NodeFooterResponseButton'

type IABCNode = NodeProps<IMessage>

const ABCNode = ({ ...restProps }: IABCNode) => {
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
                        handleId="a"
                        handlePosition={Position.Bottom}
                        handleType="source"
                    >
                        A
                    </NodeFooterResponseButton>
                    <NodeFooterResponseButton
                        handleId="b"
                        handlePosition={Position.Bottom}
                        handleType="source"
                    >
                        B
                    </NodeFooterResponseButton>
                    <NodeFooterResponseButton
                        handleId="c"
                        handlePosition={Position.Bottom}
                        handleType="source"
                    >
                        C
                    </NodeFooterResponseButton>
                </>
            }
        />
    )
}

export default memo(ABCNode)
