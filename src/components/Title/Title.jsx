import React from 'react'
import styles from './Title.module.css'

const Title = ({ title, subtitle }) => {
    return (
        <h2 className={styles.title}>
            {title}
            <span> {subtitle}</span>
        </h2>

    )
}

export default Title
