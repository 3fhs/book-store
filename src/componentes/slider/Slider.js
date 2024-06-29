import React, { useState } from "react";
import "./Slider.css";
import book1 from "../../images/book1.png";
import book2 from "../../images/book2.png";
import book3 from "../../images/book3.png";

function Slider() {
  const [change, setChange] = useState(0);

  const handelClick = (direction) => {
    if (direction === "left") {
      setChange(change > 0 ? change - 1 : 0);
    } else {
      setChange(change < 2 ? change + 1 : 2);
    }
  };

  return (
    <div className="slide-container">
      <i
        className="bi bi-chevron-double-left"
        onClick={() => handelClick("left")}
      ></i>

      <div
        className="slide-wrapper"
        style={{ transform: ` translateX(${change * -100}vw)` }}
      >
        <div className="slide first-slide">
          <div className="slide-img">
            <img src={book1} alt="img" />
          </div>
          <div className="slide-info">
            <h1 className="slide-title">Book Store</h1>
            <p>it's not just reading. it's living adventure</p>
          </div>
        </div>
        <div className="slide two-slide">
          <div className="slide-img">
            <img src={book2} alt="img" />
          </div>
          <div className="slide-info">
            <h1 className="slide-title">Book For every one</h1>
            <p>can you reading. it's living adventure</p>
          </div>
        </div>
        <div className="slide three-slide">
          <div className="slide-img">
            <img src={book3} alt="img" />
          </div>
          <div className="slide-info">
            <h1 className="slide-title">It's my live</h1>
            <p>it's not just reading. it's living adventure</p>
          </div>
        </div>
      </div>

      <i
        className="bi bi-chevron-double-right"
        onClick={() => handelClick("right")}
      ></i>
    </div>
  );
}

export default Slider;
