import { combineReducers } from "redux";
import ProductCategoryReduce from "./productCategoryReducer";
import ProductReduce from "./productReducer";
import CustomerReduce from "./customerReducer";
import UserReducer from "./userReducer";
import OrderReduce from "./orderReducer";
import OrderDetailReduce from "./orderDetailReducer";

const rootReducer = combineReducers({
  productCategoryState: ProductCategoryReduce,
  productState: ProductReduce,
  customerState: CustomerReduce,
  userState: UserReducer,
  orderState: OrderReduce,
  orderDetailState: OrderDetailReduce,
});

export default rootReducer;
