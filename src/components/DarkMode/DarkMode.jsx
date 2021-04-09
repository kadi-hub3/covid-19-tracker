import React from 'react'
import styles from './DarkMode.module.css'

const DarkMode = () => {
    return (
        <label>
            <input type='checkbox' className={styles.checkbox} />
            <span className={styles.check}></span>
        </label>

    )
}

export default DarkMode
