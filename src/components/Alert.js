import React from 'react'

export default function Alert (props) {
    const capitalise = (word) => {
        let lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.substr(1)
    }
    return (
        <div style={{ height: "35px" }}>
            {props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">
                <strong>{capitalise(props.alert.type)}</strong> {props.alert.msg}.
            </div>}</div>
    )
}
