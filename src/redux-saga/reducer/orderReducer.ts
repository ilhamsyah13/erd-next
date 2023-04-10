import * as ActionType from "../constant/orderConstant";

const INIT_STATE = {
  orders: [],
  order: [],
};

const OrderReduce = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case ActionType.GET_ORDER_REQUEST:
      return { ...state };
    case ActionType.GET_ORDER_SUCCESS:
      return GetOrderSuccessfully(state, action);
    case ActionType.ADD_ORDER_REQUEST:
      return { ...state };
    case ActionType.ADD_ORDER_SUCCESS:
      return AddOrderSuccessfully(state, action);
    case ActionType.FIND_ORDER_REQUEST:
      return { ...state };
    case ActionType.FIND_ORDER_SUCCESS:
      return FindOrderSuccessfully(state, action);
    case ActionType.EDIT_ORDER_REQUEST:
      return { ...state };
    case ActionType.EDIT_ORDER_SUCCESS:
      return EditOrderSuccessfully(state, action);
    case ActionType.DEL_ORDER_REQUEST:
      return { ...state };
    case ActionType.DEL_ORDER_SUCCESS:
      return DelOrderSuccessfully(state, action);
    default:
      return { ...state };
  }
};

const GetOrderSuccessfully = (state: any, action: any) => {
  return {
    ...state,
    orders: action.payload,
  };
};

const AddOrderSuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    orders: [...state.orders, payload],
  };
};

const FindOrderSuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    order: payload,
  };
};

const EditOrderSuccessfully = (state: any, action: any) => {
  return {
    ...state,
  };
};

const DelOrderSuccessfully = (state: any, action: any) => {
  return {
    ...state,
  };
};
export default OrderReduce;
