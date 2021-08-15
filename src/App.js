import "./App.css";
import Navbar from "./Components/Menu/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/index";
import Team from "./Pages/Team/index";
import Contact from "./Pages/Contact/index";
import Events from "./Pages/Events/index";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/events" component={Events} />
          <Route path="/team" component={Team} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
