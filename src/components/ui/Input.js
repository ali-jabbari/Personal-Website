import React from "react"

const Input = (props) => {
    const className = {
        base: `bg-background p-5 rounded w-full outline-none ${props.ltr ? 'text-end' : 'text-start'}`,
    }

    const styles = `${className.base} ${props.className}`

    return props.element === "text" ? (
        <input
            dir={props.ltr && 'ltr'}
            style={props.style}
            className={styles}
            type={props.type}
            placeholder={props.placeholder}
            onChange={props.onChange}
            defaultValue={props.value}
        />
    ) : props.element === "textarea" ? (
        <textarea
            dir={props.ltr && 'ltr'}
            style={props.style}
            className={styles}
            rows={3}
            placeholder={props.placeholder}
            onChange={props.onChange}
            defaultValue={props.value}
        />
    ) : null
}

export default Input
