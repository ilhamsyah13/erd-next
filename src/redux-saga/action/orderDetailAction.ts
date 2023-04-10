import * as ActionOrderDetail from "../constant/orderDetailConstant";

export const GetOrderDetailRequest = () => ({
  type: ActionOrderDetail.GET_ORDER_DETAIL_REQUEST,
});

export const GetOrderDetailSuccess = (payload: any) => ({
  type: ActionOrderDetail.GET_ORDER_DETAIL_SUCCESS,
  payload,
});

export const GetOrderDetailFailed = (payload: any) => ({
  type: ActionOrderDetail.GET_ORDER_DETAIL_FAILED,
  payload,
});

export const AddOrderDetailRequest = (payload: any) => ({
  type: ActionOrderDetail.ADD_ORDER_DETAIL_REQUEST,
  payload,
});

export const AddOrderDetailSuccess = (payload: any) => ({
  type: ActionOrderDetail.ADD_ORDER_DETAIL_SUCCESS,
  payload,
});

export const AddOrderDetailFailed = (payload: any) => ({
  type: ActionOrderDetail.ADD_ORDER_DETAIL_FAILED,
  payload,
});

export const EditOrderDetailRequest = (payload: any) => ({
  type: ActionOrderDetail.EDIT_ORDER_DETAIL_REQUEST,
  payload,
});

export const EditOrderDetailSuccess = (payload: any) => ({
  type: ActionOrderDetail.EDIT_ORDER_DETAIL_SUCCESS,
  payload,
});

export const EditOrderDetailFailed = (payload: any) => ({
  type: ActionOrderDetail.EDIT_ORDER_DETAIL_FAILED,
  payload,
});

export const DelOrderDetailRequest = (payload: any) => ({
  type: ActionOrderDetail.DEL_ORDER_DETAIL_REQUEST,
  payload,
});

export const DelOrderDetailSuccess = (payload: any) => ({
  type: ActionOrderDetail.DEL_ORDER_DETAIL_SUCCESS,
  payload,
});

export const DelOrderDetailFailed = (payload: any) => ({
  type: ActionOrderDetail.DEL_ORDER_DETAIL_FAILED,
  payload,
});

export const FindOrderDetailRequest = (payload: any) => ({
  type: ActionOrderDetail.FIND_ORDER_DETAIL_REQUEST,
  payload,
});

export const FindOrderDetailSuccess = (payload: any) => ({
  type: ActionOrderDetail.FIND_ORDER_DETAIL_SUCCESS,
  payload,
});

export const FindOrderDetailFailed = (payload: any) => ({
  type: ActionOrderDetail.FIND_ORDER_DETAIL_FAILED,
  payload,
});
