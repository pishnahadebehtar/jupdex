import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Adding, Deleting } from "../state/CartSlice";

function ProductPage() {
  const products = useSelector((store) => store.ProductSlice.data);
  const cart = useSelector((store) => store.CartSlice.cartItems);
  const { id } = useParams();

  const target = products.filter((item) => item.id === Number(id))[0];
  console.log("kir");
  const dispatch = useDispatch();
  console.log(products);
  return (
    <div className="product-page">
      <div className="product-page-left">
        <img src={target.image} />
        <div className="flex">
          <button onClick={() => dispatch(Deleting(target.id))}> - </button>
          <div>
            {cart.filter((item) => item.id === target.id).length != 0
              ? cart.filter((item) => item.id === target.id)[0].amount
              : 0}
          </div>
          <button onClick={() => dispatch(Adding(target.id))}> + </button>
        </div>
        <div>
          Total Price :
          {cart.filter((item) => item.id === target.id).length != 0
            ? cart.filter((item) => item.id === target.id)[0].amount *
              target.price
            : 0}
        </div>
      </div>
      <div className="product-page-right">
        <div style={{ margin: "2vw" }}>
          <b>Title</b>
          :<br /> {target.title}
        </div>
        <div style={{ margin: "2vw" }}>
          <b>Category</b>:<br /> {target.category}
        </div>
        <div style={{ margin: "2vw" }}>
          <b>Description</b>:<br /> {target.description}
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
