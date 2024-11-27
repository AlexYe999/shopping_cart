import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div className="flex-1 main flex items-center justify-center">
      <div className="flex items-center flex-col bg-lime-200/85 mx-auto w-96 h-40 gap-8 p-5 rounded-lg">
        <h1 className="font-bold text-5xl">Ready to shop?</h1>
        <Link to="/shop">
          <button className="text-white bg-lime-700 w-20 h-8 rounded-lg hover:bg-lime-900">
            Store
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MainPage;
