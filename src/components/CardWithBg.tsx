import React from "react";
import "../_dist/card-bg.css";
const CardWithBg = () => {
  return (
    <div className="card2">
      {/* <img src="../../images/image1.jpg" alt="" /> */}
      <div>
        <button className="but-card2"> Technologie</button>
      </div>
      <div className="container-card2">
        <h2 className="h-card2">
          The world needs true geniuses now more than ever
        </h2>
      </div>
      <div className="ext-card2">
        <img className="img-card2" src="../../images/avatar_user1.jpg" alt="" />
        <p>Patricia Callahan</p>
      </div>
    </div>
  );
};

export default CardWithBg;
