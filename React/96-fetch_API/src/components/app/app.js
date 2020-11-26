import React from 'react';

import './app.css'
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';


import {Col, Row, Container, Button} from 'reactstrap';
// import styled from 'styled-components'
//
// const Button = styled.div`
// display: flex`;

const App = () => {

    return (
        <>
            <Container>
                <Header/>
            </Container>
            
            <Container>
                <Row>
                    <Col lg={{size: 5, offset: 0}}>
                        <RandomChar/>
                    </Col>
                </Row>
                <Row>
                    <Col md='6'>
                        <ItemList/>
                    </Col>
                    <Col md='6'>
                        <CharDetails/>
                    </Col>
                </Row>
            </Container>
            
            <Button className="hide-random-block"
                    
                    outline color="secondary">secondary
            
            </Button>
        </>
    );
};

export default App;