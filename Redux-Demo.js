const redux=require('redux');

const counterReducer=(state ={counter:0},action)=>{

    if(action.type==="increment"){
        return{
            counter: state.counter+5
        }
    }
    else{
        return{
            counter: state.counter-1
        }
    }
    
}
    const store= redux.createStore(counterReducer)

// console.log(store.getState())

const countSubscriber=()=>{
    const latestState=store.getState();
    console.log(latestState)
}

store.subscribe(countSubscriber)

// store.dispatch({type:"increment"})
store.dispatch({type:"decrement"})