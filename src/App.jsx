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
                        <div>
                            <Link to="/main">Ir a Main</Link>
                        </div>
                    </Route>
                    <Route path="/main">
                        Main
                        <div>
                            <Link to="/city">Ir a City</Link>
                        </div>
                    </Route>
                    <Route path="/city">
                        City
                        <div>
                            <Link to="/main">Ir a Main</Link>
                        </div>
                    </Route>
                    <Route>
                        Not Found
                        <div>
                            <Link to="/main">Ir a Main</Link>
                        </div>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}
//Poenr el Ruter de "/" al final o poner exact
export default App;