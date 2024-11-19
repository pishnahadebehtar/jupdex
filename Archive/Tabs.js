import React, { useEffect, useState } from "react";

function Tabs({ number }) {
  const [album, SetAlbum] = useState();
  const [photo, SetPhoto] = useState();
  const [error, SetError] = useState();
  const [flag, SetFlag] = useState([]);
  const [loading, SetLoading] = useState(true);
  async function FetchAPI(API, type) {
    try {
      SetLoading(true);
      const response = await fetch(API);
      const data = await response.json();
      if (data && type === "album") SetAlbum(data);
      if (data && type === "photo") SetPhoto(data);
      SetLoading(false);
    } catch (error) {
      SetError(error.message);
      SetLoading(false);
    }
  }
  useEffect(() => {
    FetchAPI("https://jsonplaceholder.typicode.com/albums", "album");
    FetchAPI("https://jsonplaceholder.typicode.com/photos", "photo");
  }, []);
  return (
    <div>
      {loading ? <div>LOADING PLZ Wait</div> : null}
      {error ? <div>{error}</div> : null}
      {album ? (
        <div
          className="flex"
          style={{ backgroundColor: "black", color: "white" }}
        >
          {album.splice(0, number).map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  flag.length != 0
                    ? flag[0] === item.id
                      ? SetFlag([])
                      : SetFlag([item.id])
                    : SetFlag([item.id]);
                }}
                className={flag[0] === item.id ? "tab active" : "tab"}
              >
                {item.title}
              </div>
            );
          })}
        </div>
      ) : null}
      {photo && flag.length != 0 ? (
        <div className="flex">
          {photo
            .filter((itemtwo) => itemtwo.albumId === flag[0])
            .splice(0, number)
            .map((itemthree) => {
              return (
                <div
                  className="flex"
                  style={{ flexDirection: "column", maxWidth: "30%" }}
                >
                  <img
                    src={`${itemthree.url}`}
                    style={{ width: "200px", height: "200px" }}
                  />
                  <div style={{ margin: "1rem" }}>{itemthree.title}</div>
                </div>
              );
            })}
        </div>
      ) : null}
    </div>
  );
}

export default Tabs;
