import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AddCustomerRequest } from "../../redux-saga/action/customerAction";
import { AddOrderRequest } from "../../redux-saga/action/orderAction";
import { useFormik } from "formik";
import { useRouter } from "next/router";

export default function ProfileCreate(props: any) {
  const dispatch = useDispatch();
  const router = useRouter();
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      firstname: "",
      lastname: "",
      user: props.id,
    },
    onSubmit: async (values) => {
      const payload = {
        user: values.user,
        totalproduct: 0,
        totalprice: 0,
      };
      dispatch(AddCustomerRequest(values));
      dispatch(AddOrderRequest(payload));
      window.alert("Data Successfully Insert");
      router.push("/customer");
    },
  });

  const onCancel = () => {
    router.push("/customer");
  };

  return (
    <div className="bg-grey-500 ">
      <div className="flex items-center justify-center h-screen ">
        <div className="w-96 mx-auto bg-white rounded shadow border-slate-900">
          <div className="text-center mx-16 py-4 px-8 text-black text-xl font-bold border-b border-grey-500">
            <h1>Customer</h1>
          </div>

          <form
            name="student_application"
            id="student_application"
            onSubmit={formik.handleSubmit}
          >
            <div className="py-4 px-8">
              <div className="mb-4">
                <label className="block text-black text-sm font-bold mb-2">
                  First Name
                </label>
                <input
                  className=" border rounded w-full py-2 px-3 text-grey-darker border-slate-900"
                  type="text"
                  name="firstname"
                  id="firstname"
                  onChange={formik.handleChange}
                  value={formik.values.firstname}
                  placeholder="First Name"
                />
              </div>

              <div className="mb-4">
                <label className="block text-black text-sm font-bold mb-2">
                  Last Name
                </label>
                <input
                  className=" border rounded w-full py-2 px-3 text-white border-slate-900"
                  type="text"
                  name="lastname"
                  id="lastname"
                  onChange={formik.handleChange}
                  value={formik.values.lastname}
                  placeholder="Last Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-black text-sm font-bold mb-2">
                  User Id
                </label>
                <input
                  className=" border rounded w-full py-2 px-3 text-white border-slate-900"
                  type="text"
                  name="user"
                  id="user"
                  onChange={formik.handleChange}
                  value={formik.values.user}
                  placeholder="User Id"
                  disabled
                />
              </div>

              <div className="mb-4">
                <button
                  className="w-full mb-3 rounded-full py-1 px-24 bg-transparent text-slate-900 font-semibold border border-slate-900 hover:bg-slate-900 hover:text-white hover:border-transparent "
                  type="submit"
                >
                  Save
                </button>
                <a
                  href="#"
                  onClick={() => onCancel()}
                  className="block text-center w-full mb-3 rounded-full py-1 px-24 bg-slate-900 text-white font-semibold border border-slate-900 hover:bg-red-800 hover:text-white hover:border-red-800"
                >
                  Cancel
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
