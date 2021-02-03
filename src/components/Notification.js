import React from "react"
import styles from "../style/styles.module.css"

const Notification = props => {
    if (props.message === null) {
        return null
    }
    return (
        <div className={styles.error}>
            {props.message}
        </div>
    )
}

export default Notification
