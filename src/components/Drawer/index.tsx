import React, { useEffect, useMemo, useRef } from 'react'
import type { CSSProperties } from 'react'

import styles from './index.module.scss'

type Props = {
    open: boolean
    onClose?: () => void
    lockBackgroundScroll?: boolean
    children?: React.ReactNode
    duration?: number
    overlayOpacity?: number
    overlayColor?: String
    enableOverlay?: boolean
    style?: React.CSSProperties
    zIndex?: number
    size?: number | string
    customIdSuffix?: string | undefined
}

const Drawer: React.FC<Props> = (props) => {
    const {
        open,
        onClose = () => {},
        children,
        style,
        enableOverlay = true,
        overlayColor = '#000',
        overlayOpacity = 0.4,
        zIndex = 100,
        duration = 500,
        size = 500,
        customIdSuffix,
        lockBackgroundScroll = false,
    } = props

    const bodyRef = useRef<HTMLBodyElement | null>(null)

    useEffect(() => {
        const updatePageScroll = () => {
            bodyRef.current = window.document.querySelector('body')

            if (bodyRef.current && lockBackgroundScroll) {
                if (open) {
                    bodyRef.current.style.overflow = 'hidden'
                } else {
                    bodyRef.current.style.overflow = ''
                }
            }
        }

        updatePageScroll()
    }, [open])

    const idSuffix = useMemo(() => {
        return customIdSuffix || (Math.random() + 1).toString(36).substring(7)
    }, [customIdSuffix])

    const overlayStyles: CSSProperties = {
        backgroundColor: `${overlayColor}`,
        opacity: `${overlayOpacity}`,
        zIndex: zIndex,
    }

    const drawerStyles: CSSProperties = {
        zIndex: zIndex + 1,
        transitionDuration: `${duration}ms`,
        top: 0,
        right: 0,
        transform: 'translate3d(100%, 0, 0)',
        width: size,
        height: '100vh',
        ...style,
    }

    return (
        <div id={'Drawer' + idSuffix} className={styles.Drawer}>
            <input
                type="checkbox"
                id={'Drawer__checkbox' + idSuffix}
                className={styles.Drawer__checkbox}
                onChange={onClose}
                checked={open}
            />
            <nav
                role="navigation"
                id={'Drawer__container' + idSuffix}
                style={drawerStyles}
                className={styles.Drawer__container}
            >
                {children}
            </nav>
            {enableOverlay && (
                <label
                    htmlFor={'Drawer__checkbox' + idSuffix}
                    id={'Drawer__overlay' + idSuffix}
                    className={styles.Drawer__overlay}
                    style={overlayStyles}
                />
            )}
        </div>
    )
}

export default Drawer
