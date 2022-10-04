import { useRouter } from "next/router";
import React from "react";

export default function PaymentById() {
  const router = useRouter();
  const { id } = router.query;

  return <p>Post: {id}</p>;
}
