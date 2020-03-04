import React from 'react';

import {
    Navbar,
    Nav,
    Form,
    FormControl,
    Button
} from 'react-bootstrap';

import { useSelector } from 'react-redux';

import {Link,BrowserRouter as Router} from 'react-router-dom';

const Navigation = () => {

const clickCount = useSelector((state) => state);

    return (
        <Router>
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
                <Link to="/Card1">Card1</Link>
                <Link to="/Card2">Card2</Link>
            </Nav>
            <Form inline>
                <FormControl type="text" value={clickCount} placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-light">Search</Button>
            </Form>
        </Navbar>
        </Router>
    );
}

export default Navigation;
