import React from 'react'
import styles from "../style/styles.module.css"

const TokenInput = props => {
    return (
        <div className={styles.flexBox}>
            <input
                className={styles.accessInput}
                onChange={props.handleToken}
                placeholder={"Access token, hit enter after typing"}
                value={props.token}
            />
        </div>
    )
}

export default TokenInput

