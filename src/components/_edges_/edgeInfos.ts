import { IEdgeType } from '@/interfaces'
import { DefaultEdgeOptions } from 'reactflow'

const defaultEdgeInfos = {
    type: IEdgeType.DEFAULT,
    data: {
        label: 'Link Message',
    },
} as DefaultEdgeOptions

export default defaultEdgeInfos
