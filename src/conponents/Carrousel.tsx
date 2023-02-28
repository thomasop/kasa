import React, { useState } from "react";

interface propsType {
  images: string[] | undefined;
}
const Carrousel: React.FC<propsType> = ({ images }) => {
  const [num, setNum] = useState(0);

  const showCarrousel = () => {
    if (images && images.length > 1) {
      return (
        <>
          <img
          data-testid="carrouselN"
            src="../assets/VectorPrevious.svg"
            alt=""
            className="carrousel__previous"
            onClick={() => {
              num === 0 ? setNum(Number(images?.length) - 1) : setNum(num - 1);
            }}
          />
          <img
          data-testid="carrouselP"
            src="../assets/VectorNext.svg"
            alt=""
            className="carrousel__next"
            onClick={() => {
              num === Number(images?.length) - 1 ? setNum(0) : setNum(num + 1);
            }}
          />
          <p className="carrousel__p" data-testid="carrouselT">
            {num + 1}/{Number(images?.length)}
          </p>
        </>
      );
    }
  };

  return (
    <>
      <img data-testid="carrousel" className="carrousel__img" src={images && images[num]} alt="" />
      {showCarrousel()}
    </>
  );
};

export default Carrousel;
