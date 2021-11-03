import {createStore} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import reducer from "./reducer";

const composeEnhancers = composeWithDevTools({});

export default createStore(reducer, composeEnhancers());