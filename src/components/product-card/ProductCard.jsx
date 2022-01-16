import React from 'react'
import PropTypes from 'prop-types'

import './product-card.scss'

import numberWithCommas from '../../utils/numberWithCommas'

import { Link } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { set } from '../../redux/product-modal/productModalSlice'

import { CircleButton } from '../button/Button'

const ProductCard = props => {

    const dispatch = useDispatch();

    return (
        <div className="product-card">
            <div className="product-card__img">
                <Link to={`/${props.pathname}/${props.slug}`}>
                    <img src={props.img01} alt="" />
                    <img src={props.img02} alt="" />
                </Link>
                {
                    props.button ? (
                        <div className="product-card__img__btn">
                            <CircleButton 
                                size="md"
                                icon="bx bx-cart-alt"
                                onClick={() => dispatch(set(props.slug))}
                            >
                                Chọn mua
                            </CircleButton>
                        </div>
                    ) : null
                }
            </div>
            <div className="product-card__decs">
                <Link to={`/${props.pathname}/${props.slug}`}>
                    <h3 className="product-card__decs__name">{props.name}</h3>
                </Link>
                <div className="product-card__decs__price">
                    {numberWithCommas(props.price)}
                </div>
            </div>
        </div>
    )
}

ProductCard.propTypes = {
    img01: PropTypes.string.isRequired,
    img02: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
    button: PropTypes.bool,
}

export default ProductCard
