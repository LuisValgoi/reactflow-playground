import React, { MouseEvent, useCallback } from 'react'
import { EdgeProps, getSmoothStepPath } from 'reactflow'
import { useApp } from '@/providers/AppProvider'

import EdgeArrow from '@/components/_edges_/_shared_/EdgeArrow'
import EdgeCircle from '@/components/_edges_/_shared_/EdgeCircle'

import styles from './index.module.scss'

const MISSING_PIXELS_CIRCLE_X = 8
const MISSING_PIXELS_CIRCLE_Y = 8
const MISSING_PIXELS_CIRCLE_Y_PATH = 5

const MISSING_PIXELS_ARROW_X = 8
const MISSING_PIXELS_ARROW_Y = 11

const LINE_CURVATURE = 30

const DefaultEdge: React.FC<EdgeProps> = ({
    id,
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
}: EdgeProps) => {
    const { removeEdge } = useApp()

    const [edgePath] = getSmoothStepPath({
        sourceX,
        sourceY: sourceY + MISSING_PIXELS_CIRCLE_Y_PATH,
        sourcePosition,
        targetX,
        targetY,
        targetPosition,
        borderRadius: LINE_CURVATURE,
    })

    const onDoubleClick = useCallback(
        (event: MouseEvent<SVGPathElement>, id: string) => {
            event.stopPropagation()
            removeEdge(id)
        },
        []
    )

    return (
        <g>
            <EdgeCircle
                x={sourceX - MISSING_PIXELS_CIRCLE_X}
                y={sourceY - MISSING_PIXELS_CIRCLE_Y}
            />

            <path
                d={edgePath}
                fill="none"
                stroke="transparent"
                strokeWidth={25}
                onDoubleClick={(event) => onDoubleClick(event, id)}
                className={styles.pathSelector}
            />

            <path
                d={edgePath}
                id={id}
                fill="none"
                stroke="#3B479F"
                strokeWidth={2.5}
                onDoubleClick={(event) => onDoubleClick(event, id)}
                className={styles.path}
            />

            <EdgeArrow
                x={targetX - MISSING_PIXELS_ARROW_X}
                y={targetY - MISSING_PIXELS_ARROW_Y}
            />
        </g>
    )
}

export default DefaultEdge
