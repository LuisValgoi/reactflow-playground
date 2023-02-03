import React, { useState } from 'react'
import { Controls as ControlsRF, ControlButton, PanelPosition } from 'reactflow'

import WarningIcon from "@/assets/icons/warning.svg";

import MessageIcon from "@/assets/icons/message.svg";

import styles from './index.module.scss'

const PANEL_POSITION = 'bottom-right' as PanelPosition

const SHOW_FIT_VIEW_BUTTON = false

const SHOW_INTERACTIVE_BUTTON = false

const Controls: React.FC = () => {
    return (
        <ControlsRF
            showFitView={SHOW_FIT_VIEW_BUTTON}
            showInteractive={SHOW_INTERACTIVE_BUTTON}
            position={PANEL_POSITION}
            className={styles.controlsContainer}
        >
            <ControlButton onClick={() => alert('pressed on warning icon')}>
                <img src={WarningIcon} alt="Warning Icon" />
            </ControlButton>
            <ControlButton onClick={() => alert('pressed on message icon')}>
                <img src={MessageIcon} alt="Message Icon" />
            </ControlButton>
        </ControlsRF>
    )
}

export default Controls
