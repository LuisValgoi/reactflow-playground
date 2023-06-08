import React, { useCallback, useEffect, useState } from 'react'
import { useReactFlow } from 'reactflow'
import classNames from 'classnames'
import { isEmpty } from 'lodash'

import { getEdgesForEdition } from '@/utils/ReactFlow'

import styles from './index.module.scss'
import defaultEdgeInfos from '../../edgeInfos'

type IEditableEdgeLabel = {
    transform: string
    label: string
    edgeId: string
} & JSX.IntrinsicElements['div']

const EditableEdgeLabel: React.FC<IEditableEdgeLabel> = ({
    edgeId,
    transform,
    label,
    ...restProps
}) => {
    const { setEdges } = useReactFlow()

    const [labelValue, setLabelValue] = useState('')

    const [showInput, setShowInput] = useState(false)

    const wrapperClasses = classNames(styles.labelWrapper, {
        [styles.labelWrapperForInput]: showInput,
    })

    const handleTextClickName = useCallback(() => {
        setShowInput(true)
    }, [setShowInput])

    const handleInputBlur = useCallback(
        (event: React.FocusEvent<HTMLInputElement, Element>) => {
            const value =
                event.currentTarget.value === ''
                    ? defaultEdgeInfos.data.label
                    : event.currentTarget.value

            setShowInput(false)
            setLabelValue(value)
            updateEdge(value)
        },
        [setShowInput]
    )

    const handleOnKeyDown = useCallback(
        (event: React.KeyboardEvent<HTMLInputElement>) => {
            if (event.code !== 'Enter') {
                return
            }

            const value =
                event.currentTarget.value === ''
                    ? defaultEdgeInfos.data.label
                    : event.currentTarget.value

            setShowInput(false)
            setLabelValue(value)
            updateEdge(value)
        },
        [setShowInput]
    )

    const updateEdge = useCallback(
        (label: string) =>
            setEdges((edges) => getEdgesForEdition(edges, label, edgeId)),
        [setEdges]
    )

    useEffect(() => {
        setLabelValue(label)
    }, [label])

    return (
        <div {...restProps} style={{ transform }} className={wrapperClasses}>
            {showInput ? (
                <input
                    className={styles.labelInput}
                    autoFocus
                    tabIndex={0}
                    defaultValue={labelValue}
                    onBlur={handleInputBlur}
                    onKeyDown={handleOnKeyDown}
                />
            ) : (
                <p className={styles.labelText} onClick={handleTextClickName}>
                    {labelValue}
                </p>
            )}
        </div>
    )
}

export default EditableEdgeLabel
