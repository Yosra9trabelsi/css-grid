import React, { useRef } from "react";
import "../_dist/carousel.css";
import { Button, Carousel } from "antd";
import {
  LeftCircleFilled,
  LeftOutlined,
  RightCircleFilled,
  RightOutlined,
} from "@ant-design/icons";
import { CarouselRef } from "antd/es/carousel";

const CarouselAntd = () => {
  const ref = useRef() as any;
  return (
    <div className="container-carousel">
      <Carousel dots={false} draggable ref={ref} className="carousel-cont">
        <div className="carousel-img">
          <img src="../../images/carousel1.jpg" alt="" />
        </div>
        <div className="carousel-img">
          <img src="../../images/carousel2.jpg" alt="" />
        </div>
        <div className="carousel-img">
          <img src="../../images/carousel3.jpg" alt="" />
        </div>
      </Carousel>
      <div className="but-carousel">
        <LeftCircleFilled onClick={() => ref.current.prev()} />
        <RightCircleFilled onClick={() => ref.current.next()} />
      </div>
    </div>
  );
};

export default CarouselAntd;
