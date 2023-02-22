import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface dataType {
  id: string;
  title: string;
  cover: string;
  picture: string[];
  description: string;
  host: Host;
  rating: string;
  location: string;
  equipements: string[];
  tags: string[];
}

interface Host {
  name: string;
  picture: string;
}

const Fetchall: React.FC = () => {
  const [datas, setDatas] = useState<dataType[] | null>(null);

  useEffect(() => {
    if (datas === null) {
      const getData = async () => {
        const respone = await fetch("./data/data.json");
        const dataRespone: dataType[] = await respone.json();
        setDatas(dataRespone);
      };

      getData();
    }
  });

  return (
    <>
      <div className="housings">
        {datas?.map((data) => {
          return (
            <Link
              className="housings__a"
              to={`/location/${data.id}`}
              key={data.id}
            >
              <img className="housings__img" src={data.cover} alt="" /><span className="housings__span">{data.title}</span>
            </Link>
            
          );
        })}
      </div>
    </>
  );
};

export default Fetchall;
