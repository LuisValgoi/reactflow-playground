import { isEmpty } from 'lodash'
import React, { ChangeEvent, useCallback, useState } from 'react'

import { ReactComponent as CloseIcon } from '@/assets/icons/close.svg'

import styles from './index.module.scss'

type ISearchMessage = {
    onClear: () => void
} & JSX.IntrinsicElements['input']

const SearchMessage = React.forwardRef<HTMLInputElement, ISearchMessage>(
    ({ onChange, onClear, ...restProps }, ref) => {
        const [showClear, setShowClear] = useState(false)

        const handleChange = useCallback(
            (event: ChangeEvent<HTMLInputElement>) => {
                setShowClear(!isEmpty(event.target.value))
                onChange?.(event)
            },
            []
        )

        const handleClear = useCallback(() => {
            setShowClear(false)
            onClear?.()
        }, [])

        return (
            <div className={styles.wrapper}>
                {showClear && (
                    <span onClick={handleClear} className={styles.span}>
                        <CloseIcon />
                    </span>
                )}
                <input
                    {...restProps}
                    ref={ref}
                    onChange={handleChange}
                    tabIndex={0}
                    alt="search message"
                    placeholder="Search Messages by code or text..."
                    className={styles.input}
                />
            </div>
        )
    }
)

export default SearchMessage
