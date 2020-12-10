import {createStore} from 'redux';

const reducer = (state=0, action) => {
    switch (action.type) {
        case 'PLUS':
            return state + 1;
        case 'MINUS':
            return state - 1;
        case 'RVS':
            return state = 0;
        default:
            return state;
    }
}

const store = createStore(reducer)

const plus = () => ({type:'PLUS'})
const minus = () => ({type:'MINUS'})
const rvs = () => ({type:'RVS'})

document.getElementById('plus').addEventListener('click', () => {
    store.dispatch(plus());
});
document.getElementById('minus').addEventListener('click', () => {
    store.dispatch(minus());
});
document.getElementById('rvs').addEventListener('click', () => {
    store.dispatch(rvs());
});


const update = ()=> {
    document.getElementById("counter").textContent = store.getState();
}
store.subscribe(update)


