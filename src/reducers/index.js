import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import AuthReducer from "./AuthReducer";
import StatsReducer from "./StatsReducer";
import JobsReducer from "./JobsReducer";
import AmiReducer from "./AmiReducer";
import ProfileReducer from "./ProfileReducer";
import NotifReducer from "./NotifReducer";

const rootPersistConfig = {
    key: 'root',
    storage: storage,
    blacklist: ['auth','jbs','stats','ami','profile','notif']
};

const authPersistConfig = {
    key: 'auth',
    storage: storage,
    blacklist: ['error','isRegistred']
};

const rootReducer = combineReducers({
	auth: persistReducer(authPersistConfig, AuthReducer),
    stats: StatsReducer,
    jbs: JobsReducer,
    ami: AmiReducer,
    profile: ProfileReducer,
    notif: NotifReducer,
});

export default persistReducer(rootPersistConfig, rootReducer)