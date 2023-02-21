import { EyeOutlined, PlayCircleFilled } from "@ant-design/icons";
import React from "react";
import "../_dist/big-card.css";
interface props {
  data: {
    url: string;
    button: string;
    title: string;
    texte: string;
    icon1: JSX.Element;
    img: string;
  };
}
const BigCard: React.FC<props> = ({ data }) => {
  return (
    <div className="card1">
      {" "}
      <div className="img-card1">
        <img src={data?.url} alt="" />
      </div>
      <div className="card1-p">
        <div className="top-card1">
          {data?.icon1}
          <button className="b-card1">{data?.button}</button>
        </div>
        <h2>{data?.title}</h2>
        <p>{data?.texte}</p>
        <div className="ext-card1">
          <img src={data?.img} alt="" />
          <p>Patricia Callahan</p>
          <EyeOutlined />
          <p>38,689 views</p>
        </div>
      </div>
    </div>
  );
};

export default BigCard;
