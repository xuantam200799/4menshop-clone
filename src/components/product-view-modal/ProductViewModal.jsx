import React, { useState, useEffect} from 'react'

import './product-view-modal.scss'

import { useSelector, useDispatch } from 'react-redux'
import { remove } from '../../redux/product-modal/productModalSlice'

import productData from '../../assets/fake-data/products'

import Button from '../button/Button'
import ProductView from '../product-view/ProductView'



const ProductViewModal = (props) => {

    const productSlug = useSelector(state => state.productModal.value);

    const dispatch = useDispatch();

    const [product, setProduct] = useState(undefined);

    useEffect(() => {
        setProduct(productData.getProductBySlug(productSlug))
    }, [productSlug])
    
    return (
        <div className={`product-view__modal ${product === undefined ? '': 'active'}`}>
            <div className="product-view__modal__content">
                <ProductView product={product}/>
                <div className="product-view__modal__content__close">
                    <Button
                        size="sm"
                        onClick={() => dispatch(remove())}
                    >
                        Đóng
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ProductViewModal
