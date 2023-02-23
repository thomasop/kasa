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
    <div className="rating">
      {arrayRating.map((rat) => {
        return rat === "full" ? (
          <img className="rating__img" src="../VectorFull.svg" alt="" />
        ) : (
          <img src="../VectorEmpty.svg" alt="" />
        );
      })}
    </div>
  );
};

export default Rating;
