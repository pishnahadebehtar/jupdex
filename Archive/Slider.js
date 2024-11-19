import React, { useEffect, useState } from "react";
import { FaArrowRight, FaArrowLeft, FaLeaf } from "react-icons/fa";

function Slider() {
  const [ImageList, SetImageList] = useState([]);
  const [Loading, SetLoading] = useState(true);
  const [errorMessage, SetErrorMessage] = useState("");
  const [active, SetActive] = useState(0);
  async function getImage() {
    try {
      SetLoading(true);
      const response = await fetch(
        "https://picsum.photos/v2/list?page=1&limit=5"
      );

      const data = await response.json();
      if (response.ok) SetImageList(data);
      else SetErrorMessage("NOT VALID URL");
      SetLoading(false);
    } catch (error) {
      SetErrorMessage(error.message);
      SetLoading(false);
    }
  }
  useEffect(() => {
    getImage();
  }, []);
  return (
    <div className="box">
      {errorMessage != "" ? <div className="box">{errorMessage}</div> : null}
      {Loading === false ? (
        <div className="arrow">
          <FaArrowLeft
            size={35}
            style={{
              color: "white",
            }}
            onClick={() => {
              active === 0
                ? SetActive(ImageList.length - 1)
                : SetActive(active - 1);
            }}
          />
          <FaArrowRight
            size={35}
            style={{
              color: "white",
            }}
            onClick={() => {
              active === ImageList.length - 1
                ? SetActive(0)
                : SetActive(active + 1);
            }}
          />
        </div>
      ) : null}

      {Loading === false ? (
        ImageList.map((item, index) => {
          return (
            <div key={index} className="box">
              <div
                style={{
                  backgroundImage: `url(${item.download_url})`,
                }}
                className={index === active ? "img active" : "hidden"}
              >
                <div className="dot">
                  {ImageList.map((item, index) => {
                    return (
                      <span
                        className={
                          index === active ? "activeDot" : "inactiveDot"
                        }
                        onClick={() => SetActive(index)}
                        key={index}
                        style={{
                          width: "1rem",
                          height: "1rem",
                          borderRadius: "100%",
                          margin: "1rem",
                        }}
                      ></span>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="box">Loading . . .</div>
      )}
    </div>
  );
}

export default Slider;
/* .active {
  display: block;
  background-color: rgba(0, 0, 0, 0.95);
}
.hidden {
  display: none;
}
.dot {
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: transparent;
  box-shadow: none;
}
.img {
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  border-radius: 1rem;
  box-shadow: 3px 3px 15px #ff5f00;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.activeDot {
  background-color: white;
}
.inactiveDot {
  background-color: gray;
}
.arrow {
  display: flex;
  width: 55vw;
  justify-content: space-between;
  padding: 1rem;
  position: absolute;
  z-index: 1;
}
 */
