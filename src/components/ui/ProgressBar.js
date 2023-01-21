import React from 'react'

const ProgressBar = (props) => {

    const className = {
        percentage: {
            '10': 'w-[10%]',
            '20': 'w-[20%]',
            '30': 'w-[30%]',
            '40': 'w-[40%]',
            '50': 'w-[50%]',
            '60': 'w-[60%]',
            '70': 'w-[70%]',
            '80': 'w-[80%]',
            '90': 'w-[90%]',
            '100': 'w-[100%]',
        }
    }

    return (
        <div className={props.className}>
            <div className="flex justify-between mb-2">
                <h1 className="text-white text-sm">{props.title}</h1>
                <span className="text-white text-xs">{props.value}%</span>
            </div>
            <div className="h-[0.4rem] w-full bg-white bg-opacity-10 rounded-full">
                <div className={`${className.percentage[props.value]} h-[0.4rem] bg-green rounded-full`}>
                </div>
            </div>
        </div>
    )
}

export default ProgressBar