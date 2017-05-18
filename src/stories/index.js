import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Coupon from '../coupon';
import CouponList from '../couponList';
import '../App.css';

const coupon = {
	"title": "title 1",
	"description": "description 1"
}

const coupons = [{
	"title": "title 1",
	"description": "description 1"
},
{
	"title": "title 2",
	"description": "description 2"
},
{
	"title": "title 3",
	"description": "description 3"
},
{
	"title": "title 4",
	"description": "description 4"
},
{
	"title": "title 5",
	"description": "description 5"
},
{
	"title": "title 6",
	"description": "description 6"
},
{
	"title": "title 7",
	"description": "description 7"
},
{
	"title": "title 8",
	"description": "description 8"
},
{
	"title": "title 9",
	"description": "description 9"
},
{
	"title": "title 10",
	"description": "description 10"
}
]

storiesOf('Coupon', module)
  .add('to Coupon', () => (
    <Coupon coupon={coupon}/>
  ));  

storiesOf('CouponList', module)
  .add('to CouponList', () => (
    <CouponList couponList={coupons}/>
  ));  