import classNames from 'classnames'
import React from 'react'

import styles from './index.module.scss'

const SearchMessage: React.FC<
    JSX.IntrinsicElements['input'] & { controlsCollapsed: boolean }
> = ({controlsCollapsed, ...restProps}) => {
    const searchClasses = classNames(styles.searchMessage, {
        [styles.collapsed]: controlsCollapsed,
    })
    return (
        <input
            {...restProps}
            alt="search message"
            className={searchClasses}
        />
    )
}

export default SearchMessage
