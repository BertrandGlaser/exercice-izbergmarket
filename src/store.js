import {createStore} from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension';
import Reducer from "./reducers/Reducer";

//creation of the store with at first the initiale state from the reducers
//also i set up here the redux devtools to check my store while i'm testing the code 

export default createStore(Reducer, devToolsEnhancer())
