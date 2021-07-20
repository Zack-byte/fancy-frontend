import { Action } from '@ngrx/store'; 
import { Test } from 'src/app/models/test-model/test.model';
import * as TestActions from './test.store.actions'; 

const initialState: Test = {
    name: 'Initial Test', 
    url: 'http://google.com'
}

export function Testreducer(state: Test[] = [initialState], action: TestActions.Actions){
    switch (action.type){
        case TestActions.ADD_TEST:
            return [...state, action.payload]; 
        default:
            return state;
    }
}