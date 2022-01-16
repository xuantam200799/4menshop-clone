import React from 'react'

import { BrowserRouter, Route } from 'react-router-dom'

import Header from '../header/Header'
import Footer from '../footer/Footer'
import ProductViewModal from '../product-view-modal/ProductViewModal'

import Routes from '../../routes/Routes'

const Layout = () => {
    return (
        <BrowserRouter>
            <Route render={props => (
                <div>
                    <Header {...props} />
                    <div className="container-fluid">
                        <div className="main">
                            <Routes/>
                        </div>
                    </div>
                    <Footer />
                    <ProductViewModal />
                </div>
            )} />
        </BrowserRouter>
    )
}

export default Layout
