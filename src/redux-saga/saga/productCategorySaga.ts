import { call, put } from "redux-saga/effects";
import ProductCategory from "../../api/productCategory";
import {
  GetProductCategorySuccess,
  GetProductCategoryFailed,
  AddProductCategorySuccess,
  AddProductCategoryFailed,
  FindProductCategorySuccess,
  FindProductCategoryFailed,
  EditProductCategorySuccess,
  EditProductCategoryFailed,
  DelProductCategorySuccess,
  DelProductCategoryFailed,
} from "../action/productCategoryAction";

function* handleProductCategory(): any {
  try {
    const result = yield call(ProductCategory.list);
    yield put(GetProductCategorySuccess(result));
  } catch (error) {
    yield put(GetProductCategoryFailed(error));
  }
}

function* handleAddProductCategory(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(ProductCategory.create, payload);
    yield put(AddProductCategorySuccess(result.data));
  } catch (error) {
    yield put(AddProductCategoryFailed(error));
  }
}

function* findProductCategory(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(ProductCategory.findOne, payload);
    yield put(FindProductCategorySuccess(result));
  } catch (error) {
    yield put(FindProductCategoryFailed(error));
  }
}

function* editProductCategory(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(ProductCategory.update, payload);
    yield put(EditProductCategorySuccess(result.data));
  } catch (error) {
    yield put(EditProductCategoryFailed(error));
  }
}

function* deleteProductCategory(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(ProductCategory.deleted, payload);
    yield put(DelProductCategorySuccess(result.data));
  } catch (error) {
    yield put(DelProductCategoryFailed(error));
  }
}

export {
  handleProductCategory,
  handleAddProductCategory,
  findProductCategory,
  editProductCategory,
  deleteProductCategory,
};
