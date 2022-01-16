import React, { useState, useEffect } from 'react'

import './cart.scss'

import { useSelector } from 'react-redux';

import productData from '../assets/fake-data/products'

import { Link } from 'react-router-dom'

import Helmet from '../components/helmet/Helmet'
import Button from '../components/button/Button'
import CartItem from '../components/cart-item/CartItem'
import Grid from '../components/gird/Grid'

import numberWithCommas from '../utils/numberWithCommas';


const Cart = () => {

    const cartItems = useSelector((state) => state.cartItems.value);

    const [cartProducts, setCartProducts] = useState([])

    const [totalProducts, setTotalProducts] = useState(0)
    
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        setCartProducts(productData.getCartItemsDetail(cartItems))
        setTotalProducts(cartItems.reduce((total, item) => total + Number(item.quantity), 0))
        setTotalPrice(cartItems.reduce((total, item) => total + (Number(item.quantity) * Number(item.price)), 0))
    }, [cartItems])

    return (
        <Helmet title="Giỏ hàng">
            <div className="cart container">
                <Grid
                    col={2}
                    md={1}
                    smCol={1}
                    gap={0}
                >
                    <div className="cart__contact-form">
                        <div className="cart__title">
                            Thông tin liên hệ giao hàng
                        </div>
                        <div className="form-group">
                            <span className="">Họ và tên *</span>
                            <input type="text" name="" id="" />
                        </div>
                        <div className="form-group">
                            <span className="">Email</span>
                            <input type="email" name="" id="" placeholder='Không bắt buộc'/>
                        </div>
                        <div className="form-group">
                            <span className="">Số điện thoại *</span>
                            <input type="text" name="" id="" />
                        </div>
                        <div className="cart__title">
                            Địa chỉ giao hàng
                        </div>
                        <div className="form-group">
                            <span className="">Chọn tỉnh thành *</span>
                            <input type="text" name="" id="" />
                        </div>
                        <div className="form-group">
                            <span className="">Chọn quận huyện *</span>
                            <input type="text" name="" id="" />
                        </div>
                        <div className="form-group">
                            <span className="">Tên phường/Xã *</span>
                            <input type="text" name="" id="" />
                        </div>
                        <div className="form-group">
                            <span className="">Số nhà, tên đường *</span>
                            <input type="text" name="" id="" />
                        </div>
                        <div className="form-group">
                            <span className="">Ghi chú</span>
                            <textarea name="" id=""></textarea>
                        </div>
                        <div className="cart__contact-form__btn">
                            <Button 
                                size="md"
                                animate={true}
                                icon="bx bx-cart"
                            >
                                Gửi đơn hàng
                            </Button>
                        </div>
                    </div>
                    <div className="cart__order-info">
                        <div className="cart__title">
                            Giỏ hàng của bạn
                        </div>
                        <div className="cart__order-info__list">
                            {
                                cartProducts.map((item, i) => (
                                    <CartItem key={i} item={item} />
                                ))
                            }
                            <Link to='/'>
                                <span className="cart__order-info__list__btn">Quay ve</span>
                            </Link>
                        </div>
                        <div className="cart__title">
                            Tổng
                        </div>
                        <div className="cart__order-info__txt">
                            <span>Tổng số sản phẩm trong giỏ hàng</span>
                            <span>{totalProducts}</span>
                        </div>
                        <div className="cart__order-info__txt">
                            <span>Tổng tiền</span>
                            <span>{numberWithCommas(totalPrice)}</span>
                        </div>
                        <div className="cart__order-info__btn">
                            <Button size="md">Gửi đơn hàng</Button>
                            <Link to="/ao-nam">
                                <Button size="md">Tiếp tục mua hàng</Button>
                            </Link>
                        </div>
                    </div>
                </Grid>
            </div>
        </Helmet>
    )
}

export default Cart
