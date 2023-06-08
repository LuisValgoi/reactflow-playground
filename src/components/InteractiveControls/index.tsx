import React from 'react'
import { Controls as ControlsRF, ControlButton } from 'reactflow'

import { ReactComponent as SelectionIcon } from '@/assets/icons/selection.svg'
import { ReactComponent as PaneIcon } from '@/assets/icons/pane.svg'

import EditableZoomInput from '@/components/InteractiveControls/EditableZoomInput'

import styles from './index.module.scss'
import { useApp } from '@/providers/AppProvider'
import classNames from 'classnames'

const InteractiveControls: React.FC = () => {
    const { isSelectionSelected, setIsSelectionSelected } = useApp()

    return (
        <ControlsRF
            showZoom={false}
            showFitView={false}
            showInteractive={false}
            position="bottom-right"
            className={styles.controlsContainer}
        >
            <ControlButton
                onClick={() => setIsSelectionSelected(true)}
                className={classNames({
                    [styles.selected]: isSelectionSelected,
                })}
            >
                <SelectionIcon aria-label="Warning Icon" />
            </ControlButton>

            <ControlButton
                onClick={() => setIsSelectionSelected(false)}
                className={classNames({
                    [styles.selected]: !isSelectionSelected,
                })}
            >
                <PaneIcon aria-label="Message Icon" />
            </ControlButton>

            <EditableZoomInput />
        </ControlsRF>
    )
}

export default InteractiveControls
