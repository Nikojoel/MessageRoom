import React from 'react'
import styles from "../style/styles.module.css"

const ListItem = props => {
    return (
        <div className={styles.listItem}>
            <div className={styles.innerItem}>
                <h2>{props.item.conversation_count}</h2>
            </div>
            <div className={styles.innerItem}>
                <h2>{props.item.missed_chat_count}</h2>
            </div>
            <div className={styles.innerItem}>
                <h2>{props.item.visitors_with_conversation_count}</h2>
            </div>
            <div className={styles.innerItem}>
                <h2>{props.item.date}</h2>
            </div>
        </div>
    )
}

export default ListItem