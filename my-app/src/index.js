import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import App from './components/app/';


class WhoAmI extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         years: 26,
    //         nationality: "uk"
    //     };
        // this.nextYear = this.nextYear.bind(this);
        
        
    //     this.nextYear = () =>
    //         this.setState(state => ({
    //             years: ++state.years
    //         })
    //         );
    // }
        
        state = {
            years: 26
        }
        
        nextYear = () => {
                this.setState(state => ({
                        years: ++state.years
                    })
                );
        }
    
    
    // nextYear() {
    //     this.setState(state=> ({
    //         years: ++state.years
    //     })
    //     );
    // }
    
    render() {
        const {name, surname, link} = this.props
        const {years} = this.state
        return (
            <div>
                <button onClick={this.nextYear}>++</button>;
                <h1>My name is {name}, surname - {surname}, years = {years}</h1>
                <a href={link}>My profile</a>
            </div>
        )
    }
}





// function WhoAmI ({name, surname, link}) {
//     return (
//         <div>
//             <h1>My name is {name}, surname - {surname}</h1>
//             <a href={link}>My profile</a>
//         </div>
//     )
// }


const All = () => {
    return (
        <div>
            <WhoAmI name="John" surname="Smith" link="facebook.com"/>
            <WhoAmI name="Ivan" surname="Smith" link="facebook.com"/>
            <WhoAmI name="Alex" surname="Smith" link="facebook.com"/>
        </div>
    )
}

// ReactDOM.render(
//     <React.StrictMode>
//         <App/>
//     </React.StrictMode>,
//     document.getElementById('root')
// );

ReactDOM.render(
    <All/>,
    document.getElementById('root')
);

