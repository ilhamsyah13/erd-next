import * as ActionProduct from "../constant/productConstant";

export const GetProductRequest = () => ({
  type: ActionProduct.GET_PRODUCT_REQUEST,
});

export const GetProductSuccess = (payload: any) => ({
  type: ActionProduct.GET_PRODUCT_SUCCESS,
  payload,
});

export const GetProductFailed = (payload: any) => ({
  type: ActionProduct.GET_PRODUCT_FAILED,
  payload,
});

export const AddProductRequest = (payload: any) => ({
  type: ActionProduct.ADD_PRODUCT_REQUEST,
  payload,
});

export const AddProductSuccess = (payload: any) => ({
  type: ActionProduct.ADD_PRODUCT_SUCCESS,
  payload,
});

export const AddProductFailed = (payload: any) => ({
  type: ActionProduct.ADD_PRODUCT_FAILED,
  payload,
});

export const EditProductRequest = (payload: any) => ({
  type: ActionProduct.EDIT_PRODUCT_REQUEST,
  payload,
});

export const EditProductSuccess = (payload: any) => ({
  type: ActionProduct.EDIT_PRODUCT_SUCCESS,
  payload,
});

export const EditProductFailed = (payload: any) => ({
  type: ActionProduct.EDIT_PRODUCT_FAILED,
  payload,
});

export const DelProductRequest = (payload: any) => ({
  type: ActionProduct.DEL_PRODUCT_REQUEST,
  payload,
});

export const DelProductSuccess = (payload: any) => ({
  type: ActionProduct.DEL_PRODUCT_SUCCESS,
  payload,
});

export const DelProductFailed = (payload: any) => ({
  type: ActionProduct.DEL_PRODUCT_FAILED,
  payload,
});

export const FindProductRequest = (payload: any) => ({
  type: ActionProduct.FIND_PRODUCT_REQUEST,
  payload,
});

export const FindProductSuccess = (payload: any) => ({
  type: ActionProduct.FIND_PRODUCT_SUCCESS,
  payload,
});

export const FindProductFailed = (payload: any) => ({
  type: ActionProduct.FIND_PRODUCT_FAILED,
  payload,
});
