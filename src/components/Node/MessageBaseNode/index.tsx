import { memo, useCallback } from 'react'
import classNames from 'classnames'

import { ReactComponent as PencilIcon } from '@/assets/icons/pencil.svg'
import { ReactComponent as DeleteIcon } from '@/assets/icons/trash.svg'

import styles from './index.module.scss'
import MessageHeadActionButton from '../../NodeControl/MessageHeadActionButton'
import { useReactFlow } from '@/providers/ReactFlow'

type IMessageBaseNode<T extends keyof JSX.IntrinsicElements> = {
    id: string
    heading: string
    content: string
    hideControls?: boolean
    selected?: boolean
    as?: keyof JSX.IntrinsicElements
} & JSX.IntrinsicElements[T]

const MessageBaseNode = <T extends keyof JSX.IntrinsicElements>({
    heading,
    content,
    selected,
    as = 'div',
    hideControls = true,
    className,
    children,
    ...restProps
}: IMessageBaseNode<T>) => {
    const { removeMessage } = useReactFlow()

    const containerClasses = classNames(
        styles.container,
        { [styles.selected]: selected },
        className
    )

    const Component = as

    const validProps = restProps as Omit<
        typeof restProps,
        keyof IMessageBaseNode<T>
    >

    const handleDelete = useCallback(() => {
        if (window.confirm('Are you sure you want to delete?') === true) {
            removeMessage(restProps.id)
        }
    }, [])

    return (
        <Component tabIndex={0} className={containerClasses} {...validProps}>
            <div className={styles.head}>
                {heading && <p>{heading}</p>}

                {!hideControls && (
                    <div className={styles.headActions}>
                        <MessageHeadActionButton alt="edit" Icon={PencilIcon} />
                        <MessageHeadActionButton
                            alt="delete"
                            onClick={handleDelete}
                            Icon={DeleteIcon}
                        />
                    </div>
                )}
            </div>

            <div className={styles.content}>{content}</div>

            {children}
        </Component>
    )
}

export default memo(MessageBaseNode)
