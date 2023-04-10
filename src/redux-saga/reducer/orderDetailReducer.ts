import * as ActionType from "../constant/orderDetailConstant";

const INIT_STATE = {
  orderDetails: [],
  orderDetail: [],
};

const OrderDetailReduce = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case ActionType.GET_ORDER_DETAIL_REQUEST:
      return { ...state };
    case ActionType.GET_ORDER_DETAIL_SUCCESS:
      return GetOrderDetailSuccessfully(state, action);
    case ActionType.ADD_ORDER_DETAIL_REQUEST:
      return { ...state };
    case ActionType.ADD_ORDER_DETAIL_SUCCESS:
      return AddOrderDetailSuccessfully(state, action);
    case ActionType.FIND_ORDER_DETAIL_REQUEST:
      return { ...state };
    case ActionType.FIND_ORDER_DETAIL_SUCCESS:
      return FindOrderDetailSuccessfully(state, action);
    case ActionType.EDIT_ORDER_DETAIL_REQUEST:
      return { ...state };
    case ActionType.EDIT_ORDER_DETAIL_SUCCESS:
      return EditOrderDetailSuccessfully(state, action);
    case ActionType.DEL_ORDER_DETAIL_REQUEST:
      return { ...state };
    case ActionType.DEL_ORDER_DETAIL_SUCCESS:
      return DelOrderDetailSuccessfully(state, action);
    default:
      return { ...state };
  }
};

const GetOrderDetailSuccessfully = (state: any, action: any) => {
  return {
    ...state,
    orderDetails: action.payload,
  };
};

const AddOrderDetailSuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    orderDetails: [...state.orderDetails, payload],
  };
};

const FindOrderDetailSuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    orderDetail: payload,
  };
};

const EditOrderDetailSuccessfully = (state: any, action: any) => {
  return {
    ...state,
  };
};

const DelOrderDetailSuccessfully = (state: any, action: any) => {
  return {
    ...state,
  };
};
export default OrderDetailReduce;
