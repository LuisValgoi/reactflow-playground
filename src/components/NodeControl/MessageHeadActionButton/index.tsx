import classNames from 'classnames'
import React, { memo } from 'react'

import styles from './index.module.scss'

type IMessageHeadActionButton = {
    icon: string
    alt: string
} & JSX.IntrinsicElements['button']

const MessageHeadActionButton: React.FC<IMessageHeadActionButton> = ({
    icon,
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
            <img src={icon} alt={alt} />
        </button>
    )
}

export default memo(MessageHeadActionButton)
