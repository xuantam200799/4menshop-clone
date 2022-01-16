import React, { useEffect, useState} from 'react';

import './header.scss';
import logo from '../../assets/images/logo.png'

import { Link, useLocation } from 'react-router-dom';


const mainNav = [
    {
        display: "Hàng mới",
        path: "/new"
    },
    {
        display: "Áo nam",
        path: "/ao-nam"
    },
    {
        display: "Quần nam",
        path: "/quan-nam"
    },
    {
        display: "Khuyến mãi",
        path: "/sale"
    },
]

const Header = () => {
    const { pathname } = useLocation();
    const activeNav = mainNav.findIndex(e => e.path === pathname);

    const [showBtn, setShowBtn] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                setShowBtn(true)
            } else {
                setShowBtn(false)
            }
        })
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    
    return (
        <div className="header">
            <div className="container">
                <div className="header__menu">
                    <div className="header__logo">
                        <Link to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>
                    <div className="header__menu__left">
                        {
                            mainNav.map((item, i ) => (
                                <div 
                                    className={`header__menu__left__item ${i === activeNav ? 'active' : ''}`}
                                    key={i}
                                >
                                    <Link to={item.path}>
                                        <span>{item.display}</span>
                                    </Link>
                                </div>
                            ))
                        }
                        <div className="header__menu__left__chip">
                            <div className="header__menu__left__chip__item">
                                <Link to="/cart">
                                    <i className="bx bx-shopping-bag"></i>
                                </Link>
                            </div>
                            <div className="header__menu__left__chip__item">
                                <Link to="/search">
                                    <i className="bx bx-search"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                showBtn && (
                    <button onClick={scrollToTop} className="scroll-to-top-btn">
                        <i className='bx bx-up-arrow-alt'></i>
                    </button>
                )
            }
        </div>
    )
}

export default Header
