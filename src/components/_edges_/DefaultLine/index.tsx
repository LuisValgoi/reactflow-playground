import React from 'react'
import { ConnectionLineComponentProps, getSmoothStepPath } from 'reactflow'

import EdgeArrow from '@/components/_edges_/_shared_/EdgeArrow'
import EdgeCircle from '@/components/_edges_/_shared_/EdgeCircle'

const MISSING_PIXELS_CIRCLE_X = 8
const MISSING_PIXELS_CIRCLE_Y = 17.5

const MISSING_PIXELS_ARROW_X = 8
const MISSING_PIXELS_ARROW_Y = 15

const LINE_CURVATURE = 30

const DefaultLine: React.FC<ConnectionLineComponentProps> = ({
    fromX,
    fromY,
    fromPosition,
    toX,
    toY,
    toPosition,
}) => {
    const [edgePath] = getSmoothStepPath({
        sourceX: fromX,
        sourceY: fromY + MISSING_PIXELS_CIRCLE_Y + 15,
        sourcePosition: fromPosition,
        targetX: toX,
        targetY: toY,
        targetPosition: toPosition,
        borderRadius: LINE_CURVATURE,
    })

    return (
        <g>
            <EdgeCircle x={fromX - MISSING_PIXELS_CIRCLE_X} y={fromY + MISSING_PIXELS_CIRCLE_Y} />

            <path fill="none" className='animated' stroke="#3B479F" strokeWidth={2.5} d={edgePath} />

            <EdgeArrow x={toX - MISSING_PIXELS_ARROW_X} y={toY - MISSING_PIXELS_ARROW_Y} />
        </g>
    )
}

export default DefaultLine
