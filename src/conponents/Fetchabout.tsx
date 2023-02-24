import React, { useEffect, useState } from "react";
import Collapse from "./Collapse";

interface dataType {
  fiabilite: string;
  respect: string;
  service: string;
  responsabilite: string;
}

const Fetchabout: React.FC = () => {
  const [data, setData] = useState<dataType | null>(null);
  useEffect(() => {
    if (data === null) {
      const getData = async () => {
        const respone = await fetch("./data/dataAbout.json");
        const dataRespone: dataType = await respone.json();
        setData(dataRespone);
      };
      getData();
    }
  });
  return (
    <>
      <div className="collapse-about">
        <Collapse name="Fiabilité" data={data?.fiabilite} />
        <Collapse name="Respect" data={data?.respect} />
        <Collapse name="Service" data={data?.service} />
        <Collapse name="Responsabilité" data={data?.responsabilite} />
      </div>
    </>
  );
};

export default Fetchabout;
