import React, { LegacyRef, RefObject } from 'react'
import { useScroll } from 'react-use'
import classNames from 'classnames'

import { useIsOverflow } from '@/hooks/useIsOverflow'

import styles from './index.module.scss'

const Overlay: React.FC<{ sidebarRef: LegacyRef<HTMLDivElement>}> = ({
    sidebarRef,
}) => {
    const sidebarRefHasOverflow = useIsOverflow(sidebarRef as RefObject<HTMLElement>)

    const { y: sidebarScrollY } = useScroll(sidebarRef as RefObject<HTMLElement>)

    const sidebarSpanClasses = classNames({
        [styles.sidebarControlsLayer]: sidebarScrollY === 0,
    })

    if (sidebarRefHasOverflow) {
        return <span className={sidebarSpanClasses} />
    }

    return <></>
}

export default Overlay
