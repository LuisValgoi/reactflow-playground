import React from 'react'
import { Tooltip } from 'react-tooltip'

import { ReactComponent as SaveIcon } from '@/assets/icons/save.svg'

import { useApp } from '@/providers/AppProvider'

import styles from './index.module.scss'

const SaveCanvasButton: React.FC = () => {
    const { saveCanvas } = useApp()

    return (
        <>
            <Tooltip closeOnEsc id="save-canvas-button" place="left">
                <div>
                    <p>
                        When you click save, it will change the URL address and
                        save in LocalStorage
                    </p>
                </div>
            </Tooltip>
            <button
                data-tooltip-id="save-canvas-button"
                className={styles.button}
                tabIndex={0}
                onClick={saveCanvas}
            >
                <SaveIcon />
                <p>Save</p>
            </button>
        </>
    )
}

export default SaveCanvasButton
