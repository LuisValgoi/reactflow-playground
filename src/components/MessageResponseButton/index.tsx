import classNames from 'classnames'
import React, { memo } from 'react'
import { Position, HandleType, Handle } from 'reactflow'

import styles from './index.module.scss'

type IMessageResponseButton = {
    handleType: HandleType
    handlePosition: Position
    handleId: string
} & JSX.IntrinsicElements['button']

const MessageResponseButton: React.FC<IMessageResponseButton> = ({
    handleType,
    handlePosition,
    handleId,
    className,
    children,
    ...restProps
}) => {
    return (
        <button
            tabIndex={0}
            className={classNames(styles.messageResponse, className)}
            {...restProps}
        >
            {children}
            <Handle id={handleId} type={handleType} position={handlePosition} />
        </button>
    )
}

export default memo(MessageResponseButton)
