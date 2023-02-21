import classNames from 'classnames'
import React from 'react'

import styles from './index.module.scss'

export type MessagesProps = {
    heading: string
    content: string
} & JSX.IntrinsicElements['li']

const Message: React.FC<MessagesProps> = ({
    heading,
    content,
    className,
    ...restProps
}) => {
    const containerClasses = classNames(styles.container, className)

    return (
        <li tabIndex={0} className={containerClasses} {...restProps}>
            <div className={styles.head}>{heading}</div>
            <div className={styles.content}>{content}</div>
        </li>
    )
}

export default Message
