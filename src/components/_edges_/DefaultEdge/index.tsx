import { useApp } from '@/providers/AppProvider'
import React, { MouseEvent, useCallback } from 'react'
import { EdgeProps, getBezierPath } from 'reactflow'

import styles from './index.module.scss'

const DefaultEdge: React.FC<EdgeProps> = ({
    id,
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
    markerEnd,
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
        <>
            <svg
                x={sourceX - 8}
                y={sourceY - 12}
                width={15}
                height={15}
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M4 1.5C5.38071 1.5 6.5 2.61929 6.5 4C6.5 5.38071 5.38071 6.5 4 6.5C2.61929 6.5 1.5 5.38071 1.5 4C1.5 2.61929 2.61929 1.5 4 1.5Z"
                    fill="white"
                    stroke="#5F6AC4"
                    strokeWidth={2.5}
                />
            </svg>

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

            <svg
                viewBox="0 0 8 8"
                xmlns="http://www.w3.org/2000/svg"
                x={targetX - 8}
                y={targetY - 12}
                width={15}
                height={15}
                fill="none"
            >
                <path
                    d="M4.71965 7.25452L7.84744 2.22273C8.22217 1.61988 7.86615 0.842711 7.21941 0.722844C7.10572 0.701773 6.98982 0.727084 6.88105 0.766297L3.99997 1.80496L1.11889 0.766297C1.01011 0.727083 0.894216 0.701769 0.780534 0.722876C0.142944 0.841259 -0.21483 1.59953 0.140226 2.20246L3.10339 7.23425C3.46935 7.85569 4.33918 7.8666 4.71965 7.25452Z"
                    fill="#5F6AC4"
                />
            </svg>
        </>
    )
}

export default DefaultEdge
