import React from 'react';

import './app.css';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from "../erroMessage";
import CharacterPage from "../characterPage";
import ItemList from "../itemList";
import CharDetails from "../charDetails";
import gotService from '../../services/script'

import {Col, Row, Container} from 'reactstrap';



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
                    
                    <Row>
                        <Col md='6'>
                            <ItemList onItemSelected={this.onItemSelected}
                                      getData={this.gotService.getAllBooks}
                                      renderItem={(item) => item.name}/>
                        </Col>
                        <Col>
                            <CharDetails charId={this.state.selectedChar}/>
                        </Col>
                    </Row>
                    
                    
                    
                    <Row>
                        <Col md='6'>
                            <ItemList onItemSelected={this.onItemSelected}
                                      getData={this.gotService.getAllHouses}
                                      renderItem={(item) => item.name}/>
                        </Col>
                        <Col>
                            <CharDetails charId = {this.state.selectedChar}/>
                        </Col>
                    
                    </Row>
                
                </Container>
            </>
        );
    }
};

