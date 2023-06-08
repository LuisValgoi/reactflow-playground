import { memo } from 'react'
import classNames from 'classnames'

import { INodeData } from '@/interfaces'

import styles from './index.module.scss'

type INodesBaseLayout = {
    data: INodeData
} & JSX.IntrinsicElements['div']

const NodesBaseLayout: React.FC<INodesBaseLayout> = ({
    data,
    ...restProps
}) => {
    const containerClasses = classNames(styles.container)

    return (
        <div tabIndex={0} className={containerClasses} {...restProps}>
            <div className={styles.head}>
                <p>{data.heading}</p>
            </div>

            <div className={styles.content}>{data.content}</div>
        </div>
    )
}

export default memo(NodesBaseLayout)
