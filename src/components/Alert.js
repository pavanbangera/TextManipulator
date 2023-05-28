import React from 'react'

export default function Alert (props) {
    const capitalise = (word) => {
        let lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.substr(1)
    }
    return (
        props.alert && <div className={`alert alert-${props.alert.type} z-3 float-end mx-4`} role="alert">
            <strong>{capitalise(props.alert.type)}</strong> {props.alert.msg}.
        </div>
    )
}
