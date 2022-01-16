import React from 'react'

import { Link } from 'react-router-dom'

import './category.scss'

import category1 from '../../assets/images/categories/category_1.png'
import category2 from '../../assets/images/categories/category_2.png'
import category3 from '../../assets/images/categories/category_3.png'


const Category = () => {
    return (
        <div className="category">
            <div className="category__item">
                <Link to="/">
                    <img src={category1} alt="" />
                </Link>
            </div>
            <div className="category__item">
                <Link to="/">
                    <img src={category2} alt="" />
                </Link>
            </div>
            <div className="category__item">
                <Link to="/">
                    <img src={category3} alt="" />
                </Link>
            </div>
        </div>
    )
}

export default Category
