import Listing from "./components/Listing";
import "./App.css";
import etsy from "./data/etsy.json";

// const arrItems = JSON.parse(etsy);

function App() {
  return <Listing items={etsy} />;
}

export default App;
