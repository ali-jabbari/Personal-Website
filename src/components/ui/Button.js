import React from "react"

const Button = (props) => {
  const className = {
    base: `flex justify-center items-center gap-2 font-iranSansMedium`,
    size: {
      small: ` py-2 px-4`,
      normal: `py-4 px-8`
    },
    color: {
      white: `bg-white text-navy hover:shadow-lg hover:shadow-navy/30`,
      navy: `bg-navy text-white hover:shadow-lg hover:shadow-navy/30`,
      green: `bg-green text-white hover:bg-greenLight`,
    },
    round: {
      small: `rounded`,
      medium: `rounded-lg`,
      full: `rounded-full`,
    },
  }

  const styles = `${className.base} 
  ${className.size[props.size]} 
  ${className.color[props.color]} 
  ${className.round[props.round]}
  ${props.className}`

  return (
    <button className={styles} onClick={props.onClick}>
      {/*icon*/}
      {props.icon && props.icon}

      {/*children*/}
      {props.children}
    </button>
  )
}

export default Button