import "./App.css";
import Home from "./pages/Home";
import MeatAndFish from "./pages/MeatAndFish";
import FruitAndVegetables from "./pages/FruitAndVegetables";
import Bakery from "./pages/Bakery";
import Drinks from "./pages/Drinks";
import Kitchen from "./pages/Kitchen";
import SpecialNutrition from "./pages/SpecialNutrition";
import Baby from "./pages/Baby";
import Pharmacy from "./pages/Pharmacy";
import Blog from "./pages/Blog";
import Checkout from "./pages/Checkout";
import ProductInfo from "./pages/ProductInfo";
import { BrowserRouter } from "react-router-dom";
import { Route, Redirect } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Redirect exact from="/" to="/home" />
      <Route path="/home" render={() => <Home />} />
      <Route path="/bakery" render={Bakery} />
      <Route path="/fruit-and-vegetables" render={FruitAndVegetables} />
      <Route path="/meat-and-fish" render={MeatAndFish} />
      <Route path="/drinks" render={Drinks} />
      <Route path="/kitchen" render={Kitchen} />
      <Route path="/special-nutrition" render={SpecialNutrition} />
      <Route path="/baby" render={Baby} />
      <Route path="/pharmacy" render={Pharmacy} />
      <Route path="/blog" render={Blog} />
      <Route path="/checkout" render={Checkout} />
      <Route path="/product-info" render={ProductInfo} />
    </BrowserRouter>
  );
}

export default App;
