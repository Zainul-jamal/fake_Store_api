import React, { useState, useEffect } from "react";
import axios from "axios";

const StoreApi = () => {
  const [api, setApi] = useState([]);
  const [loader, setLoader] = useState(false);

  const getApi = () => {
    setLoader(true);
    axios
      .get("https://fakestoreapi.com/products/")
      .then((res) => {
        // console.log(res.data);
        setApi([...res.data]);
        setLoader(false);
      })
      .catch((err) => {
        console.log(err);
        // setLoader(false); // Ensure loader is stopped even when there's an error
      });
  };

  useEffect(() => {
    getApi(); // Ensure this is correctly inside useEffect
  }, []);

  return (
    <>
      {loader ? (
        <div>
          <img
            className="pl-48 min-h-40"
            src="https://cdn.dribbble.com/users/1787505/screenshots/7300251/shot.gif"
            alt="Loading..."
          />
        </div>
      ) : (
        <>
          <button onClick={() => console.log("Edit data clicked!")}>
            Edit Data
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-9 m-4">
            {api.map((x) => (
              <div
                className="bg-[white] rounded-lg p-4 shadow-sm hover:shadow-lg"
                key={x.id}
              >
                <div className="h-90">
                  <img
                    src={x.image}
                    className="w-full h-48 object-contain mb-4"
                    alt="Product"
                  />
                  <h5 className="text-lg font-semibold text-gray-800 mb-2 overflow-hidden text-ellipsis w-full line-clamp-1">
                    {x.title}
                  </h5>
                  <p className="card-text overflow-hidden text-ellipsis w-full line-clamp-3 pt-3">
                    {x.description}
                  </p>
                </div>
                <small className="text-muted">{x.category}</small>
                <div className="card-footer">
                  <b className="text-lg font-semibold">{x.price} $</b>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default StoreApi;
