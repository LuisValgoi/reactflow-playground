import React, { MouseEvent, useCallback } from 'react'
import { EdgeProps, getBezierPath } from 'reactflow'

import styles from './index.module.scss'

const foreignObjectSize = 40

const DefaultEdge: React.FC<EdgeProps> = ({
    id,
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
    style = {},
    markerEnd,
}: EdgeProps) => {
    const [edgePath, labelX, labelY] = getBezierPath({
        sourceX,
        sourceY,
        sourcePosition,
        targetX,
        targetY,
        targetPosition,
    })

    const onEdgeClick = useCallback(
        (event: MouseEvent<HTMLButtonElement>, id: string) => {
            event.stopPropagation()
            alert(`remove ${id}`)
        },
        []
    )

    return (
        <>
            <path
                id={id}
                style={style}
                fill="none"
                stroke="#222"
                strokeWidth={2}
                className="animated"
                d={edgePath}
            />

            {/* <foreignObject
                width={foreignObjectSize}
                height={foreignObjectSize}
                x={labelX - foreignObjectSize / 2}
                y={labelY - foreignObjectSize / 2}
                className={styles['edgebutton-foreignobject']}
                requiredExtensions="http://www.w3.org/1999/xhtml"
            >
                <div>
                    <button
                        className={styles.edgebutton}
                        onClick={(event) => onEdgeClick(event, id)}
                    >
                        ×
                    </button>
                </div>
            </foreignObject> */}

            <foreignObject
                width={foreignObjectSize}
                height={foreignObjectSize}
                x={labelX - foreignObjectSize / 2}
                y={labelY - foreignObjectSize / 2}
                requiredExtensions="http://www.w3.org/1999/xhtml"
            >
                <svg
                    width="40"
                    height="40"
                    viewBox="0 0 8 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M4.71965 7.25452L7.84744 2.22273C8.22217 1.61988 7.86615 0.842711 7.21941 0.722844C7.10572 0.701773 6.98982 0.727084 6.88105 0.766297L3.99997 1.80496L1.11889 0.766297C1.01011 0.727083 0.894216 0.701769 0.780534 0.722876C0.142944 0.841259 -0.21483 1.59953 0.140226 2.20246L3.10339 7.23425C3.46935 7.85569 4.33918 7.8666 4.71965 7.25452Z"
                        fill="#25B59D"
                    />
                </svg>
            </foreignObject>
        </>
    )
}

export default DefaultEdge
