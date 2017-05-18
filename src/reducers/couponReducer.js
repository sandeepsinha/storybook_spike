export default function reducer(state, action) {
	switch(action.type) {
		case "FETCH_COUPONS_FULFILLED": {
        return Object.assign({},state, {
          coupons: action.payload
        });
      }
	}

	return Object.assign({},state, {
          coupons: []
        });
}