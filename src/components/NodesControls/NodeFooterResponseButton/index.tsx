import classNames from 'classnames'
import React, { memo } from 'react'
import { Position, HandleType, Handle } from 'reactflow'

import styles from './index.module.scss'

type INodeFooterResponseButton = {
    handleType: HandleType
    handlePosition: Position
    handleId?: string
} & JSX.IntrinsicElements['button']

const NodeFooterResponseButton: React.FC<INodeFooterResponseButton> = ({
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
            <Handle
                id={handleId}
                type={handleType}
                position={handlePosition}
                isConnectable
                className={styles.handle}
            />
        </div>
    )
}

export default memo(NodeFooterResponseButton)
