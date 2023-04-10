import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FindCustomerRequest } from "../../redux-saga/action/customerAction";
import ProfileCreate from "./ProfileCreate";
import ProfileUpdate from "./ProfileUpdate";

export default function Profile() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { customers } = useSelector((state: any) => state.customerState);
  const [id, setId] = useState<any>();
  const [customerData, setCustomerData] = useState<any>([]);

  useEffect(() => {
    dispatch(FindCustomerRequest(router.query.id));
    setId(router.query.id);
    setCustomerData(
      customers.find((item: any) => {
        return item.user.id === parseInt(router.query.id);
      })
    );
  }, [dispatch, router.query.id, customers]);
  console.log(customerData);

  return (
    <div>
      {customerData === undefined ? (
        <ProfileCreate id={id} />
      ) : (
        <ProfileUpdate customerData={customerData} />
      )}
    </div>
  );
}
