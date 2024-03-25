
//elon: whatafawk is this dod shit

import { configureStore, PayloadAction } from "@reduxjs/toolkit";
import { Dispatch } from "redux";
import {actions, AppState} from './store'

//will bw invoked automaticly on every dispaych
export function logger(store: ReturnType<typeof configureStore>) {
    return function(next: Dispatch) {
        return function(action: PayloadAction) {
            // state not changed yet.
            console.log("state not changed yet.");
            // state
            const result = next(action); // Must call next for the dispatch to work
            //state changed
            console.log("Something changed..."+ action);
            return result;
        }
    }
}

export const arrawLogger = (store: ReturnType<typeof configureStore>) => 
    (next: Dispatch) => (action: PayloadAction) => {
        // state not changed yet.
        console.log("state not changed yet.");
        // state
        const result = next(action); // Must call next for the dispatch to work
        //state changed
        console.log("Something changed..."+ action);
        return result;
};