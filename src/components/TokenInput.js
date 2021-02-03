import React from 'react'
import styles from "../style/styles.module.css"

const TokenInput = props => {
    return (
        <div className={styles.flexBox}>
            {props.success &&
            <label className={styles.tokenSuccess}>Token set!</label>
            }
            <input
                className={styles.accessInput}
                onKeyPress={props.saveToken}
                onChange={props.handleToken}
                placeholder={"Access token, hit enter to save it"}
                value={props.token}
            />
        </div>
    )
}

export default TokenInput

