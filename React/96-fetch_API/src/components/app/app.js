import React from 'react';

import './app.css';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from "../erroMessage";
import CharacterPage from "../characterPage";


import {Col, Row, Container} from 'reactstrap';
// import styled from 'styled-components'
//
// const Button = styled.div`
// display: flex`;


export default class App extends React.Component {
    
    state = {
        showRandomChar: true,
        error: false
    }
    
    componentDidCatch(error) {
        console.log('error');
        this.setState({
                error: true
            }
        )
    }
    
    onHideRandomChar = () => {
        this.setState(() => {
            return {
                showRandomChar: !this.state.showRandomChar
            }
        });
    }
    
   
    
    render() {
        
        const {showRandomChar} = this.state
        const char = showRandomChar ? <RandomChar/> : null
        
        if (this.state.error) {
            return <ErrorMessage/>
        }
        
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
                    
                  <CharacterPage/>
                </Container>
            </>
        );
    }
};

