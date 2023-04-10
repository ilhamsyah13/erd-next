import { call, put } from "redux-saga/effects";
import Product from "../../api/product";
import {
  GetProductSuccess,
  GetProductFailed,
  AddProductSuccess,
  AddProductFailed,
  FindProductSuccess,
  FindProductFailed,
  EditProductSuccess,
  EditProductFailed,
  DelProductSuccess,
  DelProductFailed,
} from "../action/productAction";

function* handleProduct(): any {
  try {
    const result = yield call(Product.list);
    yield put(GetProductSuccess(result));
  } catch (error) {
    yield put(GetProductFailed(error));
  }
}

function* handleAddProduct(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Product.create, payload);
    yield put(AddProductSuccess(result.data));
  } catch (error) {
    yield put(AddProductFailed(error));
  }
}

function* findProduct(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Product.findOne, payload);
    yield put(FindProductSuccess(result));
  } catch (error) {
    yield put(FindProductFailed(error));
  }
}

function* editProduct(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Product.update, payload);
    yield put(EditProductSuccess(result.data));
  } catch (error) {
    yield put(EditProductFailed(error));
  }
}

function* deleteProduct(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Product.deleted, payload);
    yield put(DelProductSuccess(result.data));
  } catch (error) {
    yield put(DelProductFailed(error));
  }
}

export {
  handleProduct,
  handleAddProduct,
  findProduct,
  editProduct,
  deleteProduct,
};
