import React from 'react'

import './policy-section.scss'

import Grid from '../gird/Grid'

const PolicySection = () => {
    return (
        <div className="policy-wapper">
            <Grid
                col={4}
                mdCol={2}
                smCol={1}
                gap={5}
            >
                <div>
                    <div className="policy">
                        <div className="policy__title">
                            <div className="policy__title__logo">
                                <i className='bx bxs-plane-alt'></i>
                            </div>
                            <div>
                                <div className="policy__title__txt">THANH TOÁN & GIAO HÀNG</div>
                                <div className="policy__title__seperate"></div>
                            </div>
                        </div>
                        <div className="policy__content">
                            <p>Miễn phí vận chuyển cho đơn hàng trên 499.000 VNĐ</p>
                            <p>- Giao hàng và thu tiền tận nơi</p>
                            <p>- Chuyển khoản và giao hàng</p>
                            <p>- Mua hàng tại shop</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="policy">
                        <div className="policy__title">
                            <div className="policy__title__logo">
                                <i className='bx bxs-credit-card'></i>
                            </div>
                            <div>
                                <div className="policy__title__txt">THẺ THÀNH VIÊN</div>
                                <div className="policy__title__seperate"></div>
                            </div>
                        </div>
                        <div className="policy__content">
                            <p>Chế độ ưu đãi thành viên VIP:</p>
                            <p>- 5% cho thành viên Bạc</p>
                            <p>- 10% cho thành viên Vàng</p>
                            <p>- 15% cho thành viên Kim cương</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="policy">
                        <div className="policy__title">
                            <div className="policy__title__logo">
                                <i className='bx bx-time'></i>
                            </div>
                            <div>
                                <div className="policy__title__txt">GIỜ MỞ CỬA</div>
                                <div className="policy__title__seperate"></div>
                            </div>
                        </div>
                        <div className="policy__content">
                            <strong>8h30 đến 22:00</strong>
                            <p>- Tất cả các ngày trong tuần</p>
                            <p>- Áp dụng cho tất cả các chi nhánh hệ thống cửa hàng 4MEN</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="policy">
                        <div className="policy__title">
                            <div className="policy__title__logo">
                                <i className='bx bx-headphone'></i>
                            </div>
                            <div>
                                <div className="policy__title__txt">HỖ TRỢ 24/7</div>
                                <div className="policy__title__seperate"></div>
                            </div>
                        </div>
                        <div className="policy__content">
                            <p>Gọi ngay cho chúng tôi khi bạn có thắc mắc</p>
                            <p>- 0868.444.644</p>
                        </div>
                    </div>
                </div>
            </Grid>
        </div>
    )
}

export default PolicySection
