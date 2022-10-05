import React from "react";
import { BrowserRouter as Router,
    Switch,
    Route,
    Link} from "react-router-dom";

const App = () => {
    return (
        <div>
            <h1>Clima</h1>
            <Router>
                <div>
                    <Link to="/main">Ir a Main</Link>
                </div>
                <Switch>
                    <Route exact path="/"> 
                        Welcome
                    </Route>
                    <Route path="/main">
                        Main
                    </Route>
                    <Route path="/city">
                        City
                    </Route>
                    <Route>
                        Not Found
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}
//Poenr el Ruter de "/" al final o poner exact
export default App;