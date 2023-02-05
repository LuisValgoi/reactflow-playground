import React, { useState } from 'react'
import classNames from 'classnames'

import HamburgerIcon from '@/assets/icons/hamburger.svg'

import styles from './index.module.scss'

const SidebarControls: React.FC<{} & JSX.IntrinsicElements['li']> = (props) => {
    const [collapsed, setCollapsed] = useState(false)

    const sidebarClasses = classNames(styles.sidebarControls)

    const headingClasses = classNames(styles.heading)

    return (
        <aside className={sidebarClasses} {...props}>
            <div className={styles.sidebarControlsHead}>
                <h1 className={headingClasses}>Library</h1>
                <button onClick={() => setCollapsed(!collapsed)}>
                    <img src={HamburgerIcon} alt="menu" />
                </button>
            </div>
            {props.children}
        </aside>
    )
}

export default SidebarControls
