import React from 'react';
import Card1 from './Card1';
import Card2 from './Card2';
import { Container, Col, Row } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
const Layout = () => {
    return (
        <Container>
            <Router>
                <Row>
                    <Col>
                        <Route exact path="/" render={() => <Redirect to="/card1" />} />
                        <Route exact path="/card1" component={Card1} />
                    </Col>
                    <Col>
                        <Route exact path="/card2" component={Card2} />
                    </Col>
                </Row>
            </Router>
        </Container>
    );
}

export default Layout;
