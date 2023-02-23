import classNames from 'classnames'
import React, { memo } from 'react'
import { Position, HandleType, Handle } from 'reactflow'

import styles from './index.module.scss'

type IMessageFooterResponseButton = {
    handleType: HandleType
    handlePosition: Position
    handleId?: string
} & JSX.IntrinsicElements['button']

const MessageFooterResponseButton: React.FC<IMessageFooterResponseButton> = ({
    handleType,
    handlePosition,
    handleId,
    className,
    children,
    ...restProps
}) => {
    return (
        <div className={styles.wrapper}>
            <button
                tabIndex={0}
                className={classNames(styles.button, className)}
                {...restProps}
            >
                {children}
            </button>
            <Handle className={styles.handle} id={handleId} type={handleType} position={handlePosition} />
        </div>
    )
}

export default memo(MessageFooterResponseButton)
