import React from "react";
import { BrowserRouter as Router,
    Switch,
    Route} from "react-router-dom";
import { Grid } from "@mui/material";
import WelcomePage from "./pages/WelcomePage"
import MainPage from "./pages/MainPage"
import CityPage from "./pages/CityPage"
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
    return (
        <Grid container
            justifyContent="center"
            direction="row">
            <Grid item 
                xs={12}
                sm={11}
                md={10}
                lg={8}>
                <h1>Clima</h1>
                <Router>
                    <Switch>
                        <Route exact path="/"> 
                            <WelcomePage />
                        </Route>
                        <Route path="/main">
                            <MainPage />
                        </Route>
                        <Route path="/city">
                            <CityPage />
                        </Route>
                        <Route>
                            <NotFoundPage />
                        </Route>
                    </Switch>
                </Router>
            </Grid>
        </Grid>
    );
}
//Poenr el Ruter de "/" al final o poner exact
export default App;