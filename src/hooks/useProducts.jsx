import { useState, useEffect } from "react";

const useProducts = () => {
  const [items, setItems] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (res.status >= 400) {
          throw new Error("server error");
        }
        return res.json();
      })
      .then((json) => {
        for (let i = 0; i < json.length; i++) {
          Object.defineProperty(json[i], "quantity", { value: 0 });
        }
        setItems(json);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);
  return { items, setItems, error, loading };
};
export default useProducts;
