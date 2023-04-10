import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddOrderDetailRequest } from "../../redux-saga/action/orderDetailAction";
import { GetProductRequest } from "../../redux-saga/action/productAction";
import {
  GetOrderRequest,
  EditOrderRequest,
} from "../../redux-saga/action/orderAction";
import { useFormik, FormikProvider } from "formik";

export default function OrderDetailCreate(props: any) {
  const { products } = useSelector((state: any) => state.productState);
  const { orders } = useSelector((state: any) => state.orderState);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      order: "",
      product: "",
      quantity: "",
    },
    onSubmit: async (values: any) => {
      const productData = products.find((item: any) => {
        return item.id === parseInt(values.product);
      });
      const orderData = orders.find((item: any) => {
        return item.id === parseInt(values.order);
      });

      const payload = {
        id: values.order,
        totalprice:
          parseInt(orderData.totalprice) + productData.price * values.quantity,
        totalproduct: orderData.totalproduct + 1,
      };

      dispatch(AddOrderDetailRequest(values));
      dispatch(EditOrderRequest(payload));
      props.setDisplay(false);
      window.alert("Data Successfully Insert");
      props.setRefresh(true);
    },
  });

  useEffect(() => {
    dispatch(GetProductRequest());
    dispatch(GetOrderRequest());
  }, [dispatch]);
  return (
    <div className="bg-grey-500 ">
      <div className="flex items-center justify-center h-screen ">
        <div className="w-96 mx-auto bg-white rounded shadow border-slate-900">
          <div className="mx-16 py-4 px-8 text-black text-xl font-bold border-b border-grey-500 text-center">
            <h1>Order Detail</h1>
          </div>
          <FormikProvider value={formik}>
            <form
              name="student_application"
              id="student_application"
              onSubmit={formik.handleSubmit}
            >
              <div className="py-4 px-8">
                <div className="mb-4">
                  <label className="block text-black text-sm font-bold mb-2">
                    Order
                  </label>
                  <select
                    name="order"
                    id="order"
                    onChange={formik.handleChange}
                    value={formik.values.order}
                    onBlur={formik.handleBlur}
                    className=" border rounded w-full py-2 px-3 text-white border-slate-900"
                  >
                    <option value="" selected disabled hidden>
                      Choose Order
                    </option>
                    {orders.map((item: any) => (
                      <option key={item.id} value={item.id}>
                        {item.id}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-black text-sm font-bold mb-2">
                    Product
                  </label>
                  <select
                    name="product"
                    id="product"
                    onChange={formik.handleChange}
                    value={formik.values.product}
                    onBlur={formik.handleBlur}
                    className=" border rounded w-full py-2 px-3 text-white border-slate-900"
                  >
                    <option value="" selected disabled hidden>
                      Choose Product
                    </option>
                    {products.map((item: any) => (
                      <option key={item.id} value={item.id}>
                        {item.name} ({item.id})
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-black text-sm font-bold mb-2">
                    Quantity
                  </label>
                  <input
                    className=" border rounded w-full py-2 px-3 text-white border-slate-900"
                    type="text"
                    name="quantity"
                    id="quantity"
                    onChange={formik.handleChange}
                    value={formik.values.quantity}
                    placeholder="Quantity"
                  />
                </div>
                <div className="mb-4">
                  <button
                    className="w-full mb-3 rounded-full py-1 px-24 bg-transparent text-slate-900 font-semibold border border-slate-900 hover:bg-slate-900 hover:text-white hover:border-transparent "
                    type="submit"
                  >
                    Save
                  </button>
                  <button
                    className="w-full mb-3 rounded-full py-1 px-24 bg-slate-900 text-white font-semibold border border-slate-900 hover:bg-red-800 hover:text-white hover:border-red-800"
                    onClick={() => props.setDisplay(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </FormikProvider>
        </div>
      </div>
    </div>
  );
}
