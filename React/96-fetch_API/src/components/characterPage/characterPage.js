import React from 'react';

import ItemList from '../itemList';
import CharDetails, {Field} from "../charDetails";
import ErrorMessage from "../erroMessage";
import RowBlock from "../rowBlock";


import gotService from '../../services/script'

export default class CharacterPage extends React.Component {
    
    gotService = new gotService()
    
    state = {
        selectedChar: 130,
        error: false
    }
    
    onItemSelected = (id) => {
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
        
        const itemList = (
            <ItemList onItemSelected={this.onItemSelected}
                      getData={this.gotService.getAllCharacters}
                      renderItem={(name, gender) => `${name}(${gender})`}/>
        )
        
        const charDetails = (
            <CharDetails charId={this.state.selectedChar}>
                <Field field='gender' label='Gender'/>
                <Field field='born' label='Born'/>
                <Field field='died' label='Died'/>
                <Field field='culture' label='Culture'/>
            </CharDetails>
        )
        
        
        return (
            <RowBlock left={itemList} right={charDetails}/>
        )
    }
}