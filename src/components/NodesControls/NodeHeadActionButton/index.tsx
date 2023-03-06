import React, { memo } from 'react'
import classNames from 'classnames'

import styles from './index.module.scss'

type INodeHeadActionButton = {
    Icon: React.FC<React.SVGProps<SVGSVGElement>>
    alt: string
} & JSX.IntrinsicElements['button']

const NodeHeadActionButton: React.FC<INodeHeadActionButton> = ({
    Icon,
    alt,
    ...restProps
}) => {
    return (
        <button
            tabIndex={0}
            onClick={() => alert(alt)}
            className={classNames(styles.icon, 'nodrag')}
            {...restProps}
        >
            {<Icon />}
        </button>
    )
}

export default memo(NodeHeadActionButton)
