import React from 'react'
import styles from "../style/styles.module.css"

const DatePicker = props => {
    return (
        <div className={styles.flexBox}>
            <div>
                Start Date
                <input
                    className={styles.input}
                    type="date"
                    onChange={props.handleStartDate}
                    value={props.startDate}
                    min={"2017-05-01"}
                    max={"2017-06-15"}
                />
            </div>
            <div>
                End Date
                <input
                    className={styles.input}
                    type="date"
                    onChange={props.handleEndDate}
                    value={props.endDate}
                    min={"2017-05-01"}
                    max={"2017-06-15"}
                />
            </div>
        </div>
    )
}

export default DatePicker