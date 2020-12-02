import React from 'react';
import {Col, Row, Container} from 'reactstrap';
import ItemList from '../itemList';
import CharDetails from "../charDetails";
import ErrorMessage from "../erroMessage";

export default class CharacterPage extends React.Component {
    
    state = {
        selectedChar: 130,
        error: false
    }
    
    onCharSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }
    
    componentDidCatch(error) {
        this.setState({
            error: true
        })
    }
    
    render() {
        if (this.state.error) {
            return <ErrorMessage/>
        }
        return (
            <Row>
                <Col md='6'>
                    <ItemList onCharSelected={this.onCharSelected}/>
                </Col>
                <Col md='6'>
                    <CharDetails charId={this.state.selectedChar}/>
                </Col>
            </Row>
        )
    }
}