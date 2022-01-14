import "./App.css";
import Products from "./components/Products";

function App() {
  return (
    <div className="App app-wrapper">
      <h3 className="text-center">Crealytics Frontend Challenge</h3>
      <div className="search-bar-wrapper">
        <input type="text" name="search" placeholder="search..." />
      </div>
      <Products />
    </div>
  );
}

export default App;
