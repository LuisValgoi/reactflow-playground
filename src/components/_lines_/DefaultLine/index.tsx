import React from 'react'
import { ConnectionLineComponentProps, getBezierPath } from 'reactflow'

const DefaultLine: React.FC<ConnectionLineComponentProps> = ({
    fromX,
    fromY,
    fromPosition,
    toX,
    toY,
    toPosition,
    connectionLineType,
    connectionLineStyle,
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
            <path fill="none" stroke="#5F6AC4" strokeWidth={3} d={edgePath} />
            <circle
                cx={toX}
                cy={toY}
                fill="#fff"
                r={5}
                stroke="#5F6AC4"
                strokeWidth={1.5}
            />
        </g>
    )
}

export default DefaultLine
