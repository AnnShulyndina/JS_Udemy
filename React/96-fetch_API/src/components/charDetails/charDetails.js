import React, {Component} from 'react';
import './charDetails.css';
import gotService from '../../services/script'
import Spinner from "../spinner";
import ErrorMessage from "../erroMessage";

export default class CharDetails extends Component {
    // новый экземпляр
    gotService = new gotService();
    
    state = {
        char: null,
        loading: false,
        error: false
    }
    
    componentDidMount() {
        this.updateChar();
    }
    
    componentDidUpdate(prevProps) {
        if (this.props.charId !== prevProps.charId) {
            this.updateChar()
        }
    }
    
    updateChar() {
        const {charId} = this.props;
        if (!charId) {
            return;
        }
        this.gotService.getCharacter(charId)
            .then((char) => {
                this.setState({char, loading: false})
            })
         // this.foo.bar = 0
    }
    
    render() {
        const {loading, error} = this.state
        
        if (loading) {
            return <Spinner/>
        }
        if (error) {
            return <ErrorMessage/>
        }
        
        
        if (!this.state.char) {
            return <span className='select-error'>Please select a character</span>
        }
        
        const {name, gender, born, died, culture} = this.state.char;
        
        
        return (
            <div className="char-details rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender</span>
                        <span>{gender}</span>
                    </li>
                    
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Born</span>
                        <span>{born}</span>
                    </li>
                    
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Died</span>
                        <span>{died}</span>
                    </li>
                    
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Culture</span>
                        <span>{culture}</span>
                    </li>
                
                </ul>
            </div>
        );
    }
}