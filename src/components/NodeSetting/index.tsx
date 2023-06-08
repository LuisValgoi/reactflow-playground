import React, { useCallback, useMemo } from 'react'
import classNames from 'classnames'
import { Formik, FormikProps } from 'formik'

import { useApp } from '@/providers/AppProvider'
import { INavBar, INodeData } from '@/interfaces'

import Drawer from '@/components/Drawer'
import Model from '@/components/NodeSetting/index.model'
import EditMessageNavBar from '@/components/NodeSetting/EditMessageNavBar'
import ScheduleMessageNavBar from '@/components/NodeSetting/ScheduleMessageNavBar'

import styles from './index.module.scss'

const NodeSetting: React.FC = () => {
    const {
        editingNode,
        navBarSelected,
        setEditingNode,
        updateNode,
        setNavBarSelected,
    } = useApp()

    const initialValues = useMemo(
        () => (editingNode ? editingNode.data : Model.getInitialValues()),
        [editingNode]
    )

    const navBarActionClasses = classNames(
        styles.formItem,
        styles.formItemActions
    )

    const navBarTitleEditMessageClasses = classNames(styles.navBarTitle, {
        [styles.navBarTitleSelected]: navBarSelected === INavBar.EDIT,
    })

    const navBarTitleScheduleMessageClasses = classNames(styles.navBarTitle, {
        [styles.navBarTitleSelected]: navBarSelected === INavBar.SCHEDULE,
    })

    const handleSwitchNavBar = useCallback(
        (navBar: INavBar) => {
            setNavBarSelected(navBar)
        },
        [setNavBarSelected]
    )

    const handleDrawerClose = useCallback(() => {
        setEditingNode(undefined)
    }, [setEditingNode])

    const handleSubmit = useCallback(
        (values: INodeData) => {
            if (!editingNode) {
                return
            }

            updateNode(editingNode.id, values)
            handleDrawerClose()
        },
        [handleDrawerClose, editingNode]
    )

    const renderCurrentNavBar = useCallback(
        (props: FormikProps<INodeData>) => {
            if (navBarSelected === INavBar.EDIT) {
                return <EditMessageNavBar {...props} />
            }
            return <ScheduleMessageNavBar {...props} />
        },
        [navBarSelected]
    )

    return (
        <Drawer open={!!editingNode} onClose={handleDrawerClose}>
            <Formik
                enableReinitialize
                onSubmit={handleSubmit}
                initialValues={initialValues}
                validationSchema={Model.getSchema()}
                applyErrors
                showProcessing
            >
                {(props) => (
                    <div className={styles.wrapper}>
                        <h1>Message Details</h1>
                        <div className={styles.navBarWrapper}>
                            <h4
                                className={navBarTitleEditMessageClasses}
                                onClick={() => handleSwitchNavBar(INavBar.EDIT)}
                            >
                                Edit Message
                            </h4>

                            <h4
                                className={navBarTitleScheduleMessageClasses}
                                onClick={() =>
                                    handleSwitchNavBar(INavBar.SCHEDULE)
                                }
                            >
                                Schedule Message
                            </h4>
                        </div>
                        <form
                            className={styles.form}
                            onSubmit={props.handleSubmit}
                            noValidate
                        >
                            {renderCurrentNavBar(props)}

                            <div className={navBarActionClasses}>
                                <button
                                    type="submit"
                                    disabled={props.isSubmitting}
                                >
                                    {props.isSubmitting ? 'Loading...' : 'Save'}
                                </button>
                                <button
                                    type="reset"
                                    onClick={handleDrawerClose}
                                    aria-disabled={props.isSubmitting}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                )}
            </Formik>
        </Drawer>
    )
}

export default NodeSetting
