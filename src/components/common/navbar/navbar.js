import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Button, Container, Form, FormControl } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from "react-router-dom";
import SpotPortfolio from '../../../pages/portfolio/spot/landing'
import SavingPortfolio from '../../../pages/portfolio/saving/landing'
import InterestPortfolio from '../../../pages/portfolio/interest/landing'
import Home from '../../../pages/home/home'
class InvestmentNavbar extends Component {
    render() {
        return (
            <Router>
                <Navbar bg="light" expand="lg">
                    <Container fluid>
                        <Navbar.Brand href="#">Investments</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link href="#home"><Link to="/">Home</Link></Nav.Link>
                                <NavDropdown title="Portfolio" id="navbarScrollingDropdown">
                                    <NavDropdown.Item href="#spot"><Link to="/spot">Spot</Link></NavDropdown.Item>
                                    <NavDropdown.Item href="#savings"><Link to="/savings">Savings</Link></NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#interest">
                                        <Link to="/interest">Interest</Link>
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Switch>
                    <Route path="/interest">
                        <InterestPortfolio />
                    </Route>
                    <Route path="/savings">
                        <SavingPortfolio />
                    </Route>
                    <Route path="/spot">
                        <SpotPortfolio />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default InvestmentNavbar;
