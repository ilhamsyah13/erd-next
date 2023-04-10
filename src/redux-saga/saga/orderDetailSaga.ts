import { call, put } from "redux-saga/effects";
import OrderDetail from "../../api/orderDetail";
import {
  GetOrderDetailSuccess,
  GetOrderDetailFailed,
  AddOrderDetailSuccess,
  AddOrderDetailFailed,
  FindOrderDetailSuccess,
  FindOrderDetailFailed,
  EditOrderDetailSuccess,
  EditOrderDetailFailed,
  DelOrderDetailSuccess,
  DelOrderDetailFailed,
} from "../action/orderDetailAction";

function* handleOrderDetail(): any {
  try {
    const result = yield call(OrderDetail.list);
    yield put(GetOrderDetailSuccess(result));
  } catch (error) {
    yield put(GetOrderDetailFailed(error));
  }
}

function* handleAddOrderDetail(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(OrderDetail.create, payload);
    yield put(AddOrderDetailSuccess(result.data));
  } catch (error) {
    yield put(AddOrderDetailFailed(error));
  }
}

function* findOrderDetail(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(OrderDetail.findOne, payload);
    yield put(FindOrderDetailSuccess(result));
  } catch (error) {
    yield put(FindOrderDetailFailed(error));
  }
}

function* editOrderDetail(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(OrderDetail.update, payload);
    yield put(EditOrderDetailSuccess(result.data));
  } catch (error) {
    yield put(EditOrderDetailFailed(error));
  }
}

function* deleteOrderDetail(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(OrderDetail.deleted, payload);
    yield put(DelOrderDetailSuccess(result.data));
  } catch (error) {
    yield put(DelOrderDetailFailed(error));
  }
}

export {
  handleOrderDetail,
  handleAddOrderDetail,
  findOrderDetail,
  editOrderDetail,
  deleteOrderDetail,
};
