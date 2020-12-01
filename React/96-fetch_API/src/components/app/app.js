import React from 'react';

import './app.css';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';


import {Col, Row, Container} from 'reactstrap';
// import styled from 'styled-components'
//
// const Button = styled.div`
// display: flex`;


export default class App extends React.Component {
    
    state = {
        showRandomChar: true,
        selectedChar: 130
    }
    
    onHideRandomChar = () => {
        this.setState(() => {
            return {
                showRandomChar: !this.state.showRandomChar
            }
        });
    }
    
    onCharSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }
    
    render() {
        
        const {showRandomChar} = this.state
        const char = showRandomChar ? <RandomChar/> : null
        
        return (
            <>
                <Container>
                    <Header/>
                </Container>
                
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {char}
                            <button className="btn-hide-randomChar"
                                    onClick={this.onHideRandomChar}>
                                Toggle random character
                            </button>
                        </Col>
                    </Row>
                    
                    <Row>
                        <Col md='6'>
                            <ItemList onCharSelected={this.onCharSelected}/>
                        </Col>
                        <Col md='6'>
                            <CharDetails charId={this.state.selectedChar}/>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
};

