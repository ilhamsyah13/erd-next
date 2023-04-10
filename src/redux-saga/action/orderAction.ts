import * as ActionOrder from "../constant/orderConstant";

export const GetOrderRequest = () => ({
  type: ActionOrder.GET_ORDER_REQUEST,
});

export const GetOrderSuccess = (payload: any) => ({
  type: ActionOrder.GET_ORDER_SUCCESS,
  payload,
});

export const GetOrderFailed = (payload: any) => ({
  type: ActionOrder.GET_ORDER_FAILED,
  payload,
});

export const AddOrderRequest = (payload: any) => ({
  type: ActionOrder.ADD_ORDER_REQUEST,
  payload,
});

export const AddOrderSuccess = (payload: any) => ({
  type: ActionOrder.ADD_ORDER_SUCCESS,
  payload,
});

export const AddOrderFailed = (payload: any) => ({
  type: ActionOrder.ADD_ORDER_FAILED,
  payload,
});

export const EditOrderRequest = (payload: any) => ({
  type: ActionOrder.EDIT_ORDER_REQUEST,
  payload,
});

export const EditOrderSuccess = (payload: any) => ({
  type: ActionOrder.EDIT_ORDER_SUCCESS,
  payload,
});

export const EditOrderFailed = (payload: any) => ({
  type: ActionOrder.EDIT_ORDER_FAILED,
  payload,
});

export const DelOrderRequest = (payload: any) => ({
  type: ActionOrder.DEL_ORDER_REQUEST,
  payload,
});

export const DelOrderSuccess = (payload: any) => ({
  type: ActionOrder.DEL_ORDER_SUCCESS,
  payload,
});

export const DelOrderFailed = (payload: any) => ({
  type: ActionOrder.DEL_ORDER_FAILED,
  payload,
});

export const FindOrderRequest = (payload: any) => ({
  type: ActionOrder.FIND_ORDER_REQUEST,
  payload,
});

export const FindOrderSuccess = (payload: any) => ({
  type: ActionOrder.FIND_ORDER_SUCCESS,
  payload,
});

export const FindOrderFailed = (payload: any) => ({
  type: ActionOrder.FIND_ORDER_FAILED,
  payload,
});
