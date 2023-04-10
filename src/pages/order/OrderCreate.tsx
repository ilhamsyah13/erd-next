import React from "react";
import { useDispatch } from "react-redux";
import { AddOrderRequest } from "../../redux-saga/action/orderAction";
import { useFormik } from "formik";

export default function OrderCreate(props: any) {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      user: "",
      totalproduct: "",
      totalprice: "",
    },
    onSubmit: async (values) => {
      dispatch(AddOrderRequest(values));
      props.setDisplay(false);
      window.alert("Data Successfully Insert");
      props.setRefresh(true);
    },
  });
  return (
    <div className="bg-grey-500 ">
      <div className="flex items-center justify-center h-screen ">
        <div className="w-96 mx-auto bg-white rounded shadow border-slate-900">
          <div className="mx-16 py-4 px-8 text-black text-xl font-bold border-b border-grey-500 text-center">
            <h1>Order</h1>
          </div>
          <form
            name="student_application"
            id="student_application"
            onSubmit={formik.handleSubmit}
          >
            <div className="py-4 px-8">
              <div className="mb-4">
                <label className="block text-black text-sm font-bold mb-2">
                  User Id
                </label>
                <input
                  className=" border rounded w-full py-2 px-3 text-grey-darker border-slate-900"
                  type="text"
                  name="user"
                  id="user"
                  onChange={formik.handleChange}
                  value={formik.values.user}
                  placeholder="User Id"
                />
              </div>

              <div className="mb-4">
                <label className="block text-black text-sm font-bold mb-2">
                  Total Product
                </label>
                <input
                  className=" border rounded w-full py-2 px-3 text-white border-slate-900"
                  type="text"
                  name="totalproduct"
                  id="totalproduct"
                  onChange={formik.handleChange}
                  value={formik.values.totalproduct}
                  placeholder="Total Product"
                />
              </div>
              <div className="mb-4">
                <label className="block text-black text-sm font-bold mb-2">
                  Total Price
                </label>
                <input
                  className=" border rounded w-full py-2 px-3 text-white border-slate-900"
                  type="text"
                  name="totalprice"
                  id="totalprice"
                  onChange={formik.handleChange}
                  value={formik.values.totalprice}
                  placeholder="Total Price"
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
        </div>
      </div>
    </div>
  );
}
