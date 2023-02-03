import classNames from 'classnames'
import React from 'react'

import styles from './index.module.scss'

const SearchMessage: React.FC<
    JSX.IntrinsicElements['input'] & { controlsCollapsed: boolean }
> = (props) => {
    const searchClasses = classNames(styles.searchMessage, {
        [styles.collapsed]: props.controlsCollapsed,
    })
    return (
        <input
            {...props}
            alt="search message"
            className={searchClasses}
        />
    )
}

export default SearchMessage
