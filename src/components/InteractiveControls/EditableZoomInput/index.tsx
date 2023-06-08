import React, { memo, useCallback, useState } from 'react'
import { ControlButton, ReactFlowState, useStore } from 'reactflow'
import classNames from 'classnames'

import { ANIMATE_DURATION, MIN_ZOOM, MAX_ZOOM } from '@/constants'

import { ReactComponent as MinusIcon } from '@/assets/icons/minus.svg'
import { ReactComponent as PlusIcon } from '@/assets/icons/plus.svg'

import styles from './index.module.scss'
import { useApp } from '@/providers/AppProvider'

type IEditableZoomInput = {}

const zoomSelector = (state: ReactFlowState) => state.transform[2]

const EditableZoomInput: React.FC<IEditableZoomInput> = () => {
    const { reactFlowInstance } = useApp()

    const zoom = useStore(zoomSelector)

    const [showInput, setShowInput] = useState(false)

    const zoomInClass = classNames({
        [styles.disabledControlButton]: zoom >= MAX_ZOOM,
    })

    const zoomOutClass = classNames({
        [styles.disabledControlButton]: zoom <= MIN_ZOOM,
    })

    const zoomTo = useCallback(
        (v: number) => {
            const zoom = Number(v.toFixed(1))
            reactFlowInstance?.zoomTo(zoom, { duration: ANIMATE_DURATION })
        },
        [reactFlowInstance]
    )

    const handleInputBlur = useCallback(
        (event: React.FocusEvent<HTMLInputElement, Element>) => {
            setShowInput(false)
            zoomTo(parseInt(event.currentTarget.value) / 100)
        },
        [setShowInput, zoomTo]
    )

    const handleOnKeyDown = useCallback(
        (event: React.KeyboardEvent<HTMLInputElement>) => {
            if (event.code === 'Enter') {
                setShowInput(false)
                zoomTo(parseInt(event.currentTarget.value) / 100)
            }
        },
        [setShowInput, zoomTo]
    )

    const handleTextClickName = useCallback(() => {
        setShowInput(true)
    }, [setShowInput])

    const handleZoomOut = useCallback(() => {
        if (zoom <= MIN_ZOOM) {
            return
        }

        zoomTo((zoom * 100 - 10) / 100)
    }, [zoom, zoomTo])

    const handleZoomIn = useCallback(() => {
        if (zoom >= MAX_ZOOM) {
            return
        }

        zoomTo((zoom * 100 + 10) / 100)
    }, [zoom, zoomTo])

    return (
        <div className={styles.zoomContainer}>
            <ControlButton className={zoomOutClass} onClick={handleZoomOut}>
                <MinusIcon aria-label="Zoom Out" />
            </ControlButton>

            {showInput ? (
                <input
                    className={styles.input}
                    autoFocus
                    tabIndex={0}
                    min={(MIN_ZOOM * 100) / 10}
                    max={(MAX_ZOOM * 100) / 10}
                    maxLength={3}
                    minLength={2}
                    defaultValue={Math.floor(zoom * 100)}
                    onBlur={handleInputBlur}
                    onKeyDown={handleOnKeyDown}
                />
            ) : (
                <p onClick={handleTextClickName}>{Math.floor(zoom * 100)}%</p>
            )}

            <ControlButton className={zoomInClass} onClick={handleZoomIn}>
                <PlusIcon aria-label="Zoom In" />
            </ControlButton>
        </div>
    )
}

export default memo(EditableZoomInput)
