/* eslint-disable react/prop-types */
import { useState } from "react";

const Item = ({ item, addToCart }) => {
  const [qty, setQty] = useState(1);
  function changeQty(e) {
    setQty(e.target.value);
  }

  function clickAction() {
    addToCart(item.id, Number(qty));
    setQty(1);
  }
  return (
    <div className="relative h-96 w-80 bg-white flex flex-col items-center p-4 rounded-lg shadow-lg gap-4 text-center">
      <div className="absolute top-0 left-0 text-xl bg-green-600 text-white p-2 rounded-tl-lg rounded-br-lg shadow-2xl">
        ${item.price.toFixed(2)}
      </div>
      <img src={item.image} alt="" className="h-48 w-48" />
      <h2 className="font-bold">{item.title}</h2>
      <div className="flex justify-between w-full mt-auto text-lg">
        <button
          className="bg-green-500 shadow-lg rounded-lg p-2 text-white"
          onClick={clickAction}
        >
          Add to cart
        </button>
        <div className="flex items-center gap-2">
          <p className="text-lg">Quantity:</p>
          <input
            type="number"
            value={qty}
            min={1}
            className="bg-gray-300 w-20 rounded-lg pl-4 pr-1 shadow-sm text-gray-500 h-full"
            onChange={changeQty}
          />
        </div>
      </div>
    </div>
  );
};

export default Item;
