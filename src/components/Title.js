import React from 'react'

const Title = ({ title, subtitle }) => {
    return (
        <div className='title'>
            <h2>{title}</h2>
            <h6>{subtitle}</h6>
        </div>
    )
}

export default Title
