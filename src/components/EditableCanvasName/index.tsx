import React, { useCallback, useState } from 'react'

import styles from './index.module.scss'

const EditableCanvasName: React.FC = () => {
    const [canvasName, setCanvasName] = useState('Gap in Care')
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
            <div className={styles.wrapper}>
                <p>
                    Canvas /
                    <input
                        autoFocus
                        className={styles.input}
                        defaultValue={canvasName}
                        onBlur={handleInputBlur}
                        onKeyDown={handleOnKeyDown}
                        placeholder="Type the name here..."
                    />
                </p>
            </div>
        )
    }

    return (
        <div>
            <p>
                Canvas /{' '}
                <b onDoubleClick={handleTextDoubleClickName}>{canvasName}</b>
            </p>
        </div>
    )
}

export default EditableCanvasName
