import { CalendarOutlined } from '@ant-design/icons'
import React from 'react'
import "../_dist/card-img.css"
const CardImg = () => {
  return (
    <div className="card4">
    <div className="top-card4">
      {" "}
      <img className="img-card4" src="../../images/bg1.jpg " alt="" />
      <button className="but-card4">LIFESTYLE</button>
    </div>
    <div className="buttom-card4">
      <h1>If you're truly happy and know it let it show</h1>
      <div className="ext-card4">
        <img
          className="img-card2"
          src="../../images/avatar_user2.jpg"
          alt=""
        />
        <p>Joana Bergstein</p>
        <CalendarOutlined />
        <p>4 weeks ago</p>
      </div>
    </div>
  </div>
  )
}

export default CardImg