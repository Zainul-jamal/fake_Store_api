import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
function App() {
  const [data, setData] = useState([]);
  const getApi = () => {
    axios
      .get("https://fakestoreapi.in/api/products")
      .then((res) => {
        console.log(res.data.products);
        setData([...res.data.products]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getApi();
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-9 m-4">
        {data.map((val, i) => (
          <div
            className="bg-[white] rounded-lg p-4 shadow-sm hover:shadow-lg"
            key={i}
          >
            <div className="h-90">
              <img
                src={val.image}
                className="w-full h-48 object-contain mb-4"
                alt="Product"
              />
              <h5 className="text-lg font-semibold text-gray-800 mb-2 overflow-hidden text-ellipsis w-full line-clamp-1">
                {val.title}
              </h5>
              <p className="card-text overflow-hidden text-ellipsis w-full line-clamp-3 pt-3">
                {val.description}
              </p>
            </div>
            <small className="text-muted">Model : {val.brand}</small> <br />
            <b className="text-muted">Best for  : {val.category}</b>
            <div className="card-footer">
              <b className="text-lg font-semibold">Only {val.price}$</b> <br />
              <small>Disc <del>{val.discount} %</del></small>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
