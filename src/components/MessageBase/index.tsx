import { memo } from 'react'
import classNames from 'classnames'

import PencilIcon from '@/assets/icons/pencil.svg'
import DeleteIcon from '@/assets/icons/trash.svg'

import styles from './index.module.scss'

type BaseMessageProps<T extends keyof JSX.IntrinsicElements> = {
    heading: string
    content: string
    hideControls?: boolean
    as?: keyof JSX.IntrinsicElements
} & JSX.IntrinsicElements[T]

const MessageBase = <T extends keyof JSX.IntrinsicElements>({
    heading,
    content,
    as = 'div',
    hideControls = true,
    className,
    children,
    ...restProps
}: BaseMessageProps<T>) => {
    const Component = as

    const containerClasses = classNames(styles.container, className)

    const validProps = restProps as Omit<
        typeof restProps,
        keyof BaseMessageProps<T>
    >

    return (
        <Component tabIndex={0} className={containerClasses} {...validProps}>
            <div className={styles.head}>
                <p>{heading}</p>
                {!hideControls && (
                    <div className={styles.headActions}>
                        <button
                            tabIndex={0}
                            onClick={() => alert('1')}
                            className={classNames(styles.icon, 'nodrag')}
                        >
                            <img src={PencilIcon} alt="edit" />
                        </button>

                        <button
                            tabIndex={0}
                            onClick={() => alert('2')}
                            className={classNames(styles.icon, 'nodrag')}
                        >
                            <img src={DeleteIcon} alt="delete" />
                        </button>
                    </div>
                )}
            </div>
            <div className={styles.content}>{content}</div>
            {children}
        </Component>
    )
}

export default memo(MessageBase)
