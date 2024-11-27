/* eslint-disable react/prop-types */
import icon from "../assets/delete-outline.svg";
import { useState } from "react";
import { toast, Bounce } from "react-toastify";

const CheckoutItem = ({ item, changeQty }) => {
  const [qty, setQty] = useState(item.quantity);
  function onChange(e) {
    setQty(e.target.value);
    if (e.target.value != "") changeQty(item.id, Number(e.target.value));
  }
  function clickAction() {
    changeQty(item.id, 0);
  }
  return (
    <div className="h-36 w-full bg-white flex items-center p-8 rounded-lg shadow-lg gap-4 text-center justify-between text-3xl">
      <div className="flex gap-16 items-center">
        <img src={item.image} alt="" className="h-32 w-32" />
        <h2 className="font-bold text-ellipsis overflow-hidden break-words min-w-0">
          {item.title}
        </h2>
      </div>
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-8">
          <p>Quantity:</p>
          <input
            type="number"
            value={qty}
            min={1}
            className="bg-gray-300 w-28 rounded-lg pl-4 pr-1 shadow-sm text-gray-500 h-full"
            onChange={onChange}
          />
        </div>
        <button onClick={clickAction}>
          <img src={icon} className="min-h-28 min-w-28 delete" />
        </button>
      </div>
    </div>
  );
};

export default CheckoutItem;
