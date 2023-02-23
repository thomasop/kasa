import React, { useState } from "react";

interface propsType {
  images: string[] | undefined;
}
const Carrousel: React.FC<propsType> = ({ images }) => {
  const [num, setNum] = useState(0);

  return (
    <>
      <img className="carrousel__img" src={images && images[num]} alt="" />
      {images && images.length > 1 ? (
        <>
          <img
            src="../VectorPrevious.svg"
            alt=""
            className="carrousel__previous"
            onClick={() => {
              num === 0 ? setNum(Number(images?.length) - 1) : setNum(num - 1);
            }}
          />
          <img
            src="../VectorNext.svg"
            alt=""
            className="carrousel__next"
            onClick={() => {
              num === Number(images?.length) - 1 ? setNum(0) : setNum(num + 1);
            }}
          />
          <p className="carrousel__p">
            {num + 1}/{Number(images?.length)}
          </p>
        </>
      ) : null}
    </>
  );
};

export default Carrousel;
