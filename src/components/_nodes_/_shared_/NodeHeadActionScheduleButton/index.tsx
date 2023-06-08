import React from 'react'
import moment from 'moment'

import styles from './index.module.scss'
import NodeHeadActionButton from '../NodeHeadActionButton'

type INodeHeadActionScheduleButton = {
    scheduleDate: Date
} & JSX.IntrinsicElements['button']

const NodeHeadActionScheduleButton: React.FC<INodeHeadActionScheduleButton> = ({
    scheduleDate,
    ...restProps
}) => {
    const weekNumber = moment(scheduleDate).format('W')
    const dateTime = moment(scheduleDate).format('dddd h:mm a')
    return (
        <NodeHeadActionButton className={styles.tag} {...restProps}>
            {`W${weekNumber.toUpperCase()} - ${dateTime.toUpperCase()}`}
        </NodeHeadActionButton>
    )
}

export default NodeHeadActionScheduleButton
