import React from 'react'
import PropTypes from 'prop-types'

import './button.scss'

const Button = props => {

    const bg = props.backgroundColor ? 'bg-' + props.backgroundColor : 'bg-main';
    const size = props.size ? 'btn-' + props.size : '';
    const animate = props.animate ? 'btn-animate' : '';

    return (
        <button
            className={`btn ${bg} ${size} ${animate}`}
            onClick={props.onClick ? () => props.onClick() : null}
        >
            <span className="btn__txt">{props.children}</span>
            {
                props.icon ? (
                    <span className="btn__icon">
                        <i className={`${props.icon} bx-tada`}></i>
                    </span>
                ) : null
            }
        </button>
    )
}


Button.propTypes = {
    backgroundColor: PropTypes.string,
    size: PropTypes.string,
    icon: PropTypes.string,
    animate: PropTypes.bool,
    onClick: PropTypes.func,
}

export const CircleButton = props => {
    return (
        <button
            className={`btn-circle`}
            onClick={props.onClick ? () => props.onClick() : null}
        >
            {
                props.icon ? (
                    <span className="btn-circle__icon">
                        <i className={`${props.icon}`}></i>
                    </span>
                ) : null
            }
        </button>
    )

}

CircleButton.propTypes = {
    icon: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
