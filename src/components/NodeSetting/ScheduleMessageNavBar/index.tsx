import React, { memo, useCallback } from 'react'
import moment from 'moment'
import { FormikProps, useField, useFormikContext } from 'formik'
import DatePicker from 'react-datepicker'

import { INodeData } from '@/interfaces'

import styles from '../index.module.scss'

const ScheduleMessageNavBar: React.FC<FormikProps<INodeData>> = ({
    errors,
    touched,
    handleBlur,
}) => {
    const { setFieldValue } = useFormikContext()
    const [field] = useField<Date>('scheduleDate')

    const handleChangeDatePicker = useCallback(
        (date: Date) => {
            setFieldValue(field.name, date)
        },
        [setFieldValue]
    )

    return (
        <>
            <div className={styles.formItem}>
                <label htmlFor="date">Date</label>
                <div>
                    <DatePicker
                        id="scheduleDate"
                        name="scheduleDate"
                        aria-label="Date"
                        placeholderText="Date"
                        showTimeSelect
                        dateFormat="MMMM d, yyyy h:mm aa"
                        selected={field.value && moment(field.value).toDate()}
                        onBlur={handleBlur}
                        onChange={handleChangeDatePicker}
                    />
                    {touched.scheduleDate && errors.scheduleDate && (
                        <p className={styles.invalid}>{errors.type}</p>
                    )}
                </div>
            </div>
        </>
    )
}

export default memo(ScheduleMessageNavBar)
