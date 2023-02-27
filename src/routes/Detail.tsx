import React, { useEffect } from 'react'
import { ReactFlowJsonObject, useReactFlow } from 'reactflow'
import { useParams } from 'react-router-dom'

import Home from '@/routes/Home'

const Detail: React.FC = () => {
    const { canvasId } = useParams<{ canvasId: string }>()

    const { setViewport, setNodes, setEdges } = useReactFlow()

    useEffect(() => {
        const canvasDataRaw = localStorage.getItem(canvasId!)
        if (!canvasDataRaw) {
            return
        }

        const canvasData = JSON.parse(canvasDataRaw!) as ReactFlowJsonObject

        const { x = 0, y = 0, zoom = 1 } = canvasData.viewport
        setNodes(canvasData.nodes || [])
        setEdges(canvasData.edges || [])
        setViewport({ x, y, zoom })
    }, [])

    return <Home />
}

export default Detail
