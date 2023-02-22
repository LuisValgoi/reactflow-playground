import React from 'react'
import { Handle, Position } from 'reactflow'
import MessageBase from '../MessageBase'

type MessageNRProp = {
    heading: string
    content: string
} & JSX.IntrinsicElements['div']

const MessageNR: React.FC<MessageNRProp> = ({ heading, content }) => {
    debugger
    return (
        <MessageBase heading={heading} content={content}>
            <div
                style={{
                    padding: '1rem',
                    backgroundColor: 'red',
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '1rem',
                }}
            >
                <button>
                    No Response
                    <Handle type="source" position={Position.Bottom} id="a" />
                </button>
                <button>
                    A
                    <Handle type="source" position={Position.Bottom} id="b" />
                </button>
                <button>
                    B
                    <Handle type="source" position={Position.Bottom} id="c" />
                </button>
                <button>
                    C
                    <Handle type="source" position={Position.Bottom} id="d" />
                </button>
            </div>
        </MessageBase>
    )
}

export default MessageNR
