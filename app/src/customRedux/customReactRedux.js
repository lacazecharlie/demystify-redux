import React, { createContext, Component } from "react";
const ReduxContext = createContext();

export const Provider = ({ store, children }) => (
    <ReduxContext.Provider value={store}>
        {children}
    </ReduxContext.Provider>
)

export const connect = (mapStateToProps, mapDispatchToProps) => (WrappedComponent) =>  {
    class Wrapper extends Component {
        componentDidMount() {
            const { subscribe } = this.context;
            subscribe(() => this.forceUpdate())
        }

        render() {
            const { getState, dispatch } = this.context;
            return <WrappedComponent {...mapStateToProps(getState())} {...mapDispatchToProps(dispatch)} />
        }
    }
    Wrapper.contextType = ReduxContext;
    return Wrapper;
}