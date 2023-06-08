import { INodeData, INodeType } from '@/interfaces'
import * as Yup from 'yup'

class Model {
    getInitialValues() {
        return {
            type: 'DefaultNode',
            heading: '',
            content: '',
            scheduleDate: new Date(),
        } as INodeData
    }

    getSchema() {
        return Yup.object().shape({
            type: Yup.string()
                .oneOf([INodeType.ABC, INodeType.YN, INodeType.DEFAULT])
                .required('Type Required'),
            heading: Yup.string()
                .min(1, 'Heading must have at least 1 character')
                .max(255, "Heading can't be longer than 255 characters")
                .required('Heading required'),
            content: Yup.string()
                .min(1, 'Content must have at least 1 character')
                .max(255, "Content can't be longer than 255 characters")
                .required('Content required'),
            scheduleDate: Yup.date().required('Date Required'),
        })
    }
}

export default new Model()
