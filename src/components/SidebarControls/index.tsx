import React, { useState } from 'react'
import classNames from 'classnames'

import HamburgerIcon from '@/assets/icons/hamburger.svg'

import styles from './index.module.scss'

const SidebarControls: React.FC<{} & JSX.IntrinsicElements['div']> = (
    props
) => {
    const [collapsed, setCollapsed] = useState(false)

    const sidebarClasses = classNames(styles.sidebarControls, {
        [styles.sidebarCollapsed]: collapsed,
    })

    const headClasses = classNames(styles.sidebarControlsHead, {
        [styles.sidebarControlsHeadCollapsed]: collapsed,
    })

    const toggleClasses = classNames(styles.sidebarControlsToggle)

    const childrenClasses = classNames(styles.sidebarControlsChildren, {
        [styles.sidebarControlsChildrenCollapsed]: collapsed,
    })

    return (
        <div className={sidebarClasses} {...props}>
            <div className={headClasses}>
                <h1>Library</h1>
                <button
                    className={toggleClasses}
                    onClick={() => setCollapsed(!collapsed)}
                >
                    <img src={HamburgerIcon} alt="menu" />
                </button>
            </div>
            <div className={childrenClasses}>{props.children}</div>
        </div>
    )
}

export default SidebarControls
