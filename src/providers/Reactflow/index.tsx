import React, { PropsWithChildren } from 'react'
import { ReactFlow } from 'reactflow'

import 'reactflow/dist/style.css'

const HIDE_REACT_FLOW_WATERMARK = true;

const Reactflow: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <ReactFlow proOptions={{ hideAttribution: HIDE_REACT_FLOW_WATERMARK }}>{children}</ReactFlow>
    )
}

export default Reactflow
