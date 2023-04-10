import React, { useEffect, useState } from "react";
import Layout from "@/components/layout";
import { useDispatch, useSelector } from "react-redux";
import {
  GetProductCategoryRequest,
  DelProductCategoryRequest,
} from "../../redux-saga/action/productCategoryAction";
import ProductCategoryCreate from "./ProductCategoryCreate";
import ProductCategoryUpdate from "./ProductCategoryUpdate";

export default function ProductCategory() {
  const dispatch = useDispatch();
  const [display, setDisplay] = useState<boolean>(false);
  const [refresh, setRefresh] = useState<boolean>(false);
  const [displayEdit, setDisplayEdit] = useState<boolean>(false);
  const [id, setId] = useState<any>();
  const { prodCats } = useSelector((state: any) => state.productCategoryState);

  useEffect(() => {
    dispatch(GetProductCategoryRequest());
    setRefresh(false);
  }, [refresh, dispatch]);

  const onDelete = async (id: any) => {
    dispatch(DelProductCategoryRequest(id));
    window.alert("Data Successfully Delete");
    setRefresh(true);
  };

  const onClick = (id: any) => {
    setDisplayEdit(true);
    setId(id);
  };

  return (
    <div>
      <Layout>
        {displayEdit ? (
          <ProductCategoryUpdate
            id={id}
            setRefresh={setRefresh}
            setDisplay={setDisplayEdit}
          />
        ) : display ? (
          <ProductCategoryCreate
            setDisplay={setDisplay}
            setRefresh={setRefresh}
          />
        ) : (
          <div className="m-6 min-h-screen">
            <h1 className="text-center my-4 font-bold text-3xl">
              Product Category
            </h1>
            <button
              onClick={() => setDisplay(true)}
              className=" ml-5 py-2 px-4 bg-white text-slate-900 font-semibold border border-white rounded hover:bg-slate-900 hover:text-white hover:border-white transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
            >
              Add Category
            </button>
            <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
              <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-4 font-medium text-gray-900"
                    >
                      Id
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 font-medium text-gray-900"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 font-medium text-gray-900"
                    >
                      Description
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 font-medium text-gray-900"
                    >
                      Created At
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 font-medium text-gray-900"
                    >
                      Updated At
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 font-medium text-gray-900"
                    ></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                  {(prodCats || []).map((item: any) => (
                    <tr className="hover:bg-gray-50" key={item.id}>
                      <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                        <div className="text-sm">
                          <div className="font-medium text-gray-700">
                            {item.id}
                          </div>
                        </div>
                      </th>
                      <td className="px-6 py-4">{item.name}</td>
                      <td className="px-6 py-4">{item.description}</td>
                      <td className="px-6 py-4">{item.createdat}</td>
                      <td className="px-6 py-4">{item.updatedat}</td>
                      <td className="px-6 py-4">
                        <div className="flex justify-end gap-4">
                          <button
                            x-data="{ tooltip: 'Delete' }"
                            onClick={() => onDelete(item.id)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="h-6 w-6"
                              x-tooltip="tooltip"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                              />
                            </svg>
                          </button>
                          <button
                            x-data="{ tooltip: 'Edite' }"
                            onClick={() => onClick(item.id)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="h-6 w-6"
                              x-tooltip="tooltip"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </Layout>
    </div>
  );
}
