import { takeEvery, all } from "redux-saga/effects";
import * as ActionProductCategory from "../constant/productCategoryConstant";
import * as ActionProduct from "../constant/productConstant";
import * as ActionCustomer from "../constant/customerConstant";
import * as ActionTypeUser from "../constant/userConstant";
import * as ActionOrder from "../constant/orderConstant";
import * as ActionOrderDetail from "../constant/orderDetailConstant";
import {
  handleProductCategory,
  handleAddProductCategory,
  findProductCategory,
  editProductCategory,
  deleteProductCategory,
} from "./productCategorySaga";
import {
  handleProduct,
  handleAddProduct,
  findProduct,
  editProduct,
  deleteProduct,
} from "./productSaga";
import {
  handleCustomer,
  handleAddCustomer,
  findCustomer,
  editCustomer,
  deleteCustomer,
} from "./customerSaga";
import {
  handleOrder,
  handleAddOrder,
  findOrder,
  editOrder,
  deleteOrder,
} from "./orderSaga";
import {
  handleOrderDetail,
  handleAddOrderDetail,
  findOrderDetail,
  editOrderDetail,
  deleteOrderDetail,
} from "./orderDetailSaga";
import { handleSignin, handleSignout, handleSignup } from "./userSaga";
function* watchAll() {
  yield all([
    takeEvery(ActionProductCategory.GET_DATA_REQUEST, handleProductCategory),
    takeEvery(ActionProductCategory.ADD_DATA_REQUEST, handleAddProductCategory),
    takeEvery(ActionProductCategory.FIND_DATA_REQUEST, findProductCategory),
    takeEvery(ActionProductCategory.EDIT_DATA_REQUEST, editProductCategory),
    takeEvery(ActionProductCategory.DEL_DATA_REQUEST, deleteProductCategory),
    takeEvery(ActionProduct.GET_PRODUCT_REQUEST, handleProduct),
    takeEvery(ActionProduct.ADD_PRODUCT_REQUEST, handleAddProduct),
    takeEvery(ActionProduct.FIND_PRODUCT_REQUEST, findProduct),
    takeEvery(ActionProduct.EDIT_PRODUCT_REQUEST, editProduct),
    takeEvery(ActionProduct.DEL_PRODUCT_REQUEST, deleteProduct),
    takeEvery(ActionCustomer.GET_CUSTOMER_REQUEST, handleCustomer),
    takeEvery(ActionCustomer.ADD_CUSTOMER_REQUEST, handleAddCustomer),
    takeEvery(ActionCustomer.FIND_CUSTOMER_REQUEST, findCustomer),
    takeEvery(ActionCustomer.EDIT_CUSTOMER_REQUEST, editCustomer),
    takeEvery(ActionCustomer.DEL_CUSTOMER_REQUEST, deleteCustomer),
    takeEvery(ActionTypeUser.USER_SIGNIN_REQUEST, handleSignin),
    takeEvery(ActionTypeUser.USER_SIGNOUT_REQUEST, handleSignout),
    takeEvery(ActionTypeUser.USER_SIGNUP_REQUEST, handleSignup),
    takeEvery(ActionOrder.GET_ORDER_REQUEST, handleOrder),
    takeEvery(ActionOrder.ADD_ORDER_REQUEST, handleAddOrder),
    takeEvery(ActionOrder.FIND_ORDER_REQUEST, findOrder),
    takeEvery(ActionOrder.EDIT_ORDER_REQUEST, editOrder),
    takeEvery(ActionOrder.DEL_ORDER_REQUEST, deleteOrder),
    takeEvery(ActionOrderDetail.GET_ORDER_DETAIL_REQUEST, handleOrderDetail),
    takeEvery(ActionOrderDetail.ADD_ORDER_DETAIL_REQUEST, handleAddOrderDetail),
    takeEvery(ActionOrderDetail.FIND_ORDER_DETAIL_REQUEST, findOrderDetail),
    takeEvery(ActionOrderDetail.EDIT_ORDER_DETAIL_REQUEST, editOrderDetail),
    takeEvery(ActionOrderDetail.DEL_ORDER_DETAIL_REQUEST, deleteOrderDetail),
  ]);
}

export default watchAll;
