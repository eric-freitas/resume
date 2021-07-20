import { createStore, Store } from 'redux'

import rootReducer from './reducers'

export class StateLoader {

    loadState() {
        try {
            let serializedState = sessionStorage.getItem("resume:state");

            if (serializedState === null) {
                return this.initializeState();
            }

            return JSON.parse(serializedState);
        }
        catch (err) {
            return this.initializeState();
        }
    }

    saveState(state: any) {
        try {
            let serializedState = JSON.stringify(state);
            sessionStorage.setItem("resume:state", serializedState);

        }
        catch (err) {
        }
    }

    initializeState() {
        return {
            
        };
    }
}

export function getStore() {
    const stateLoader = new StateLoader();
    let store: Store;

    store = createStore(
        rootReducer,
        stateLoader.loadState()
    );

    store.subscribe(() => {
        stateLoader.saveState(store.getState());
    });
    return store;
}
