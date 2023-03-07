import React from 'react'
import { Controls as ControlsRF, ControlButton } from 'reactflow'

import { ReactComponent as WarningIcon } from '@/assets/icons/warning.svg'
import { ReactComponent as MessageIcon } from '@/assets/icons/message.svg'

import EditableZoomInput from '@/components/InteractiveControls/EditableZoomInput'

import { useApp } from '@/providers/AppProvider'

import styles from './index.module.scss'

const InteractiveControls: React.FC = () => {
    const { reactFlowInstance } = useApp()

    return (
        <ControlsRF
            showZoom={false}
            showFitView={false}
            showInteractive={false}
            position="bottom-right"
            className={styles.controlsContainer}
        >
            <ControlButton onClick={() => alert('pressed on warning icon')}>
                <WarningIcon aria-label="Warning Icon" />
            </ControlButton>

            <ControlButton onClick={() => alert('pressed on message icon')}>
                <MessageIcon aria-label="Message Icon" />
            </ControlButton>

            <EditableZoomInput reactFlowInstance={reactFlowInstance} />
        </ControlsRF>
    )
}

export default InteractiveControls
