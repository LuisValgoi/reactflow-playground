import React from 'react'

import Message from '@/components/SidebarControls/Message'

import { useMessageList } from '@/providers/MessageList'

import styles from './index.module.scss'

const Messages: React.FC = () => {
    const { messages } = useMessageList()

    return (
        <ul className={styles.list}>
            {messages.map((message) => (
                <Message
                    key={message.title}
                    heading={message.title}
                    content={message.content}
                />
            ))}
        </ul>
    )
}

export default Messages
