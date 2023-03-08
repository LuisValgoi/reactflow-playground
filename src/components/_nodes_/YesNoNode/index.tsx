import { IMessage } from '@/interfaces'
import { memo } from 'react'
import { NodeProps, Position } from 'reactflow'

import DefaultNode from '@/components/_nodes_/DefaultNode'
import NodeFooterResponseButton from '@/components/_nodes_/_shared_/NodeFooterResponseButton'

type IYNNode = NodeProps<IMessage>

const YNNode = ({ ...restProps }: IYNNode) => {
    return (
        <DefaultNode
            {...restProps}
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
