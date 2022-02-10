
import Loginpage from './component/Loginpage';
import Homepage from './component/Homepage';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from './component/Register';
import Requirement from './component/Requirement';





function App() {
  return (
    <>
     
      <Router>
        <Navbar />
        
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/Loginpage" >
              <Loginpage />
            </Route>
            <Route exact path="/Register" >
              < Register />
            </Route>
            <Route exact path="/Requirement">
              <Requirement/>
            </Route>
          </Switch>
        </div>

      </Router>

    </>
  );
}

export default App;
