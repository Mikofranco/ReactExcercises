import "./cardone.css";
import React from "react";

const CardOne = () => {
  return (
    <div className="card">
      <div className="image-box">
        <img
          src="https://media.evo.co.uk/image/upload/f_auto,t_content-image-full-desktop@1/v1581606140/evo/2020/02/Ford%20Mustang%20Mach%201-5.jpg"
          alt="mustang 1969"
        />
      </div>
      <div className="content">
        <h2>Ford mustang 1960</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus sint
          iure error repudiandae corrupti. Distinctio itaque placeat omnis,
        </p>
      </div>
    </div>
  );
};

export default CardOne;
