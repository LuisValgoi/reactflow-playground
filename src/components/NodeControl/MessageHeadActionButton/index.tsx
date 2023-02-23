import classNames from 'classnames'
import React, { memo } from 'react'

import styles from './index.module.scss'

type IMessageHeadActionButton = {
    Icon: React.FC<React.SVGProps<SVGSVGElement>>
    alt: string
} & JSX.IntrinsicElements['button']

const MessageHeadActionButton: React.FC<IMessageHeadActionButton> = ({
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

export default memo(MessageHeadActionButton)
