import React, { memo } from 'react'

type IArrow = { x: number; y: number }

const Arrow: React.FC<IArrow> = (props) => {
    return (
        <svg
            viewBox="0 0 8 8"
            xmlns="http://www.w3.org/2000/svg"
            x={props.x - 8}
            y={props.y - 12}
            width={15}
            height={15}
            fill="none"
        >
            <path
                d="M4.71965 7.25452L7.84744 2.22273C8.22217 1.61988 7.86615 0.842711 7.21941 0.722844C7.10572 0.701773 6.98982 0.727084 6.88105 0.766297L3.99997 1.80496L1.11889 0.766297C1.01011 0.727083 0.894216 0.701769 0.780534 0.722876C0.142944 0.841259 -0.21483 1.59953 0.140226 2.20246L3.10339 7.23425C3.46935 7.85569 4.33918 7.8666 4.71965 7.25452Z"
                fill="#5F6AC4"
            />
        </svg>
    )
}

export default memo(Arrow)
