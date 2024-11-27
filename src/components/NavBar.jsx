import cart from "../assets/cart-outline.svg";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-lime-200/85">
      <Link to="/">
        <button className="text-2xl font-bold hover:text-gray-600">
          Random Marketplace
        </button>
      </Link>
      <div className="flex items-center gap-16">
        <Link to="/shop">
          <button className="text-2xl font-bold hover:text-gray-600">
            Shop
          </button>
        </Link>
        <Link to="/checkout">
          <button>
            <img
              src={cart}
              alt="Shopping Cart Icon"
              className="h-16 cart-img"
            />
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
