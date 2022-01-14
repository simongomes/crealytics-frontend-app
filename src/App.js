import "./App.css";
import Products from "./components/Products";
import { useDispatch } from "react-redux";
import { search } from "./store/reducers/productReducer";

function App() {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    const term = e.target.value;
    dispatch(search(term));
  };

  return (
    <div className="App app-wrapper">
      <h3 className="text-center">Crealytics Frontend Challenge</h3>
      <div className="search-bar-wrapper">
        <input
          type="text"
          name="search"
          placeholder="search..."
          onInput={handleSearch}
        />
      </div>
      <Products />
    </div>
  );
}

export default App;
