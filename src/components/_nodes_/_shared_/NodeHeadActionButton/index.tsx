import React, { memo } from 'react'
import classNames from 'classnames'

import styles from './index.module.scss'

type INodeHeadActionButton = {
    Icon?: React.FC<React.SVGProps<SVGSVGElement>>
} & JSX.IntrinsicElements['button']

const NodeHeadActionButton: React.FC<INodeHeadActionButton> = ({
    Icon,
    className,
    children,
    ...restProps
}) => {
    return (
        <button
            tabIndex={0}
            className={classNames(styles.icon, 'nodrag', className)}
            {...restProps}
        >
            {Icon && <Icon />}
            {!Icon && children}
        </button>
    )
}

export default memo(NodeHeadActionButton)
