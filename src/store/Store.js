import {createStore} from 'redux';

//initState
const initState = {
    count: 10,
    msg: "Hello"
}


var reducer = (state=initState, action) => {

    if(action.type === "INC"){

        return {
            ...state,
            count: state.count + 1
        }
    }
    if(action.type === "DECR"){

        return {
            ...state,
            count: state.count - 1
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


const store = createStore(reducer);

export default store;