import React, { useCallback, useState, useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'

import './catalog.scss'

import Helmet from '../../components/helmet/Helmet'
import Grid from '../../components/gird/Grid'
import ProductCard from '../../components/product-card/ProductCard'
import CheckBox from '../../components/checkbox/CheckBox'
import Button from '../../components/button/Button'

import productData from '../../assets/fake-data/products'
import category from '../../assets/fake-data/catagory'
import colors from '../../assets/fake-data/product-color'
import size from '../../assets/fake-data/product-size'


const Catalog = () => {

    const typeClothes = useParams();

    const filterCategory = typeClothes.catalog === 'ao-nam' ? category.shirt : category.pants;
    const filterSize = typeClothes.catalog === 'ao-nam' ? size.shirt : size.pants;

    const productList = useMemo(() => {
        return productData.getproductByTypeClothes(typeClothes.catalog)
    }, [typeClothes])

    const initFilter = {
        category: [],
        color: [],
        size: [],
    }
    

    const [products, setProducts] = useState([])
    const [filter, setFilter] = useState(initFilter)

    const filterSelect = (type, checked, item) => {
        if (checked) {
            switch (type) {
                case 'CATEGORY':
                    setFilter({...filter, category: [...filter.category, item.categorySlug]})
                    break;
                case 'COLOR':
                    setFilter({...filter, color: [...filter.color, item.color]})
                    break;
                case 'SIZE':
                    setFilter({...filter, size: [...filter.size, item.size]})
                    break;
                default:
                    break;
            }
        } else {
            switch (type) {
                case 'CATEGORY':
                    const newCategory = filter.category.filter(e => e !== item.categorySlug)
                    setFilter({...filter, category: newCategory})
                    break;
                case 'COLOR':
                    const newColor = filter.color.filter(e => e !== item.color)
                    setFilter({...filter, color: newColor})
                    break;
                case 'SIZE':
                    const newSize = filter.size.filter(e => e !== item.size)
                    setFilter({...filter, size: newSize})
                    break;
                default:
                    break;
            }
        }
    }

    const clearFilter = () => setFilter(initFilter);

    const updateProducts = useCallback(
        () => {
            let temp = productList
            if (filter.category.length > 0) {
                temp = temp.filter(e => filter.category.includes(e.categorySlug))
            }
            
            if (filter.color.length > 0) {
                temp = temp.filter(e => {
                    const check = e.colors.find(color => filter.color.includes(color))
                    return check !== undefined
                })
            }
            
            if (filter.size.length > 0) {
                temp = temp.filter(e => {
                    const check = e.size.find(size => filter.size.includes(size))
                    return check !== undefined
                })
            }

            setProducts(temp)
        },
        [filter, productList]
    )

    useEffect(() => {
        updateProducts()
    }, [updateProducts])

    useEffect(() => {
        clearFilter()
    }, [typeClothes.catalog])

    return (
        <Helmet title="Sản phẩm">
            <div className="container">
                <div className="catalog">
                    <div className="catalog__filter">
                        <div className="catalog__filter__widget">
                            <div className="catalog__filter__widget__title">
                                Danh mục sản phẩm
                            </div>
                            <div className="catalog__filter__widget__content">
                                {
                                    filterCategory.map((item, i) => (
                                        <div className="catalog__filter__widget__content__item" key={i}>
                                            <CheckBox 
                                                label={item.display}
                                                onChange={(input) => { filterSelect("CATEGORY", input.checked, item)}}
                                                checked={filter.category.includes(item.categorySlug)}
                                            />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="catalog__filter__widget">
                            <div className="catalog__filter__widget__title">
                                Màu sắc
                            </div>
                            <div className="catalog__filter__widget__content">
                                {
                                    colors.map((item, i) => (
                                        <div className="catalog__filter__widget__content__item" key={i}>
                                            <CheckBox 
                                                label={item.display}
                                                onChange={(input) => filterSelect("COLOR", input.checked, item)}
                                                checked={filter.color.includes(item.color)}
                                            />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="catalog__filter__widget">
                            <div className="catalog__filter__widget__title">
                                Kích cỡ
                            </div>
                            <div className="catalog__filter__widget__content">
                                {
                                    filterSize.map((item, i) => (
                                        <div className="catalog__filter__widget__content__item" key={i}>
                                            <CheckBox 
                                                label={item.display}
                                                onChange={(input) => filterSelect("SIZE", input.checked, item)}
                                                checked={filter.size.includes(item.size)}
                                            />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="catalog__filter__widget">
                            <div className="catalog__filter__widget__content">
                                <Button
                                    size="sm"
                                    onClick={clearFilter}
                                >
                                    Xoá bộ lọc
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="catalog__content">
                        <Grid
                            col={3}
                            mdCol={2}
                            smCol={1}
                            gap={20}
                        >
                            {
                                products.map((item, i) => (
                                    <ProductCard 
                                        key={i}
                                        img01={item.image01}
                                        img02={item.image02}
                                        name={item.title}
                                        price={Number(item.price)}
                                        slug={item.slug}
                                        pathname={item.type}
                                        button
                                    />
                                ))
                            }
                        </Grid>
                    </div>
                </div>

            </div>
        </Helmet>
    )
}

export default Catalog
