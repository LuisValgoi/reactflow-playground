import React from 'react'
import { ConnectionLineComponentProps, getBezierPath } from 'reactflow'

import EdgeArrow from '@/components/_edges_/_shared_/EdgeArrow'
import EdgeCircle from '@/components/_edges_/_shared_/EdgeCircle'

const DefaultLine: React.FC<ConnectionLineComponentProps> = ({
    fromX,
    fromY,
    fromPosition,
    toX,
    toY,
    toPosition,
}) => {
    const [edgePath] = getBezierPath({
        sourceX: fromX,
        sourceY: fromY,
        sourcePosition: fromPosition,
        targetX: toX,
        targetY: toY,
        targetPosition: toPosition,
    })

    return (
        <g>
            <EdgeCircle x={fromX} y={fromY + 5} />

            <path fill="none" stroke="#5F6AC4" strokeWidth={2.5} d={edgePath} />

            <EdgeArrow x={toX} y={toY - 5} />
        </g>
    )
}

export default DefaultLine
