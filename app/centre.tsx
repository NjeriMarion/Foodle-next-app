import React from "react";
import { Images } from "./images";

const Menu = () => {
  return (
    <div className="image grid grid-cols-3 gap-10 mt-8 ml-10">
      {Images.map((imag, id) => (
        <div className="container" key={id}>
          <img
            src={imag.imgs}
            alt="product"
            className="mb-2 rounded-l"
          />
          <div className="">
            <h1 className="mt-5">{imag.title}</h1>
            <button className="bg-#c50707 text-#fff border-none px-10 py-5 mt-10 rounded-30">{imag.button} </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Menu;