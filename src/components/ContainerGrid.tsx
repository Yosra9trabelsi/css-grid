import {
  CalendarOutlined,
  CameraOutlined,
  PlayCircleFilled,
} from "@ant-design/icons";
import { Header } from "antd/es/layout/layout";
import React from "react";
import "../_dist/container-grid.css";
import BigCard from "./BigCard";
import CardImg from "./CardImg";
import CardWithBg from "./CardWithBg";
const data = [
  {
    url: "https://mksdmcdn-9b59.kxcdn.com/gridlove/wp-content/uploads/2016/09/gridlock_38-385x300.jpg",
    button: "entrainement",
    title: "Are rock concert really coming back into fasion?",
    texte:
      "Monotonectally pursue backward-compatible ideas without empowered imperatives. Interactively predominate low-risk high-yield ROI rather than adaptive e-tailers....",
    icon1: <PlayCircleFilled />,
    img: "../../images/avatar_user1.jpg",
  },
  {
    url: "https://mksdmcdn-9b59.kxcdn.com/gridlove/wp-content/uploads/2016/09/gridlock_13-335x300.jpg",
    button: "food & drink",
    title: "With good typography you don’t actually need images",
    texte:
      "Distinctively coordinate pandemic technologies rather than market-driven meta-services. Distinctively reconceptualize high standards in...",
    icon1: <CameraOutlined />,
    img: "../../images/avatar_user2.jpg",
  },
];


const CotainerGrid = () => {
  return (
    <div className="grid">
      <div className="side"></div>
      <div className="side2"></div>
      <div className="title1">Editor’s pick</div>
      <div className="container-card1">
        {" "}
        <BigCard data={data[0]} />
      </div>

      <CardWithBg />
      <CardImg />
      <div className="card3">
        {" "}
        <h3 className="a15">a</h3>
        <h3 className="b15">b</h3>
      </div>

      <div className="card5">
        {" "}
        <h3 className="a17">a</h3>
        <h3 className="b17">b</h3>
      </div>
      <div className="card6"></div>
      <div className="card7">
        {" "}
        <BigCard data={data[1]} />
      </div>
      <div className="card8"> </div>
      <div className="card9"></div>
      <div className="card10"></div>
      <div className="card11"></div>
      <div className="card12"></div>
      <div className="card13">
        <h3 className="a1">a</h3>
        <h3 className="b1">b</h3>
      </div>
      <div className="card14">
        {" "}
        <h3 className="a2">a</h3>
        <h3 className="b2">b</h3>
      </div>
      <div className="card15">
        {" "}
        <h3 className="a3">a</h3>
        <h3 className="b3">b</h3>
      </div>
      <div className="card16">
        {" "}
        <h3 className="a4">a</h3>
        <h3 className="b4">b</h3>
      </div>
      <div className="card17">
        {" "}
        <h3 className="a5">a</h3>
        <h3 className="b5">b</h3>
      </div>
      <div className="card18">
        {" "}
        <h3 className="a6">a</h3>
        <h3 className="b6">b</h3>
      </div>
      <div className="card19">
        {" "}
        <h3 className="a7">a</h3>
        <h3 className="b7">b</h3>
      </div>
      <div className="card20">
        <h3 className="a8">a</h3>
        <h3 className="b8">b</h3>
      </div>
      <div className="card21">
        {" "}
        <h3 className="a9">a</h3>
        <h3 className="b9">b</h3>
      </div>
      <div className="card22">
        <h3 className="a10">a</h3>
        <h3 className="b10">b</h3>
      </div>
      <div className="card23">
        {" "}
        <h3 className="a11">a</h3>
        <h3 className="b11">b</h3>
      </div>
      <div className="card24">
        {" "}
        <h3 className="a12">a</h3>
        <h3 className="b12">b</h3>
      </div>
      <div className="card25">
        {" "}
        <h3 className="a13">a</h3>
        <h3 className="b13">b</h3>
      </div>

      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default CotainerGrid;
