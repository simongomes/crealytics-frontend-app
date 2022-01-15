import "./App.css";
import Products from "./components/Products";
import { useDispatch } from "react-redux";
import {
  updateSearchTerm,
  search,
  updateFilter,
  paginate,
} from "./store/reducers/productReducer";

function App() {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    const term = e.target.value;
    dispatch(updateSearchTerm(term));
    dispatch(search());
  };

  const handlSaleFilter = (e) => {
    const value = e.target.checked;
    dispatch(updateFilter({ filterType: "sale", value }));
    dispatch(search(""));
  };

  const handleGenderFilter = (e) => {
    const value = e.target.value;
    dispatch(updateFilter({ filterType: "gender", value }));
    dispatch(search(""));
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
      <div className="filter-wrapper">
        Filter:{" "}
        <select onChange={handleGenderFilter}>
          <option value="-1">Select and Option</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="unisex">Unisex</option>
        </select>{" "}
        <label>
          Sale <input type="checkbox" name="sale" onChange={handlSaleFilter} />
        </label>
      </div>
      <Products />
      <div className="pagination-wrapper">
        <div className="left" onClick={() => dispatch(paginate("left"))}>
          {"<<"}
        </div>
        <div className="right" onClick={() => dispatch(paginate("right"))}>
          {">>"}
        </div>
      </div>
    </div>
  );
}

export default App;
