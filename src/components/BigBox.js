import React from 'react'
import styles from "../style/styles.module.css"

const BigBox = props => {
    return (
        <div className={styles.bigBox}>
           <div className={styles.box}>
               <p className={styles.headerCount}>{props.data.total_conversation_count ?? "--"}</p>
               <h2>Total conversation count</h2>
           </div>
            <div className={styles.box}>
                <p className={styles.headerCount}>{props.data.total_user_message_count ?? "--"}</p>
                <h2>Total user message count</h2>
            </div>
            <div className={styles.box}>
                <p className={styles.headerCount}>{props.data.total_visitor_message_count ?? "--"}</p>
                <h2>Total visitor message count</h2>
            </div>
        </div>
    )
}

export default BigBox