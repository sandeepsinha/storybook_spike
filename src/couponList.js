import React from 'react';
import { fetchCoupons } from './actions/coupons'
import { connect } from 'react-redux'

class CouponList extends React.Component {

  componentWillMount(){
    this.props.dispatch(fetchCoupons())

  }
  
  render() { console.log('aaa **** '+this.props.coupons);
  	let couponList = this.props.coupons;
    let coupons = [];

  	if(!couponList){
  		couponList = "no coupons"
  	} else {
      couponList.map((coupon) => {
        coupons.push(<div className="boxed">
        <p> {coupon.title}</p>
        <p> {coupon.description}</p>
    </div>
    )  
      });
    }

      return(
      <div>
      	{coupons}
        </div>
      	);
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return state;
}

export default connect(mapStateToProps)(CouponList);