import React from 'react'
import { ConnectionLineComponentProps, getBezierPath } from 'reactflow'

import Arrow from '@/components/Arrow'
import Circle from '@/components/Circle'

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
            <Circle x={fromX} y={fromY} />

            <path fill="none" stroke="#5F6AC4" strokeWidth={2.5} d={edgePath} />

            <Arrow x={toX} y={toY} />
        </g>
    )
}

export default DefaultLine
