import NavBar from "./components/NavBar";
import "./App.css";
import { Outlet } from "react-router-dom";
import useProducts from "./hooks/useProducts";

function App() {
  const { items, setItems, error, loading } = useProducts();

  return (
    <div className="h-full flex flex-col">
      <NavBar />
      <Outlet context={{ items, setItems, error, loading }} />
    </div>
  );
}

export default App;
