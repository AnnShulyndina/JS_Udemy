import React, {Component} from 'react';
import './itemList.css';
import  gotService from '../../services/script'
import Spinner from '../spinner'
import ErrorMessage from "../erroMessage";

export default class ItemList extends Component {

    gotService = new gotService();
    state = {
        charList: null,
        error: false
    }
    
    componentDidMount() {
        this.gotService.getAllCharacters()
            .then((charList)=> {
                this.setState({
                    charList
                })
            })
        // this.foo.bar = 0
    }
    
    renderItems(arr) {
        return arr.map((item)=>{
            const {id, name} = item
            return(
                <li key={id}
                    className="list-group-item"
                onClick={()=> this.props.onCharSelected(41 + id)}>
                    {name}
                </li>
            )
        })
    }
    
    render() {
        const {charList, error} = this.state;
        
        if(!charList) {
            return <Spinner/>
        }
        if(error) {
            return <ErrorMessage/>
        }
    
        const items = this.renderItems(charList)
        
        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}