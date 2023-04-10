import * as ActionType from "../constant/productCategoryConstant";

const INIT_STATE = {
  prodCats: [],
  prodCat: [],
};

const ProductCategoryReduce = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case ActionType.GET_DATA_REQUEST:
      return { ...state };
    case ActionType.GET_DATA_SUCCESS:
      return GetProductCategorySuccessfully(state, action);
    case ActionType.ADD_DATA_REQUEST:
      return { ...state };
    case ActionType.ADD_DATA_SUCCESS:
      return AddProductCategorySuccessfully(state, action);
    case ActionType.FIND_DATA_REQUEST:
      return { ...state };
    case ActionType.FIND_DATA_SUCCESS:
      return FindProductCategorySuccessfully(state, action);
    case ActionType.EDIT_DATA_REQUEST:
      return { ...state };
    case ActionType.EDIT_DATA_SUCCESS:
      return EditProductCategorySuccessfully(state, action);
    case ActionType.DEL_DATA_REQUEST:
      return { ...state };
    case ActionType.DEL_DATA_SUCCESS:
      return DelProductCategorySuccessfully(state, action);
    default:
      return { ...state };
  }
};

const GetProductCategorySuccessfully = (state: any, action: any) => {
  return {
    ...state,
    prodCats: action.payload,
  };
};

const AddProductCategorySuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    prodCats: [...state.prodCats, payload],
  };
};

const FindProductCategorySuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    prodCat: payload,
  };
};

const EditProductCategorySuccessfully = (state: any, action: any) => {
  return {
    ...state,
  };
};

const DelProductCategorySuccessfully = (state: any, action: any) => {
  return {
    ...state,
  };
};
export default ProductCategoryReduce;
