import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Home from '../pages/Home'
import Catalog from '../pages/Catalog/Catalog'
import Product from '../pages/Product'
import Cart from '../pages/Cart'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/cart' component={Cart} />
            <Route path='/search'/>
            <Route path='/new'/>
            <Route path='/sale'/>
            <Route path='/:catalog/:slug' component={Product} />
            <Route path='/:catalog' component={Catalog} />
        </Switch>
    )
}

export default Routes
