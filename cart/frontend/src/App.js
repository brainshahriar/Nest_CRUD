import './App.css';
import { BrowserRouter,Redirect, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound.jsx"

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route path="/cart" component={Cart} />
          <Route path="/not-found" component={NotFound}/>
          <Route path="/" exact component={Home} />
          <Redirect to="/not-found" />
        </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
