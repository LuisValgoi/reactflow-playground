import React from 'react'
import { Controls as ControlsRF, ControlButton, PanelPosition } from 'reactflow'

import { ReactComponent as WarningIcon } from '@/assets/icons/warning.svg'

import { ReactComponent as MessageIcon } from '@/assets/icons/message.svg'

import styles from './index.module.scss'

const PANEL_POSITION = 'bottom-right' as PanelPosition

const SHOW_FIT_VIEW_BUTTON = false

const SHOW_INTERACTIVE_BUTTON = false

const InteractiveControls: React.FC = () => {
    return (
        <ControlsRF
            showFitView={SHOW_FIT_VIEW_BUTTON}
            showInteractive={SHOW_INTERACTIVE_BUTTON}
            position={PANEL_POSITION}
            className={styles.controlsContainer}
        >
            <ControlButton onClick={() => alert('pressed on warning icon')}>
                <WarningIcon aria-label="Warning Icon" />
            </ControlButton>
            <ControlButton onClick={() => alert('pressed on message icon')}>
                <MessageIcon aria-label="Message Icon" />
            </ControlButton>
        </ControlsRF>
    )
}

export default InteractiveControls
