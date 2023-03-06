import { IMessage } from '@/interfaces'
import React, { memo } from 'react'
import { Handle, Node, Position } from 'reactflow'

import NodesLayoutBase from '@/components/NodesLayout/Base'
import NodeFooterResponseButton from '@/components/NodesControls/NodeFooterResponseButton'

type IABCNode = Node<IMessage>

const ABCNode: React.FC<IABCNode> = ({ ...restProps }) => {
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
