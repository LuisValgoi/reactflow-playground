import React, { useRef, useState, LegacyRef, RefObject } from 'react'
import { useScroll } from 'react-use'
import classNames from 'classnames'

import HamburgerIcon from '@/assets/icons/hamburger.svg'

import styles from './index.module.scss'
import { useIsOverflow } from '@/hooks/useIsOverflow'

const SidebarControls: React.FC<{} & JSX.IntrinsicElements['div']> = (
    props
) => {
    const [collapsed, setCollapsed] = useState(false)

    const sidebarRef = useRef<HTMLDivElement>(null) as RefObject<HTMLElement>

    const sidebarRefHasOverflow = useIsOverflow(sidebarRef)

    const { y: sidebarScrollY } = useScroll(sidebarRef)

    const sidebarClasses = classNames(styles.sidebarControls, {
        [styles.sidebarCollapsed]: collapsed,
    })

    const sidebarSpanClasses = classNames({
        [styles.sidebarControlsLayer]: sidebarScrollY === 0,
    })

    const headClasses = classNames(styles.sidebarControlsHead, {
        [styles.sidebarControlsHeadCollapsed]: collapsed,
    })

    const toggleClasses = classNames(styles.sidebarControlsToggle)

    const childrenClasses = classNames(styles.sidebarControlsChildren, {
        [styles.sidebarControlsChildrenCollapsed]: collapsed,
    })

    return (
        <div
            ref={sidebarRef as LegacyRef<HTMLDivElement> | undefined}
            className={sidebarClasses}
            {...props}
        >
            {sidebarRefHasOverflow && <span className={sidebarSpanClasses} />}
            <div className={headClasses}>
                <h1>Library</h1>
                <button
                    tabIndex={0}
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
