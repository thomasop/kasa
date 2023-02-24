import React, { useState } from "react";

interface propsType {
  name: string | undefined;
  data: string | string[] | undefined;
}

const Collapse: React.FC<propsType> = ({ name, data }) => {
  const [collapse, setCollapse] = useState<boolean>(false);
  const [styleDisplay, setStyleDisplay] = useState<string>("none");
  const [styleTransform, setStyleTransform] =
    useState<string>("rotate(180deg)");
  const pStyle = {
    display: styleDisplay,
  };
  const imgStyle = {
    transform: styleTransform,
  };

  const updateUseState = () => {
    collapse === false ? setCollapse(true) : setCollapse(false);
    styleDisplay === "none" ? setStyleDisplay("block") : setStyleDisplay("none");
    styleTransform === "rotate(180deg)" ? setStyleTransform("rotate(360deg)") : setStyleTransform("rotate(180deg)");
  };

  return (
    <>
      <div className="collapse-location__div">
        <h1
          className="collapse-location__h1"
          onClick={() => {
            updateUseState();
          }}
        >
          {name}
        </h1>
        <img
          style={imgStyle}
          className="collapse-location__img"
          src="../assets/Vector.png"
          alt=""
        />

        <div style={pStyle} className="collapse-location__p">
          {data &&
            typeof data !== "string" &&
            collapse === true &&
            data?.map((d) => {
              return <p>{d}</p>;
            })}
          {data && typeof data === "string" && collapse === true ? (
            <p>{data}</p>
          ) : (
            <p></p>
          )}
        </div>
      </div>
    </>
  );
};

export default Collapse;
