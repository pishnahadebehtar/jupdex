import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Adding, Deleting } from "../state/CartSlice";
import { Link, redirect } from "react-router-dom";

function ProductCard({ id }) {
  const data = useSelector((store) => store.ProductSlice.data);
  const cart = useSelector((store) => store.CartSlice);
  const target = data.filter((item) => item.id === id)[0];
  const dispatch = useDispatch();
  //  console.log(cart.cartItems.filter((item) => item.id === target.id));
  useEffect(() => {
    console.log(cart);
  }, [cart]);
  return (
    <div className="card">
      <div>
        <img src={target.image} />
      </div>
      <div>{target.title}</div>
      <div>Price : {target.price}</div>
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <button onClick={() => dispatch(Deleting(target.id))}> - </button>
        <div>
          {cart.cartItems.filter((item) => item.id === target.id).length != 0
            ? cart.cartItems.filter((item) => item.id === target.id)[0].amount
            : 0}
        </div>
        <button onClick={() => dispatch(Adding(target.id))}> + </button>
      </div>
      <Link to={`/product/${target.id}`}>
        <button>View Details</button>
      </Link>
    </div>
  );
}

export default ProductCard;
