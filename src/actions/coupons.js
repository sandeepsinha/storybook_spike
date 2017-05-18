import fetch from 'isomorphic-fetch';

export function fetchCoupons(){
  return (dispatch) => {
    return fetch('http://localhost:5000/api/coupons')
        .then((response) => response.json())
        .then((jsonResponse) =>
        {
           dispatch({
           type: "FETCH_COUPONS_FULFILLED",
           payload: jsonResponse
         })
        }
       )
      .catch((error) => dispatch({type: "FETCH_COUPONS_REJECTED", payload: error}))
    }

}