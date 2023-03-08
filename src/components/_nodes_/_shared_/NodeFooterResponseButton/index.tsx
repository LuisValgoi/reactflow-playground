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
    children,
}) => {
    return (
        <div className={styles.wrapper} tabIndex={0}>
            <span className={styles.dot} />
            <Handle
                id={handleId}
                className={classNames(styles.handle)}
                type={handleType}
                position={handlePosition}
                isConnectable
            >
                {children}
            </Handle>
        </div>
    )
}

export default memo(NodeFooterResponseButton)
