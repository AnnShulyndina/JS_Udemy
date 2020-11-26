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


export default class App extends React.Component {
    
    state = {
        showRandomChar: true,
        
    }
    
    onHideRandomChar = () => {
                this.setState((state)=> {
                    return {
                        showRandomChar: !this.state.showRandomChar
                    }
                });
    }
    
    render() {
        
         const {showRandomChar} = this.state
         const char = showRandomChar ?  <RandomChar/> : null
        
        
        
        return (
            <>
                <Container>
                    <Header/>
                </Container>
                
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {char}
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
                
                <Button className="hide-random-char-component"
                        outline color="secondary"
                        onClick={this.onHideRandomChar}>
              
                    secondary
                </Button>
            </>
        );
    }
};

