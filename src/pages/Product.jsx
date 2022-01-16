import React, { useEffect } from 'react'

import ProductView from '../components/product-view/ProductView'
import Section, { SectionBody, SectionTitle } from '../components/section/Section'
import Helmet from '../components/helmet/Helmet'
import Grid from '../components/gird/Grid'
import ProductCard from '../components/product-card/ProductCard'

import productData from '../assets/fake-data/products'

const Product = (props) => {

    const product = productData.getProductBySlug(props.match.params.slug)

    const relatedProducts = productData.getProducts(8)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <Helmet title={product.title}>
            <Section>
                <SectionBody container>
                    <ProductView
                        product={product}
                    />
                </SectionBody>
            </Section>
            <Section>
                <SectionTitle>Sản phẩm bán chạy</SectionTitle>
                <SectionBody container>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            relatedProducts.map((item, i) => (
                                <ProductCard 
                                    key={i}
                                    img01={item.image01}
                                    img02={item.image02}
                                    name={item.title}
                                    price={Number(item.price)}
                                    slug={item.slug}
                                    button
                                    pathname={item.type}
                                />
                            ))
                        }
                    </Grid>
                </SectionBody>
            </Section>
        </Helmet>
    )
}

export default Product
