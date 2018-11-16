import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <nav>
                        <Link to={"/a"}>
                            <span style={{marginRight: "10px"}}>Link A</span>
                        </Link>
                        <Link to={"/b"}>
                            Link B
                        </Link>
                    </nav>
                    <section>
                        <Route path={"/"} exact={true} render={() => (<h1>Welcome!</h1>)}/>
                        <Route path={"/a"} exact={true} component={componentA}/>
                        <Route path={"/b"} exact={true} component={componentB}/>
                    </section>
                </div>
            </Router>
        );
    }
}

const componentA = () => (
    <div style={{width: "600px"}}>
        <h2>Component A</h2>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, aperiam aspernatur commodi dolorum eaque
        eos fugit ipsam necessitatibus nesciunt pariatur possimus quaerat, quibusdam repellat soluta sunt totam
        voluptates? Accusantium, ex?</div>
);

const componentB = () => (
    <div style={{width: "600px"}}>
        <h2>Component B</h2>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam dolorem dolores eius, error est,
        excepturi exercitationem illo minus necessitatibus quae quam quas quisquam quo
        reiciendis sapiente soluta tenetur, vel?</div>
);

export default App;
