import { useApp } from '@/providers/AppProvider'
import React, { useCallback, useState } from 'react'

import styles from './index.module.scss'

const EditableCanvasName: React.FC = () => {
    const { canvasName, setCanvasName } = useApp()

    const [shownInput, setShowInput] = useState(false)

    const handleTextDoubleClickName = useCallback(() => {
        setShowInput(true)
    }, [])

    const handleInputBlur = useCallback(
        (event: React.FocusEvent<HTMLInputElement, Element>) => {
            setShowInput(false)
            setCanvasName(event.currentTarget.value)
        },
        []
    )

    const handleOnKeyDown = useCallback(
        (event: React.KeyboardEvent<HTMLInputElement>) => {
            if (event.code === 'Enter') {
                setShowInput(false)
                setCanvasName(event.currentTarget.value)
            }
        },
        []
    )

    if (shownInput) {
        return (
            <input
                autoFocus
                className={styles.input}
                defaultValue={canvasName}
                onBlur={handleInputBlur}
                onKeyDown={handleOnKeyDown}
                placeholder="Type the name here..."
            />
        )
    }

    return (
        <div>
            <p
                className={styles.paragraph}
                onDoubleClick={handleTextDoubleClickName}
            >
                {canvasName}
            </p>
        </div>
    )
}

export default EditableCanvasName
