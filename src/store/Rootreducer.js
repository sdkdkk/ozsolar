import { combineReducers } from "redux";
import getCustomerReviewReducer from "../Redux/getCustomerReviewSlice";
import getPackagesReducer from "../Redux/getPackagesSlice";

const reducer = combineReducers({
  getCustomerReview: getCustomerReviewReducer,
  getPackages: getPackagesReducer,
});

export default reducer;
