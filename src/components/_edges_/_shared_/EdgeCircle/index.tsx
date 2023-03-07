import React, { memo } from 'react'

type IEdgeCircle = { x: number; y: number }

const EdgeCircle: React.FC<IEdgeCircle> = (props) => {
    return (
        <svg
            x={props.x}
            y={props.y}
            width={15}
            height={15}
            viewBox="0 0 8 8"
            fill="#ffffff"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4 1.5C5.38071 1.5 6.5 2.61929 6.5 4C6.5 5.38071 5.38071 6.5 4 6.5C2.61929 6.5 1.5 5.38071 1.5 4C1.5 2.61929 2.61929 1.5 4 1.5Z"
                fill="#ffffff"
                stroke="#3B479F"
                strokeWidth={2}
            />
        </svg>
    )
}

export default memo(EdgeCircle)
