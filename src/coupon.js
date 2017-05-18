import React from 'react';

class Coupon extends React.Component {
  
  render() {
  	let coupon = this.props.coupon;
  	if(!coupon){
  		coupon = "no coupon"
  	}

      return(
      	<div className="boxed">
  			<p> {coupon.title}</p>
  			<p> {coupon.description}</p>
		</div>
      	);
  }
}

export default Coupon;