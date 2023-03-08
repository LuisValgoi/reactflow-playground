import React from 'react'
import { useParams } from 'react-router-dom'

import { useAppLoadDetailData } from '@/providers/AppProvider'

import Home from '@/routes/Home'

const Detail: React.FC = () => {
    const { canvasId } = useParams<{ canvasId: string }>()

    useAppLoadDetailData(canvasId)

    return <Home />
}

export default Detail
