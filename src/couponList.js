import React from 'react';

class CouponList extends React.Component {
  
  render() {
  	let couponList = this.props.couponList;
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

export default CouponList;