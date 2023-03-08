import { IMessage } from '@/interfaces'
import { memo } from 'react'
import { NodeProps, Position } from 'reactflow'

import NodeFooterResponseButton from '@/components/_nodes_/_shared_/NodeFooterResponseButton'
import DefaultNode from '@/components/_nodes_/DefaultNode'

type IABCNode = NodeProps<IMessage>

const ABCNode = ({ ...restProps }: IABCNode) => {
    return (
        <DefaultNode
            {...restProps}
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
