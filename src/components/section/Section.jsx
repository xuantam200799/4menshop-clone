import React from 'react'
import PropTypes from 'prop-types'

import './section.scss'

const Section = props => {
    return (
        <div className="section">
            {props.children}
        </div>
    )
}

export const SectionTitle = props => {
    return (
        <div className="section__title">
            {props.children}
        </div>
    )
}

export const SectionBody = props => {
    return (
        <div className={props.container ? "container" : "container-fluid"}>
            <div className="section__body">
                {props.children}
            </div>
        </div>
    )
}

SectionBody.propTypes = {
    container: PropTypes.bool,
}

export default Section
