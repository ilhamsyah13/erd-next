import React from "react";
import Image from "next/image";
export default function DisplayImage({ imageSrc }: any) {
  return (
    <div>
      <Image
        src={`http://localhost:3002/product/image/${imageSrc}`}
        alt=""
        width={100}
        height={100}
        className="max-w-4"
      />
    </div>
  );
}
