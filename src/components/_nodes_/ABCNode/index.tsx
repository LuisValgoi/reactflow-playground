import { IMessage } from '@/interfaces'
import { memo } from 'react'
import { Handle, NodeProps, Position } from 'reactflow'

import NodesLayoutBase from '@/components/NodesLayout/Base'
import NodeFooterResponseButton from '@/components/NodesControls/NodeFooterResponseButton'

type IABCNode = NodeProps<IMessage>

const ABCNode = ({ ...restProps }: IABCNode) => {
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
