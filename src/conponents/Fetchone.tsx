import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Collapse from "./Collapse";

interface dataType {
  id: string;
  title: string;
  cover: string;
  picture: string[];
  description: string;
  host: Host;
  rating: string;
  location: string;
  equipments: string[];
  tags: string[];
}

interface Host {
  name: string;
  picture: string;
}

const Fetchone: React.FC = () => {
  var { id } = useParams();
  const [datas, setDatas] = useState<dataType | null>(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (datas === null) {
      const getData = async () => {
        const respone = await fetch("../data/data.json");
        const dataRespone: dataType[] = await respone.json();
        var one = dataRespone.filter((d) => {
          return id === d.id;
        });
        if (one.length === 0) {
          return navigate("/");
        }
        setDatas(one[0]);
      };

      getData();
    }
  });

  return (
    <>
      <div className="housing">
        <div className="housing__div--one">
          <h1 className="housing__h1">{datas?.title}</h1>
          <p className="housing__p">{datas?.location}</p>
          <ul className="housing__ul">
            {datas?.tags.map((tag, key) => {
              return <li className={"housing__li"} key={key}>{tag}</li>;
            })}
          </ul>
        </div>
        <div className="housing__div--two">
          <div className="housing__div--flex">
            <h2 className="housing__h2">{datas?.host.name}</h2>
            <img className="housing__img" src={datas?.host.picture} alt="" />
          </div>
        </div>
      </div>
      <div className="collapse-location">
        <Collapse name="Description" data={datas?.description} />
        <Collapse name="Equipements" data={datas?.equipments} />
      </div>
    </>
  );
};

export default Fetchone;
