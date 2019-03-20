var redux = require('redux');

//initState
const initState = {
    count: 0,
    msg: "Hello"
}
//reducer
var reducer = (state=initState, action) => {

    if(action.type === "INC"){

        return {
            ...state,
            count: state.count + 1
        }
    }
    if(action.type === "INC_BY"){

        return {
            ...state,
            count: state.count + action.value
        }
    }
    return state;
}
//store
const store = redux.createStore(reducer);

console.log(store.getState());

//subscribe

store.subscribe(() => {
    console.log(store.getState());
})

//dispatch actions
store.dispatch({
    type: "INC"
});

store.dispatch({
    type: "INC_BY",
    value: 10
})
//console.log(store.getState());