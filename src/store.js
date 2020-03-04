import { createStore } from 'redux';

function reducer(state=0, action){
    switch (action.type) {
        case "INCREMENT":
            return state + 1; 
        default:
            return state;
    }
}

export const store= createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export const increment = () =>{
    return {
    type:"INCREMENT"   
} 
}