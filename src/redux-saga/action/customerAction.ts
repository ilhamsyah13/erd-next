import * as ActionCustomer from "../constant/customerConstant";

export const GetCustomerRequest = () => ({
  type: ActionCustomer.GET_CUSTOMER_REQUEST,
});

export const GetCustomerSuccess = (payload: any) => ({
  type: ActionCustomer.GET_CUSTOMER_SUCCESS,
  payload,
});

export const GetCustomerFailed = (payload: any) => ({
  type: ActionCustomer.GET_CUSTOMER_FAILED,
  payload,
});

export const AddCustomerRequest = (payload: any) => ({
  type: ActionCustomer.ADD_CUSTOMER_REQUEST,
  payload,
});

export const AddCustomerSuccess = (payload: any) => ({
  type: ActionCustomer.ADD_CUSTOMER_SUCCESS,
  payload,
});

export const AddCustomerFailed = (payload: any) => ({
  type: ActionCustomer.ADD_CUSTOMER_FAILED,
  payload,
});

export const EditCustomerRequest = (payload: any) => ({
  type: ActionCustomer.EDIT_CUSTOMER_REQUEST,
  payload,
});

export const EditCustomerSuccess = (payload: any) => ({
  type: ActionCustomer.EDIT_CUSTOMER_SUCCESS,
  payload,
});

export const EditCustomerFailed = (payload: any) => ({
  type: ActionCustomer.EDIT_CUSTOMER_FAILED,
  payload,
});

export const DelCustomerRequest = (payload: any) => ({
  type: ActionCustomer.DEL_CUSTOMER_REQUEST,
  payload,
});

export const DelCustomerSuccess = (payload: any) => ({
  type: ActionCustomer.DEL_CUSTOMER_SUCCESS,
  payload,
});

export const DelCustomerFailed = (payload: any) => ({
  type: ActionCustomer.DEL_CUSTOMER_FAILED,
  payload,
});

export const FindCustomerRequest = (payload: any) => ({
  type: ActionCustomer.FIND_CUSTOMER_REQUEST,
  payload,
});

export const FindCustomerSuccess = (payload: any) => ({
  type: ActionCustomer.FIND_CUSTOMER_SUCCESS,
  payload,
});

export const FindCustomerFailed = (payload: any) => ({
  type: ActionCustomer.FIND_CUSTOMER_FAILED,
  payload,
});
