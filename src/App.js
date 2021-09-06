import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LandingPage from "./Pages/landingpage";
import CategoryScreen from "./Pages/Categorypage";
import Header from "./Components/header";
import Footer from "./Components/footer";
import SubCategoryScreen from "./Pages/SubCategoryPage";

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path={"/"} exact>
          <LandingPage />
        </Route>

        <Route path={"/EquipmentCatalog/:branch"} exact>
          <CategoryScreen />
        </Route>

        <Route path={"/EquipmentCatalog/:branch/:subcategory"} exact>
          <SubCategoryScreen />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}
