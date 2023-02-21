import classNames from 'classnames'
import React from 'react'

import styles from './index.module.scss'

const SearchMessage: React.FC<{} & JSX.IntrinsicElements['input']> = (
    props
) => {
    const searchClasses = classNames(styles.searchMessage)
    return (
        <input
            {...props}
            tabIndex={0}
            alt="search message"
            placeholder="Search Messages..."
            className={searchClasses}
        />
    )
}

export default SearchMessage
