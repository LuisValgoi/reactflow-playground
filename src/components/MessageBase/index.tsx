import classNames from 'classnames'

import styles from './index.module.scss'

type BaseMessageProps<T extends keyof JSX.IntrinsicElements> = {
    heading: string
    content: string
    as?: keyof JSX.IntrinsicElements
} & JSX.IntrinsicElements[T]

const MessageBase = <T extends keyof JSX.IntrinsicElements>({
    heading,
    content,
    as = 'div',
    className,
    children,
    ...restProps
}: BaseMessageProps<T>) => {
    const containerClasses = classNames(styles.container, className)

    const Component = as

    const validProps = restProps as Omit<
        typeof restProps,
        keyof BaseMessageProps<T>
    >

    return (
        <Component tabIndex={0} className={containerClasses} {...validProps}>
            <div className={styles.head}>{heading}</div>
            <div className={styles.content}>{content}</div>
            {children}
        </Component>
    )
}

export default MessageBase
