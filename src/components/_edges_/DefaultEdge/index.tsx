import React, { MouseEvent, useCallback } from 'react'
import { EdgeProps, getBezierPath } from 'reactflow'
import { useApp } from '@/providers/AppProvider'

import Arrow from '@/components/Arrow'
import Circle from '@/components/Circle'

import styles from './index.module.scss'

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
            <Circle x={sourceX} y={sourceY} />

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

            <Arrow x={targetX} y={targetY} />
        </g>
    )
}

export default DefaultEdge
