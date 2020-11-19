import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const Header = () => {
    const scr = '<script>alert("Error!")</script>';
    return <h2>{scr}</h2>
}


const Field = () => {
    const holder = 'Enter here';
    const styledField = {
        width: '300px',
        
    }
    return <input
        style = {styledField}
        type={text}
        placeholder={holder}
        autoComplete=""
        className="first"
        htmlFor=""/>
}

const Btn = () => {
    const text = 'Log in';
    const logged = true;
    const res = () => {
        return ' Log in, please'
    }
    return <button>{logged ? "Enter" : text}</button>
}

const App = () => {
    return (
        <div>
            <Header/>
            <Field/>
            <Btn/>
        </div>
    )
}
ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);


