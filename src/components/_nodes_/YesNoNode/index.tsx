import { IMessage } from '@/interfaces'
import { memo } from 'react'
import { Handle, NodeProps, Position } from 'reactflow'

import NodesLayoutBase from '@/components/NodesLayout/Base'
import NodeFooterResponseButton from '@/components/NodesControls/NodeFooterResponseButton'

type IYNNode = NodeProps<IMessage>

const YNNode = ({ ...restProps }: IYNNode) => {
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
