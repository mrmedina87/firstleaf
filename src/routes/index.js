import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Checkout from '../components/checkout';
import Landing from '../components/landing';

const getRoutes = () => {
  return (
    <div className="viewport">
      <Switch>
        <Route 
          path="/" exact 
          component={Landing} />
        <Route 
          path="/checkout" 
          component={Checkout} />
      </Switch>
    </div>
  );
};

export default getRoutes;