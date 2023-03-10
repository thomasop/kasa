import React, { useEffect, useState } from "react";
import Collapse from "./Collapse";

interface dataType {
  name: string;
  data: string;
}

const Fetchabout: React.FC = () => {
  const [datas, setDatas] = useState<dataType[] | null>(null);
  useEffect(() => {
    const getData = async () => {
      const respone = await fetch("./data/dataAbout.json");
      const dataRespone: dataType[] = await respone.json();
      setDatas(dataRespone);
    };
    getData();
  }, []);
  return (
    <>
      <div className="collapse-about">
        {datas?.map((data, key) => {
          return <Collapse key={key} name={data.name} data={data.data} />;
        })}
      </div>
    </>
  );
};

export default Fetchabout;
