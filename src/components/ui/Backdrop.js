import React from 'react'
import * as ReactDOM from "react-dom"

const Backdrop = (props) => {
    return ReactDOM.createPortal(
        <div
            className="fixed top-0 left-0 w-full h-screen bg-black/80 z-20"
            onClick={props.onClick}></div>,
        document.getElementById('backdrop')
    )
}

export default Backdrop