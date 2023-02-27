import React, {
    useRef,
    useState,
    LegacyRef,
    useCallback,
    ChangeEvent,
    useEffect,
} from 'react'
import classNames from 'classnames'
import { debounce } from 'lodash'

import Messages from '@/containers/Messages'

import { useApp } from '@/providers/AppProvider'

import SearchMessage from '@/components/SearchMessage'
import ToggleButton from '@/components/SidebarControls/ToggleButton'
import Overlay from '@/components/SidebarControls/Overlay'

import styles from './index.module.scss'

type ISidebarControls = {} & JSX.IntrinsicElements['div']

const SidebarControls: React.FC<ISidebarControls> = () => {
    const { messages } = useApp()

    const [messagesData, setMessagesData] = useState(messages)

    const [collapsed, setCollapsed] = useState(false)

    const inputRef = useRef<HTMLInputElement>(null)

    const sidebarRef = useRef<HTMLDivElement>(null) as LegacyRef<HTMLDivElement>

    const sidebarClasses = classNames(styles.sidebarControls, {
        [styles.sidebarControlsCollapsed]: collapsed,
    })

    const headClasses = classNames(styles.sidebarControlsHead, {
        [styles.sidebarControlsHeadCollapsed]: collapsed,
    })

    const childrenClasses = classNames(styles.sidebarControlsChildren, {
        [styles.sidebarControlsChildrenCollapsed]: collapsed,
    })

    const handleSearch = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        debouncedSearch(event.target.value)
    }, [])

    const handleClear = useCallback(() => {
        debouncedSearch('')

        if (inputRef.current?.value) {
            inputRef.current.value = ''
        }
    }, [])

    const filterData = useCallback((query: string) => {
        const filteredData = messages.filter(
            (message) =>
                message.content.toLowerCase().includes(query.toLowerCase()) ||
                message.heading.toLowerCase().includes(query.toLowerCase())
        )
        setMessagesData(filteredData)
    }, [])

    const debouncedSearch = useRef(
        debounce((query: string) => filterData(query), 300)
    ).current

    useEffect(() => {
        return () => {
            debouncedSearch.cancel()
        }
    }, [debouncedSearch])

    return (
        <div ref={sidebarRef} className={sidebarClasses}>
            <Overlay sidebarRef={sidebarRef} />

            <div className={headClasses}>
                <h1>Library</h1>
                <ToggleButton
                    collapsed={collapsed}
                    setCollapsed={setCollapsed}
                />
            </div>

            <div className={childrenClasses}>
                <SearchMessage
                    ref={inputRef}
                    onChange={handleSearch}
                    onClear={handleClear}
                />
                <Messages data={messagesData} />
            </div>
        </div>
    )
}

export default SidebarControls
