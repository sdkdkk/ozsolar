import { combineReducers } from "redux";
import getCustomerReviewReducer from "../Redux/getCustomerReviewSlice";

const reducer = combineReducers({
    getCustomerReview: getCustomerReviewReducer,
});

export default reducer;
