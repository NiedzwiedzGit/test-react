import React from 'react';
import './UserOutput.css'

const userOutput = (props) => {
    return (
        <div className="userOutput">
            <p>{props.fillText}</p>
            <p>i'm <h1>{props.name}</h1> and i'm make a test</p>
            <p>{props.children}</p>
        </div>
    )
}

export default userOutput;