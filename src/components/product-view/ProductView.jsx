import React, { useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'


import { useDispatch } from 'react-redux'
import { addItem } from '../../redux/shopping-cart/cartItemsSlice'

import Grid from '../gird/Grid'
import Button from '../button/Button'
import DescAccordion from '../description-accordion/DescAccordion'

import numberWithCommas from '../../utils/numberWithCommas'

import './product-view.scss'



const ProductView = (props) => {
    
    const dispatch = useDispatch();
    
    let product = props.product;
    
    if (product === undefined) product = {
        price: 0,
        title: "",
        colors: [],
        size: []
    }
    
    const [previewImg, setPreviewImg] = useState(product.image01)
    
    const [color, setColor] = useState(product.colors[0])
    const [size, setSize] = useState(product.size[0])
    const [quantify, setQuantify] = useState(1)
    
    useEffect(() => {
        setPreviewImg(product.image01)
        setQuantify(1)
        setColor(product.colors[0])
        setSize(product.size[0])
    }, [product])
    
    
    const addToCart = () => {
        dispatch(addItem({
            slug: product.slug,
            color: color,
            size: size,
            quantity: quantify,
            price: product.price
        }))
        alert("Thêm vào giỏ hàng thành công")
    }
    
    const goToCart = () => {
        dispatch(addItem({
            slug: product.slug,
            color: color,
            size: size,
            quantity: quantify,
            price: product.price
        }))
        props.history.push('/cart')
    }
    
    function createDescription() {
        return {__html: `${product.description}`};
    }

    return (
        <div className="product">
            <div className="product__image">
                <div className="product__image__list">
                    <div className="product__image__list__item" onClick={() => setPreviewImg(product.image01)}>
                        <img src={product.image01} alt="" />
                    </div>
                    <div className="product__image__list__item" onClick={() => setPreviewImg(product.image02)}>
                        <img src={product.image02} alt="" />
                    </div>
                </div>
                <div className="product__image__main">
                    <img src={previewImg} alt="" />
                </div>
            </div>
            <div className="product__info">
                <div className="product__info__title">
                    {product.title}
                </div>
                <div className="product__info__item">
                    <div className="product__info__item__price">
                        <span>Giá bán: </span>
                        {numberWithCommas(product.price)} đ
                    </div>
                </div>
                <div className="separation-line"></div>
                <div className="product__info__item">
                    <div className="product__info__item__product-selector">
                        <Grid
                            col={2}
                            mdCol={1}
                            smCol={1}
                            gap={10}
                        >
                            <div className="input-group">
                                <div className="input-group__title">
                                    <span>SIZE*</span>
                                    <Link to="/">hướng dẫn chọn size</Link>
                                </div>
                                <select
                                    value={size}
                                    onChange={e => setSize(e.target.value)}
                                >
                                    {
                                        product.size.map((item, i) => (
                                            <option value={item} key={i}>{item.toUpperCase()}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className="input-group">
                                <div className="input-group__title">
                                    <span>Số lượng *</span>
                                </div>
                                <select
                                    value={quantify}
                                    onChange={e=> setQuantify(e.target.value)}
                                >
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                            <div className="input-group">
                                <div className="input-group__title">
                                    <span>màu sắc *</span>
                                </div>
                                <select
                                    value={color}
                                    onChange={e => setColor(e.target.value)}
                                >
                                    {
                                        product.colors.map((item, i) => (
                                            <option value={item} key={i}>{item}</option>
                                        ))
                                    }
                                </select>
                            </div>
                        </Grid>
                        <Grid col={2} mdCol={1} smCol={1} gap={10}>
                            <Button
                                size="md"
                                icon="bx bx-cart"
                                animate={true}
                                onClick={() => goToCart()}
                            >
                                Đăng ký mua
                            </Button>
                            <Button
                                size="md"
                                onClick={() => addToCart()}
                            >
                                thêm vào giỏ hàng
                            </Button>
                        </Grid>
                    </div>
                </div>
                <div className="separation-line"></div>
                <div className="product__info__item" >
                    <DescAccordion desc={() => createDescription()}/>
                </div>
            </div>
        </div>
    )
}

ProductView.propTypes = {
    product: PropTypes.object,
}

export default withRouter(ProductView)
