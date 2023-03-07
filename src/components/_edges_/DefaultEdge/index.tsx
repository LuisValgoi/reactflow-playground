import React, { MouseEvent, useCallback } from 'react'
import { EdgeProps, getBezierPath } from 'reactflow'
import { useApp } from '@/providers/AppProvider'

import EdgeArrow from '@/components/_edges_/_shared_/EdgeArrow'
import EdgeCircle from '@/components/_edges_/_shared_/EdgeCircle'

import styles from './index.module.scss'

const MISSING_PIXELS_X = 8
const MISSING_PIXELS_Y = 12

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

    const [edgePath] = getBezierPath({
        sourceX,
        sourceY,
        sourcePosition,
        targetX,
        targetY,
        targetPosition,
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
            <EdgeCircle x={sourceX - MISSING_PIXELS_X} y={sourceY - MISSING_PIXELS_Y} />

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
                stroke="#5F6AC4"
                strokeWidth={2.5}
                onDoubleClick={(event) => onDoubleClick(event, id)}
                className={styles.path}
            />

            <EdgeArrow x={targetX - MISSING_PIXELS_X} y={targetY - MISSING_PIXELS_Y} />
        </g>
    )
}

export default DefaultEdge
