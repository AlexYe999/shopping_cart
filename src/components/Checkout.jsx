import { useOutletContext } from "react-router-dom";
import CheckoutItem from "./CheckoutItem";
import { toast, Bounce, ToastContainer } from "react-toastify";

const Checkout = () => {
  const { items, setItems, error, loading } = useOutletContext();
  if (loading) return <>Loading...</>;
  if (error) return <>Error fetching items...</>;
  let cost = 0.0;
  for (let i = 0; i < items.length; i++) {
    cost += items[i].price * items[i].quantity;
  }
  cost = cost.toFixed(2);

  function clearCart() {
    let copy = items.map((item) => {
      return { ...item, quantity: 0 };
    });
    setItems(copy);
  }

  const changeQty = (id, qty) => {
    if (qty >= 0 && Number.isInteger(qty)) {
      let copy = items.map((item) => {
        return item.id === id ? { ...item, quantity: qty } : item;
      });
      setItems(copy);
    } else {
      toast.error("Input valid quantity", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  const itemCards = items
    .filter((x) => x.quantity > 0)
    .map((x) => {
      return <CheckoutItem key={x.id} item={x} changeQty={changeQty} />;
    });
  if (itemCards.length == 0)
    return (
      <div className="flex-1 bg-slate-400 flex items-center justify-center">
        <div className="flex items-center flex-col mx-auto w-96 h-40 gap-8 p-5 rounded-lg">
          <h1 className="font-bold text-5xl">Cart is Empty!</h1>
        </div>
      </div>
    );
  return (
    <>
      <div className="flex-1 bg-slate-400 flex gap-8 p-12 flex-col items-center">
        {itemCards}
        <p className="text-3xl font-bold">Total cost: ${cost}</p>
        <button
          className="text-white bg-lime-700 w-64 h-20 rounded-lg hover:bg-lime-900 text-3xl"
          onClick={clearCart}
        >
          Purchase
        </button>
      </div>
      <ToastContainer />
    </>
  );
};
export default Checkout;
