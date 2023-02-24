import classNames from 'classnames'
import React from 'react'

import { ReactComponent as CareMessageIcon } from '@/assets/icons/caremessage.svg'
import { ReactComponent as SaveIcon } from '@/assets/icons/save.svg'

import EditableCanvasName from '@/components/EditableCanvasName'

import styles from './index.module.scss'

type ITopBarControls = {} & JSX.IntrinsicElements['div']

const TopBarControls: React.FC<ITopBarControls> = ({
    className,
    children,
    ...restProps
}) => {
    const wrapperClasses = classNames(styles.wrapper, className)

    const buttonClasses = classNames(styles.button, className)

    return (
        <div className={wrapperClasses} {...restProps}>
            <CareMessageIcon />

            <EditableCanvasName />

            <button className={buttonClasses}>
                <SaveIcon />
                <p>Save</p>
            </button>
        </div>
    )
}

export default TopBarControls
