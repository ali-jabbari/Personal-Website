import React from 'react'

const TableItem = (props) => {

    const colors = {
        white: 'bg-white',
        gray: 'bg-darkerWhite'
    }

    return (
        <div className={`${colors[props.color]} w-full flex justify-between p-5`}>
            <h4 className="text-sm font-iranSansMedium">{props.title}</h4>
            <h4 className="text-zinc-500">{props.value}</h4>
        </div>
    )
}

export default TableItem