import classNames from 'classnames'
import React from 'react'

import styles from './index.module.scss'

type BaseMessageProps<T extends keyof JSX.IntrinsicElements> = {
    heading: string;
    content: string;
    As?: keyof JSX.IntrinsicElements;
} & JSX.IntrinsicElements[T]

const MessageBase = <T extends keyof JSX.IntrinsicElements>({
    heading,
    content,
    As = 'div',
    className,
    children,
    ...restProps
}: BaseMessageProps<T>) => {
    const containerClasses = classNames(styles.container, className)

    const validProps = restProps as Omit<
        typeof restProps,
        keyof BaseMessageProps<T>
    >

    return (
        <As tabIndex={0} className={containerClasses} {...validProps}>
            <div className={styles.head}>{heading}</div>
            <div className={styles.content}>{content}</div>
            {children}
        </As>
    )
}

export default MessageBase
