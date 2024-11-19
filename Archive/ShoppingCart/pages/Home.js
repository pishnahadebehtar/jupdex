import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAPI } from "../state/ProductSlice";
import ProductCard from "../components/ProductCard";

function Home() {
  const data = useSelector((store) => store.ProductSlice.data);
  const isLoading = useSelector((store) => store.ProductSlice.isLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAPI());
  }, []);
  return (
    <div className="home">
      {isLoading ? "Loading Products" : null}
      {data.length != 0
        ? data.map((item) => {
            return <ProductCard id={item.id} key={item.id} />;
          })
        : null}
    </div>
  );
}

export default Home;
