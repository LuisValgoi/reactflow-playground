import { memo, useCallback } from 'react'
import { NodeProps, Position, useReactFlow } from 'reactflow'
import classNames from 'classnames'

import { ReactComponent as PencilIcon } from '@/assets/icons/pencil.svg'
import { ReactComponent as DeleteIcon } from '@/assets/icons/trash.svg'

import NodeHeadActionButton from '@/components/_nodes_/_shared_/NodeHeadActionButton'
import NodeFooterResponseButton from '@/components/_nodes_/_shared_/NodeFooterResponseButton'
import NodeHeadActionScheduleButton from '@/components/_nodes_/_shared_/NodeHeadActionScheduleButton'

import { useApp } from '@/providers/AppProvider'

import { INavBar, INodeData } from '@/interfaces'

import styles from './index.module.scss'

type INodeBaseLayoutInCanvas = NodeProps<INodeData> & {
    data?: INodeData
    footer?: JSX.Element
    handle?: JSX.Element
}

const NodeBaseLayoutInCanvas: React.FC<INodeBaseLayoutInCanvas> = ({
    id,
    selected,
    data,
    footer,
    handle,
}) => {
    const { getNode } = useReactFlow()

    const { removeNode, setEditingNode, setNavBarSelected } = useApp()

    const containerClasses = classNames(styles.container, {
        [styles.selected]: selected,
    })

    const handleDelete = useCallback(() => {
        if (window.confirm('Are you sure you want to delete?') === true) {
            removeNode(id)
        }
    }, [])

    const handleEdit = useCallback(() => {
        const node = getNode(id)
        setNavBarSelected(INavBar.EDIT)
        setEditingNode(node)
    }, [setEditingNode])

    const handleEditSchedule = useCallback(() => {
        const node = getNode(id)
        setNavBarSelected(INavBar.SCHEDULE)
        setEditingNode(node)
    }, [setEditingNode])

    return (
        <div tabIndex={0} className={containerClasses}>
            <div className={styles.handleWrapper}>{handle}</div>

            <div className={styles.head}>
                <p>{data.heading}</p>

                <div className={styles.headActions}>
                    <NodeHeadActionScheduleButton
                        scheduleDate={data.scheduleDate}
                        onClick={handleEditSchedule}
                    />

                    <NodeHeadActionButton
                        aria-label="edit"
                        Icon={PencilIcon}
                        onClick={handleEdit}
                    />
                    <NodeHeadActionButton
                        aria-label="delete"
                        Icon={DeleteIcon}
                        onClick={handleDelete}
                    />
                </div>
            </div>

            <div className={styles.content}>{data.content}</div>

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
        </div>
    )
}

export default memo(NodeBaseLayoutInCanvas)
