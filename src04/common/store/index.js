import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1';
import createHistory from 'history/createHashHistory';
import { createBrowserHistory } from 'history';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import languageProviderReducer from '../../common/utils/languageprovider/reducer';
import layoutReducer from '../layout/store/layout-reducer';
import dashboardReducer from './../../modules/dashboard/store/dashboard-reducer';
import loginReducer from './../../modules/login/store/login-reducer';
import generalReducer from '../store/reducer/';
import accountHistoryReducer from '../../modules/account-history/store/account-history-reducer';

const history = createHistory();
const browserHistory = createBrowserHistory();
const persistConfig = {
    key: 'atic-react-pocketbank',
    storage,
    stateReconciler: autoMergeLevel1,
    whitelist: ['login', 'layout', 'form', 'security', 'locale'],
};

const reducers = combineReducers({
    router: connectRouter(browserHistory),
    locale: languageProviderReducer,
    dashboard: dashboardReducer,
    layout: layoutReducer,
    login: loginReducer,
    form: formReducer,
    general: generalReducer,
    accountHistory: accountHistoryReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const middleware = routerMiddleware(browserHistory);
const store = createStore(persistedReducer, applyMiddleware(middleware, thunk));

const persistor = persistStore(store);

export { history, store, persistor, browserHistory };