import React from "react";

interface propsType {
  nbRating: string | undefined;
}

const Rating: React.FC<propsType> = ({ nbRating }) => {
  var arrayRating: string[] = [];
  for (let i = 0; i < Number(nbRating); i++) {
    arrayRating.push("full");
  }
  var nb: number = arrayRating.length;

  while (nb < 6) {
    if (nb === 5) {
      break;
    }
    arrayRating.push("empty");
    nb++;
  }
  return (
    <div data-testid="rating" className="rating">
      {arrayRating.map((rat, key) => {
        return rat === "full" ? (
          <img data-testid="ratingImgFull" key={key} className="rating__img" src="../assets/VectorFull.svg" alt="" />
        ) : (
          <img data-testid="ratingImgEmpty" key={key} className="rating__img" src="../assets/VectorEmpty.svg" alt="" />
        );
      })}
    </div>
  );
};

export default Rating;
