import classNames from 'classnames'
import React from 'react'

import { ReactComponent as LogoIcon } from '@/assets/icons/logo.svg'

import EditableCanvasName from '@/components/TopBarControls/EditableCanvasName'

import SaveCanvasButton from '@/components/TopBarControls/SaveCanvasButton'

import styles from './index.module.scss'

type ITopBarControls = {} & JSX.IntrinsicElements['div']

const TopBarControls: React.FC<ITopBarControls> = ({
    className,
    children,
    ...restProps
}) => {
    const wrapperClasses = classNames(styles.wrapper, className)

    return (
        <div className={wrapperClasses} {...restProps}>
            <LogoIcon tabIndex={0} />

            <EditableCanvasName />

            <SaveCanvasButton />
        </div>
    )
}

export default TopBarControls
