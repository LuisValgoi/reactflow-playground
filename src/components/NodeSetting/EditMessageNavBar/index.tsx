import React, { memo } from 'react'
import { FormikProps } from 'formik'

import { INodeData, INodeType } from '@/interfaces'

import styles from '../index.module.scss'

const EditMessageNavBar: React.FC<FormikProps<INodeData>> = ({
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
}) => {
    return (
        <>
            <div className={styles.formItem}>
                <label htmlFor="heading">Heading</label>
                <div>
                    <input
                        id="heading"
                        name="heading"
                        type="text"
                        aria-label="Heading"
                        placeholder="Heading"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.heading}
                    />
                    {touched.heading && errors.heading && (
                        <p className={styles.invalid}>{errors.heading}</p>
                    )}
                </div>
            </div>

            <div className={styles.formItem}>
                <label htmlFor="type">Type</label>
                <div>
                    <select
                        id="type"
                        name="type"
                        aria-label="Type"
                        placeholder="Type"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.type}
                    >
                        <option value={INodeType.DEFAULT}>Default Node</option>
                        <option value={INodeType.ABC}>ABC Node</option>
                        <option value={INodeType.YN}>Yes or No Node</option>
                    </select>
                    {touched.type && errors.type && (
                        <p className={styles.invalid}>{errors.type}</p>
                    )}
                </div>
            </div>

            <div className={styles.formItem}>
                <label htmlFor="content">Content</label>
                <div>
                    <textarea
                        rows={4}
                        id="content"
                        name="content"
                        aria-label="Content"
                        placeholder="Content"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.content}
                    />
                    {touched.content && errors.content && (
                        <p className={styles.invalid}>{errors.content}</p>
                    )}
                </div>
            </div>
        </>
    )
}

export default memo(EditMessageNavBar)
