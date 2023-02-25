import { useApp } from '@/providers/AppProvider'
import React, { PropsWithChildren } from 'react'

import styles from './index.module.scss'

const Skeleton: React.FC<PropsWithChildren> = ({ children }) => {
    const { skeletonRef } = useApp()

    return (
        <main ref={skeletonRef} className={styles.main}>
            {children}
        </main>
    )
}

export default Skeleton
