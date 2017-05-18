import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from "redux-thunk"
import promise from "redux-promise-middleware";
import Coupon from '../coupon';

import CouponList from '../couponList';
import '../App.css';
import reducer from '../reducers/couponReducer';

const middleware = applyMiddleware(promise(), thunk);

const store = createStore(reducer, middleware);

storiesOf('Coupon', module)
.addDecorator((getStory) => (<Provider store={store}>
                                  { getStory() }
                              </Provider>
))
  .add('to CouponList', () => (
    <CouponList/>
  ))  