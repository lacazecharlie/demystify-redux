
export const createStore = (reducer) => {
    let state;
    const listeners = [];

    const getState = () => {
        return state;
    }

    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach(listener => listener());
    }

    const subscribe = (listener) => {
        listeners.push(listener);
    }

    dispatch({ type: '@@INIT'})

    return {
        getState,
        dispatch,
        subscribe
    }
}