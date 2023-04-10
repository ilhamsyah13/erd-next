import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddProductRequest } from "../../redux-saga/action/productAction";
import { GetProductCategoryRequest } from "../../redux-saga/action/productCategoryAction";
import { useFormik, FormikProvider } from "formik";

export default function ProductCreate(props: any) {
  const { prodCats } = useSelector((state: any) => state.productCategoryState);
  const [previewImg, setPreviewImg] = useState<any>();
  const [upload, setUpload] = useState(false);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      category: "",
      price: "",
      file: "",
    },
    onSubmit: async (values) => {
      let payload = new FormData();
      payload.append("name", values.name);
      payload.append("description", values.description);
      payload.append("category", values.category);
      payload.append("price", values.price);
      payload.append("file", values.file);

      dispatch(AddProductRequest(payload));
      props.setDisplay(false);
      window.alert("Data Successfully Insert");
      props.setRefresh(true);
    },
  });
  const uploadConfig = (name: any) => (event: any) => {
    let reader = new FileReader();
    const file = event.target.files[0];
    console.log(event.target.files);
    reader.onload = () => {
      formik.setFieldValue("file", file);
      setPreviewImg(reader.result);
    };
    reader.readAsDataURL(file);
    setUpload(true);
  };
  const onClear = (event: any) => {
    event.preventDefault();
    setPreviewImg(null);
    setUpload(false);
  };
  useEffect(() => {
    dispatch(GetProductCategoryRequest());
  }, [dispatch]);
  return (
    <div className="bg-grey-500 my-5">
      <div className="flex items-center justify-center h-screen ">
        <div className="w-96 mx-auto bg-white rounded shadow border-slate-900">
          <div className="mx-16 py-4 px-8 text-black text-xl font-bold border-b border-grey-500 text-center">
            <h1>Product</h1>
          </div>
          <FormikProvider value={formik}>
            <form onSubmit={formik.handleSubmit}>
              <div className="py-4 px-8">
                <div className="mb-4">
                  <label className="block text-black text-sm font-bold mb-2">
                    Name
                  </label>
                  <input
                    className=" border rounded w-full py-2 px-3 text-grey-darker border-slate-900"
                    type="text"
                    name="name"
                    id="name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    placeholder="Name"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-black text-sm font-bold mb-2">
                    Description
                  </label>
                  <input
                    className=" border rounded w-full py-2 px-3 text-white border-slate-900"
                    type="text"
                    name="description"
                    id="description"
                    onChange={formik.handleChange}
                    value={formik.values.description}
                    placeholder="Description"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-black text-sm font-bold mb-2">
                    Price
                  </label>
                  <input
                    className=" border rounded w-full py-2 px-3 text-white border-slate-900"
                    type="text"
                    name="price"
                    id="price"
                    onChange={formik.handleChange}
                    value={formik.values.price}
                    placeholder="Price"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-black text-sm font-bold mb-2">
                    Category
                  </label>
                  <select
                    name="category"
                    id="category"
                    onChange={formik.handleChange}
                    value={formik.values.category}
                    onBlur={formik.handleBlur}
                    className=" border rounded w-full py-2 px-3 text-white border-slate-900"
                  >
                    <option value="" selected disabled hidden>
                      Choose Category
                    </option>
                    {prodCats.map((item: any) => (
                      <option key={item.id} value={item.id}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-span-full mb-4">
                  <label
                    htmlFor="cover-photo"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Photo
                  </label>
                  <div className="mt-2  rounded-lg border border-dashed border-gray-900/25 px-6 pt-10 pb-4">
                    {upload === false ? (
                      <>
                        <span>Kosong</span>
                      </>
                    ) : (
                      <div className="flex justify-center items-center">
                        <img
                          src={previewImg}
                          alt="img"
                          className="max-w-xs"
                          width={200}
                        />
                      </div>
                    )}
                    <div className="text-center flex justify-center items-center">
                      <div className="mt-4 flex text-sm leading-6 text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                            onChange={uploadConfig("file")}
                          />
                        </label>
                      </div>
                    </div>
                    <span
                      onClick={onClear}
                      className="text-red-500 text-center flex justify-center items-center pt-2 cursor-pointer"
                    >
                      Remove
                    </span>
                  </div>
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
