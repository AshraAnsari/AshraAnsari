import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ImageWrapper from "./component/ImageWrapper";
import SingleImage from "./component/SingleImage.js";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/:id" render={(props) =><SingleImage {...props} />} />
          <Route path="/">
            <ImageWrapper />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
