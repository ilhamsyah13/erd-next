import * as ActionProductCategory from "../constant/productCategoryConstant";

export const GetProductCategoryRequest = () => ({
  type: ActionProductCategory.GET_DATA_REQUEST,
});

export const GetProductCategorySuccess = (payload: any) => ({
  type: ActionProductCategory.GET_DATA_SUCCESS,
  payload,
});

export const GetProductCategoryFailed = (payload: any) => ({
  type: ActionProductCategory.GET_DATA_FAILED,
  payload,
});

export const AddProductCategoryRequest = (payload: any) => ({
  type: ActionProductCategory.ADD_DATA_REQUEST,
  payload,
});

export const AddProductCategorySuccess = (payload: any) => ({
  type: ActionProductCategory.ADD_DATA_SUCCESS,
  payload,
});

export const AddProductCategoryFailed = (payload: any) => ({
  type: ActionProductCategory.ADD_DATA_FAILED,
  payload,
});

export const EditProductCategoryRequest = (payload: any) => ({
  type: ActionProductCategory.EDIT_DATA_REQUEST,
  payload,
});

export const EditProductCategorySuccess = (payload: any) => ({
  type: ActionProductCategory.EDIT_DATA_SUCCESS,
  payload,
});

export const EditProductCategoryFailed = (payload: any) => ({
  type: ActionProductCategory.EDIT_DATA_FAILED,
  payload,
});

export const DelProductCategoryRequest = (payload: any) => ({
  type: ActionProductCategory.DEL_DATA_REQUEST,
  payload,
});

export const DelProductCategorySuccess = (payload: any) => ({
  type: ActionProductCategory.DEL_DATA_SUCCESS,
  payload,
});

export const DelProductCategoryFailed = (payload: any) => ({
  type: ActionProductCategory.DEL_DATA_FAILED,
  payload,
});

export const FindProductCategoryRequest = (payload: any) => ({
  type: ActionProductCategory.FIND_DATA_REQUEST,
  payload,
});

export const FindProductCategorySuccess = (payload: any) => ({
  type: ActionProductCategory.FIND_DATA_SUCCESS,
  payload,
});

export const FindProductCategoryFailed = (payload: any) => ({
  type: ActionProductCategory.FIND_DATA_FAILED,
  payload,
});
