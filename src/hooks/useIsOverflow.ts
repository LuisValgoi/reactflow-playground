import { RefObject, useEffect, useState } from 'react'

export const useIsOverflow = (ref: RefObject<HTMLElement>) => {
    const [isOverflow, setIsOverflow] = useState<boolean>(false)

    useEffect(() => {
        const { current } = ref

        const trigger = () => {
            const hasScroll = current?.scrollHeight! > current?.clientHeight!
            const overflowYStyle = window.getComputedStyle(current!).overflowY
            const isOverflowHidden = overflowYStyle.indexOf('hidden') !== -1
            const isOverflowing = hasScroll && !isOverflowHidden

            setIsOverflow(isOverflowing)
        }

        if (current) {
            trigger()
        }

        window.addEventListener('resize', trigger)
    }, [ref])

    return isOverflow
}
