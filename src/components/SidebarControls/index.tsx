import React, { useRef, useState, LegacyRef, RefObject } from 'react'
import classNames from 'classnames'

import Messages from '@/containers/Messages'

import SearchMessage from '@/components/SearchMessage'
import ToggleButton from '@/components/SidebarControls/ToggleButton'
import Overlay from '@/components/SidebarControls/Overlay'

import styles from './index.module.scss'

type ISidebarControls = {} & JSX.IntrinsicElements['div']

const SidebarControls: React.FC<ISidebarControls> = () => {
    const [collapsed, setCollapsed] = useState(false)

    const sidebarRef = useRef<HTMLDivElement>(null) as LegacyRef<HTMLDivElement>

    const headClasses = classNames(styles.sidebarControlsHead, {
        [styles.sidebarControlsHeadCollapsed]: collapsed,
    })

    const childrenClasses = classNames(styles.sidebarControlsChildren, {
        [styles.sidebarControlsChildrenCollapsed]: collapsed,
    })

    return (
        <div ref={sidebarRef} className={styles.sidebarControls}>
            <Overlay sidebarRef={sidebarRef} />

            <div className={headClasses}>
                <h1>Library</h1>
                <ToggleButton
                    collapsed={collapsed}
                    setCollapsed={setCollapsed}
                />
            </div>

            <div className={childrenClasses}>
                <SearchMessage />
                <Messages />
            </div>
        </div>
    )
}

export default SidebarControls
