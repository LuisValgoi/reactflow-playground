import React from 'react'
import { ConnectionLineComponentProps } from 'reactflow'

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
    return (
        <g>
            <path
                fill="none"
                stroke="#afb5e1"
                strokeWidth={2}
                d={`M${fromX},${fromY} C ${fromX} ${toY} ${fromX} ${toY} ${toX},${toY}`}
            />
            <circle
                cx={toX}
                cy={toY}
                fill="#fff"
                r={3}
                stroke="#afb5e1"
                strokeWidth={1.5}
            />
        </g>
    )
}

export default DefaultLine

