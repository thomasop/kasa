import React from "react";

interface propsType {
  nbRating: string | undefined;
}

const Rating: React.FC<propsType> = ({ nbRating }) => {
  var arrayRating: string[] = [];
  const ratingMax: number = 5;
  for (let i = 0; i < ratingMax; i++) {
    i < Number(nbRating) ? arrayRating.push("full") : arrayRating.push("empty");
  }
  return (
    <div data-testid="rating" className="rating">
      {arrayRating.map((rat, key) => {
        return rat === "full" ? (
          <img
            data-testid="ratingImgFull"
            key={key}
            className="rating__img"
            src="../assets/VectorFull.svg"
            alt=""
          />
        ) : (
          <img
            data-testid="ratingImgEmpty"
            key={key}
            className="rating__img"
            src="../assets/VectorEmpty.svg"
            alt=""
          />
        );
      })}
    </div>
  );
};

export default Rating;
