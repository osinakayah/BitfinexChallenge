import { createStore, applyMiddleware, compose } from 'redux'

import createSagaMiddleware from 'redux-saga'
// import ScreenTracking from './ScreenTrackingMiddleware'
import { appNavigatorMiddleware } from '../Navigation/ReduxNavigation'

// creates the store
export default (rootReducer, rootSaga) => {
    /* ------------- Redux Configuration ------------- */

    const middleware = []
    const enhancers = []

    /* ------------- Navigation Middleware ------------ */
    middleware.push(appNavigatorMiddleware)

    /* ------------- Analytics Middleware ------------- */
    // middleware.push(ScreenTracking)

    /* ------------- Saga Middleware ------------- */


    const sagaMiddleware = createSagaMiddleware({ sagaMonitor: null })
    middleware.push(sagaMiddleware)

    /* ------------- Assemble Middleware ------------- */

    enhancers.push(applyMiddleware(...middleware))

    const store = createStore(rootReducer, compose(...enhancers))

    // kick off root saga
    let sagasManager = sagaMiddleware.run(rootSaga)

    return {
        store,
        sagasManager,
        sagaMiddleware
    }
}