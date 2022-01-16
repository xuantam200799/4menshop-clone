import React, { useState} from 'react'
import PropTypes from 'prop-types'

const DescAccordion = (props) => {

    const [expanded, setExpanded] = useState(false);

    return (
        <div className="accordion">
            <div className="accordion__title" onClick={() => setExpanded(!expanded)}>
                <p>Đặc điểm nổi bật</p>
                {
                    expanded ? <i className='bx bx-minus'></i> : <i className='bx bx-plus'></i>
                }
            </div>
            {
                expanded ? <div dangerouslySetInnerHTML={props.desc()} className="accordion__content"></div> : ''
            }
        </div>
    )
}

DescAccordion.propTypes = {
    desc: PropTypes.func.isRequired,
}


export default DescAccordion
