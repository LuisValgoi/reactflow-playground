import { memo, useCallback } from 'react'
import { Position } from 'reactflow'
import classNames from 'classnames'

import { ReactComponent as PencilIcon } from '@/assets/icons/pencil.svg'
import { ReactComponent as DeleteIcon } from '@/assets/icons/trash.svg'

import NodeHeadActionButton from '@/components/_nodes_/_shared_/NodeHeadActionButton'
import NodeFooterResponseButton from '@/components/_nodes_/_shared_/NodeFooterResponseButton'

import { useApp } from '@/providers/AppProvider'

import styles from './index.module.scss'

type INodesBaseLayout<T extends keyof JSX.IntrinsicElements> = {
    id: string
    heading: string
    schedulingInfo?: string
    content: string
    footer?: JSX.Element
    handle?: JSX.Element
    hideControls?: boolean
    selected?: boolean
    isConnectable?: boolean
    as?: keyof JSX.IntrinsicElements
} & JSX.IntrinsicElements[T]

const NodesBaseLayout = <T extends keyof JSX.IntrinsicElements>({
    id,
    heading,
    schedulingInfo,
    content,
    footer,
    handle,
    hideControls = true,
    selected,
    isConnectable = true,
    as = 'div',
    className,
    children,
    ...restProps
}: INodesBaseLayout<T>) => {
    const { removeNode } = useApp()

    const containerClasses = classNames(
        styles.container,
        { [styles.selected]: selected },
        className
    )

    const Component = as

    const validProps = restProps as Omit<
        typeof restProps,
        keyof INodesBaseLayout<T>
    >

    const handleDelete = useCallback(() => {
        if (window.confirm('Are you sure you want to delete?') === true) {
            removeNode(id)
        }
    }, [])

    return (
        <Component tabIndex={0} className={containerClasses} {...validProps}>
            {isConnectable && (
                <div className={styles.handleWrapper}>{handle}</div>
            )}

            <div className={styles.head}>
                <p>{heading}</p>

                {schedulingInfo && <p className={styles.tag}>{schedulingInfo}</p>}

                {!hideControls && (
                    <div className={styles.headActions}>
                        <NodeHeadActionButton alt="edit" Icon={PencilIcon} />
                        <NodeHeadActionButton
                            alt="delete"
                            onClick={handleDelete}
                            Icon={DeleteIcon}
                        />
                    </div>
                )}
            </div>

            <div className={styles.content}>{content}</div>

            {!hideControls && (
                <div className={styles.footer}>
                    <NodeFooterResponseButton
                        handleId="no-response"
                        handlePosition={Position.Bottom}
                        handleType="source"
                    >
                        NR
                    </NodeFooterResponseButton>
                    {footer}
                </div>
            )}
        </Component>
    )
}

export default memo(NodesBaseLayout)
