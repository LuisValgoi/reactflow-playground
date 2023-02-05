import React, { useState } from 'react'
import SearchMessage from './SearchMessage'

import HamburgerIcon from '@/assets/icons/hamburger.svg'

import classNames from 'classnames'
import styles from './index.module.scss'

const SidebarControls: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false)

    const sidebarClasses = classNames(styles.sidebarControls)

    const toggleButtonClasses = classNames({ [styles.collapsed]: collapsed })

    const headingClasses = classNames(styles.heading, { [styles.collapsed]: collapsed })

    return (
        <aside className={sidebarClasses}>
            <div className={styles.sidebarControlsHead}>
                <h1 className={headingClasses}>Library</h1>
                <button
                    className={toggleButtonClasses}
                    onClick={() => setCollapsed(!collapsed)}
                >
                    <img src={HamburgerIcon} alt="menu" />
                </button>
            </div>
            <SearchMessage controlsCollapsed={collapsed} />
        </aside>
    )
}

export default SidebarControls
