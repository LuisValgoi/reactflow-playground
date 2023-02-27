import React from 'react'

import { ReactComponent as HamburgerIcon } from '@/assets/icons/hamburger.svg'

import styles from './index.module.scss'

const ToggleButton: React.FC<{
    collapsed: boolean
    setCollapsed: (value: React.SetStateAction<boolean>) => void
}> = ({ collapsed, setCollapsed }) => {
    return (
        <button
            tabIndex={0}
            className={styles.sidebarControlsToggle}
            onClick={() => setCollapsed(!collapsed)}
        >
            <HamburgerIcon aria-label="menu" />
        </button>
    )
}

export default ToggleButton
