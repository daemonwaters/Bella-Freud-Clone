import React from 'react'

function Button({cls,children}) {
    return (
        <button className={cls}>
            {children}
        </button>
    )
}

export default Button
