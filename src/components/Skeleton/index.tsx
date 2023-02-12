import React, { forwardRef, PropsWithChildren } from 'react'

import styles from './index.module.scss'

const Skeleton = forwardRef<HTMLElement, PropsWithChildren>(
    ({ children }, ref) => (
        <main ref={ref} className={styles.main}>
            {children}
        </main>
    )
)

export default Skeleton
