import React, { useState } from "react";

function Menu({ data }) {
  const [submenu, SetSubmenu] = useState();
  return (
    <div className="flex border">
      {data.map((item) => {
        return (
          <div>
            <div
              onClick={() =>
                submenu === item.title ? SetSubmenu() : SetSubmenu(item.title)
              }
            >
              {item.title}{" "}
              {"children" in item && submenu === item.title
                ? "-"
                : "children" in item
                ? "+"
                : ""}
            </div>
            {"children" in item && submenu === item.title ? (
              <Menu data={item.children} />
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

export default Menu;
