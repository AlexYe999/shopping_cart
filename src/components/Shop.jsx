import { ToastContainer, toast, Bounce } from "react-toastify";
import Item from "./Item";
import { useOutletContext } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const Shop = () => {
  const { items, setItems, error, loading } = useOutletContext();
  if (loading) return <>Loading...</>;
  if (error) return <>Error fetching items...</>;
  const addToCart = (id, qty) => {
    if (qty > 0 && Number.isInteger(qty)) {
      let copy = items.map((item) => {
        return item.id === id
          ? { ...item, quantity: item.quantity + qty }
          : item;
      });
      setItems(copy);
      toast.success("Added to cart", {
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
  const itemCards = items.map((x) => {
    return <Item key={x.id} item={x} addToCart={addToCart} />;
  });

  return (
    <>
      <div className="flex-1 bg-slate-400 flex gap-8 p-12 flex-wrap justify-between">
        {itemCards}
      </div>
      <ToastContainer />
    </>
  );
};
export default Shop;
