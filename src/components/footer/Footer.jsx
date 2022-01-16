import React from 'react'

import { Link } from 'react-router-dom'

import Grid from '../gird/Grid'

import logoFooter from '../../assets/images/logo-footer.png'
import mapImg from '../../assets/images/map.png'

import './footer.scss'

const Footer = () => {

    const footerAboutLinks = [
        {
            display: 'Giới thiệu',
            path: '/about'
        },
        {
            display: 'Liên hệ',
            path: '/about'
        },
        {
            display: 'Tuyển dụng',
            path: '/about'
        },
        {
            display: 'Tin tức',
            path: '/about'
        },
    ]

    const footeCustomerLinks = [
        {
            display: 'Hướng dẫn đặt hàng',
            path: '/about'
        },
        {
            display: 'Hướng dẫn chọn size',
            path: '/about'
        },
        {
            display: 'Câu hỏi thường gặp',
            path: '/about'
        },
        {
            display: 'Chính sách khách vip',
            path: '/about'
        },
        {
            display: 'Thanh toán - Giao hàng',
            path: '/about'
        },
        {
            display: 'Chính sách đổi hàng',
            path: '/about'
        },
        {
            display: 'Chính sách bảo mật',
            path: '/about'
        },
        {
            display: 'Chính sách cookie',
            path: '/about'
        },
    ]
    return (
        <div className="footer">
            <div className="container">
                <Grid
                    col={4}
                    mdCol={2}
                    smCol={1}
                    gap={30}
                >
                    <div>
                        <div className="footer__logo">
                            <img src={logoFooter} alt="logo"></img>
                        </div>
                        <div className="footer__content">
                            {
                                footerAboutLinks.map((item, i) => (
                                    <div key={i} className="footer__content__link">
                                        <i className="bx bxs-chevrons-right"></i>
                                        <Link to={item.path}>
                                            {item.display}
                                        </Link>
                                    </div>
                                ))
                            }
                            <div className="footer__content__link">
                                <span><i className='bx bx-mail-send' style={{color: '#8d8d8d', fontSize: '1.8rem'}}></i> Email: </span>
                                <Link to="/">
                                    info@4menshop.com
                                </Link>
                            </div>
                            <div className="footer__content__link">
                                <span><i className='bx bx-phone' style={{color: '#8d8d8d', fontSize: '1.8rem'}}></i> Hotline: </span>
                                <Link to="/">
                                    0868.444.644
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="footer__title">
                            Hỗ trợ khách hàng
                        </div>
                        <div className="footer__content">
                            {
                                footeCustomerLinks.map((item, i) => (
                                    <div key={i} className="footer__content__link">
                                        <i className="bx bxs-chevrons-right"></i>
                                        <Link to={item.path}>
                                            {item.display}
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <div className="footer__title">
                            Hệ thống cửa hàng
                        </div>
                        <div className="footer__content">
                            <img src={mapImg} alt="" />
                            <div className="footer__content__link">
                                <Link to="/">
                                    Tìm địa chỉ CỬA HÀNG gần bạn <i className="bx bxs-chevrons-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="footer__title">
                            Kết nối với 4men
                        </div>
                        <div className="footer__content">
                            
                        </div>
                    </div>
                </Grid>
            </div> 
        </div>
    )
}

export default Footer
