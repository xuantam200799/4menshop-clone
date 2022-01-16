import React from 'react'

import Helmet from '../components/helmet/Helmet';
import HeroSlider from '../components/hero-slider/HeroSlider';
import Section, { SectionBody, SectionTitle } from '../components/section/Section';
import Grid from '../components/gird/Grid';
import ProductCard from '../components/product-card/ProductCard';
import Category from '../components/category/Category';
import ProductSlider from '../components/product-slider/ProductSlider';
import PolicySection from '../components/policy-section/PolicySection';

import productData from '../assets/fake-data/products'


const Home = () => {

    const topSellingProducts = productData.getProducts(12);

    return (
        <Helmet title="Thương hiệu thời trang nam giá rẻ">
            <HeroSlider />
            {/* new trend section */}
            <Section>
                <SectionTitle>
                    THỜI TRANG HOT NHẤT
                </SectionTitle>
                <SectionBody container>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            productData.getProducts(8).map((item, i) => (
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
                </SectionBody>
            </Section>
            {/* end new trend section */}
            {/* categories section */}
            <Section>
                <SectionBody>
                    <Category />
                </SectionBody>
            </Section>
            {/* end categories section */}
            {/* new model section */}
            <Section>
                <SectionTitle>
                    THỜI TRANG MỚI NHẤT
                </SectionTitle>
                <SectionBody container>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            productData.getProducts(8).map((item, i) => (
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
                </SectionBody>
            </Section>
            {/* end new model section */}
            {/* top selling section */}
            <Section>
                <SectionTitle>
                    THỜI TRANG BÁN CHẠY
                </SectionTitle>
                <SectionBody container>
                    <ProductSlider 
                        data={topSellingProducts}
                        spaceBetween={20}
                        slidesPerView={4}
                    />
                </SectionBody>
            </Section>
            {/* end top selling section */}
            {/* policy section */}
            <PolicySection />
            {/* end policy section */}
        </Helmet>
    )
}

export default Home
